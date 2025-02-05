import { Dropbox } from 'dropbox';

const convertToCSV = (data) => {
    return Object.values(data)
        .map(value => `"${value}"`)
        .join(',');
};

export const saveDataToDropbox = async (submitData, setHasSubmitedForm, setLoading) => {
    try {
        const accessToken = process.env.NEXT_PUBLIC_DROPBOX_ACCESS_TOKEN;
        const dbx = new Dropbox({ accessToken });

        const filePath = '/planilha_leads.csv';

        let existingData = '';
        try {
            await dbx.filesGetMetadata({ path: filePath });

            const existingFile = await dbx.filesDownload({ path: filePath });
            const fileBlob = existingFile.result.fileBlob;
            existingData = await fileBlob.text();
        } catch (error) {
            if (error.status !== 409) {
                throw error;
            }
        }

        const headers = Object.keys(submitData).join(',');
        const newRow = convertToCSV(submitData);
        const csvData = existingData ? `${existingData}\n${newRow}` : `${headers}\n${newRow}`;

        const response = await dbx.filesUpload({
            path: filePath,
            contents: csvData,
            mode: 'overwrite',
            autorename: false,
            mute: false,
        });
        console.log('Arquivo enviado com sucesso!');
        setHasSubmitedForm(true)
    } catch (error) {
        console.error('Erro ao enviar arquivo para o Dropbox:', error.response?.data || error.message);
    } finally {
        setLoading(false);
    }
}
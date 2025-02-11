import { Dropbox } from 'dropbox';
import axios from 'axios';

const getDropboxAccessToken = async () => {
    try {
        const response = await axios.post(
            'https://api.dropbox.com/oauth2/token',
            new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: process.env.NEXT_PUBLIC_DROPBOX_REFRESH_TOKEN,
                client_id: process.env.NEXT_PUBLIC_DROPBOX_APP_KEY,
                client_secret: process.env.NEXT_PUBLIC_DROPBOX_APP_SECRET,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error('Erro ao renovar access token do Dropbox:', error);
        return null;
    }
};

const convertToCSV = (data) => {
    return Object.values(data)
        .map(value => `"${value}"`)
        .join(',');
};

export const saveDataToDropbox = async (submitData, setHasSubmitedForm, setLoading) => {
    try {
        const accessToken = await getDropboxAccessToken();
        if (!accessToken) throw new Error('Não foi possível obter o token de acesso do Dropbox');

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

        await dbx.filesUpload({
            path: filePath,
            contents: csvData,
            mode: 'overwrite',
            autorename: false,
            mute: false,
        });

        console.log('Arquivo enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar arquivo para o Dropbox:', error.response?.data || error.message);
    } finally {
        setHasSubmitedForm(true);
        setLoading(false);
    }
};

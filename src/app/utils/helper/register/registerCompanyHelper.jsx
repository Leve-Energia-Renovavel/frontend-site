export const companyInputIncomplete = (value) => {
    return value?.toString()?.length > 0 && value.toString()?.length < 8
};
export const regularTextInputFilled = (value) => {
    return value?.toString().length > 1
};
export const companyInputFilled = (value) => {
    if (!value) return null
    return value?.toString()?.length >= 1
};
export const cnpjInputComplete = (value) => {
    if (!value || value == "__.___.___/____-__") return null;

    const cleanedValue = value.toString().replace(/\D/g, '');

    if (cleanedValue.length !== 14) return false;

    const invalidSequences = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999',
    ];
    if (invalidSequences.includes(cleanedValue)) return false;

    const calculateChecksum = (cnpj, position) => {
        let sum = 0;
        const weights = position === 12
            ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        for (let i = 0; i < position; i++) {
            sum += cnpj[i] * weights[i];
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const digits = cleanedValue.split('').map(Number);
    const firstChecksum = calculateChecksum(digits, 12);
    const secondChecksum = calculateChecksum(digits, 13);

    return digits[12] === firstChecksum && digits[13] === secondChecksum;
};

export const handleClickFiles = (fileType, formState, setFormState) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = (event) => {
        handleChangeFiles(event, fileType, formState, setFormState);
    };
    fileInput.click();
};

export const handleChangeFiles = (event, fileType, formState, setFormState) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded) {
        setFormState((prevState) => ({
            ...prevState,
            [`${fileType}File`]: fileUploaded,
        }));
        console.log(`${fileType}File updated:`, fileUploaded);
    }
};

export const handleDeleteFiles = (fileType, formState, setFormState) => {
    setFormState((prevState) => ({
        ...prevState,
        [`${fileType}File`]: null,
    }));
    console.log(`${fileType}File removed`);
};
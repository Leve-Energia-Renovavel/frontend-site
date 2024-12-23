
export const regularTextInputFilled = (value) => {
    return value?.toString().length > 1
};
export const costTextInputFilled = (value) => {
    const formattedValue = parseFloat(value?.toString()?.replace(",", "."))
    return formattedValue > 200 && formattedValue <= 20000
};
export const normalTextInputFilled = (value) => {
    const textRegex = /^[a-zA-ZÀ-ú\s]+$/;
    return value?.length > 1 && textRegex.test(value);
};

export const emailInputFilled = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};
export const phoneInputFilled = (value) => {
    return !value?.includes('_') && value?.length >= 11;
};

export const rgInputFilled = (value) => {
    return !value?.includes('_') && value?.length > 1;
};

export const cpfInputFilled = (value) => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // CPF format: 000.000.000-00
    if (!cpfRegex.test(value)) return false;

    // CPF validation logic
    const cpfNumbers = value?.replace(/\D/g, "");
    let sum = 0;
    let remainder;

    if (/^(\d)\1+$/.test(cpfNumbers)) return false;

    // First digit validation
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpfNumbers[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpfNumbers[9])) return false;

    // Second digit validation
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpfNumbers[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpfNumbers[10]);
};

export const birthDateInputFilled = (value) => {
    const dateRegex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/; // DD/MM/YYYY format
    if (!dateRegex.test(value)) return false;

    // Validate date logic
    const [day, month, year] = value?.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        year > 1900 &&
        year <= new Date().getFullYear()
    );
};


export const costValidation = (cost) => {
    if (cost?.toString()?.includes(',')) {
        return parseInt(cost.replace(/[^0-9]/g, ""), 10) / 100;
    } else {
        return parseInt(cost, 10);
    }
}

export const newCostValidation = (newCost) => {
    if (isNaN(newCost)) return 0;
    return Math.min(Math.max(newCost, 0), 20000);
};
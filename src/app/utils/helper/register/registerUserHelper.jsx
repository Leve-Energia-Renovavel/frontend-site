import { background } from "@/app/pages/globalStyles";

export const inputSelectIncomplete = (value) => {
    if (value?.toString()?.length === 0) return null
    return value?.toString().length < 1
};
export const inputIncomplete = (value) => {
    if (value?.toString()?.length === 0) return null
    if (!value?.includes(" ")) return true
};
export const inputCompleted = (value) => {
    if (!value) return null
    return value?.toString().length >= 1
};
export const costTextInputFilled = (value) => {
    const formattedValue = parseFloat(value?.toString()?.replace(",", "."))
    return formattedValue > 200 && formattedValue <= 20000
};
export const normalTextInputFilled = (value) => {
    if (!value) return null
    const textRegex = /^[a-zA-ZÀ-ú\s]+$/;
    return value?.length > 1 && textRegex.test(value);
};

export const emailInputComplete = (value) => {
    if (!value) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value?.length >= 1 && emailRegex.test(value)) {
        return true
    }
};

export const emailInputIncomplete = (value) => {
    if (!value) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value?.length >= 1 && !emailRegex.test(value)) {
        return true
    }
};
export const phoneInputComplete = (value) => {
    return !value?.includes('_') && value?.length >= 11;
};
export const phoneInputIncomplete = (value) => {
    if (!value || value === "(__) _____-____") return null
    return value?.includes('_')
};
export const phoneInputNotFilled = (value) => {
    if (value === "(__) _____-____") return null
    return value?.replace("_", "")?.length < 3
};

export const rgInputFilled = (value) => {
    if (!value || value === "________-_") return null
    return !value?.includes('_') && value?.length > 1;
};

export const cpfInputFilled = (value) => {
    if (!value || value === "___.___.___-__") return null

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

export const birthDateInputIncomplete = (value) => {
    if (!value || value === "__/__/____") return null
    const dateRegex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
    if (!dateRegex.test(value) || value?.includes('_')) return true;
};
export const birthDateInputFilled = (value) => {
    if (!value) return null
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


export const handleChangeUserCost = (event, setFormState) => {
    let newCost = event.target.value;

    newCost = newCost.replace(/\D/g, '');

    const validatedCost = newCostValidation(parseInt(newCost, 10) / 100);

    const integerPart = Math.floor(validatedCost).toString();
    const decimalPart = (validatedCost % 1).toFixed(2).split('.')[1];

    newCost = `${integerPart},${decimalPart}`;

    setFormState((prevState) => ({ ...prevState, cost: newCost }));
};

export const labelColorHelper = (value) => {
    if (value === null || value === "" || !value) return background.greyMediumHigh
    if (value === false) return background.orange
    if (value === true) return background.green
}
export const labelColorHelperForMaskedInputs = (value) => {
    if (value === "(__) _____-____" ||
        value === "________-_" ||
        value === "__/__/____" ||
        value === "___.___.___-__"
    ) return background.greyMediumHigh
    if (value === false || value === "") return background.orange
    if (value === true) return background.green
}

export const shrinkHelper = (value) => {
    return value !== ""
}
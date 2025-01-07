import { background } from "@/app/pages/globalStyles";
import { stringLengthIsZero } from "../globalHelper";

export const nameInputIncomplete = (value) => {
    if (!value || stringLengthIsZero(value)) return null
    if (!value?.includes(" ")) return true
};
export const nameInputCompleted = (value) => {
    if (!value) return null
    if (value?.toString().length >= 1 && value?.includes(" ")) return true
};

export const phoneInputComplete = (value) => {
    return !value?.includes('_') && value?.length >= 11;
};
export const phoneInputIncomplete = (value) => {
    if (!value || value === "(__) _____-____") return null
    if (value?.includes('_')) return true
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

export const cepInputIncomplete = (value) => {
    if (!value || value === "_____-___") return null
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    if (value?.includes('_') || !cepRegex.test(value)) return true
};

export const cepInputComplete = (value) => {
    if (!value || value === "_____-___") return null
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    return cepRegex.test(value);
};
export const couponInputComplete = (value) => {
    if (!value) return null
    if (value?.toString()?.length > 0) return true
};

export const labelColorHelperForMasked = (value) => {
    if (value?.toString().length < 1) return background.greyMediumHigh
    if (value?.toString().length > 0 && value.includes('_')) return background.orange
    if (!value.includes('_')) return background.green
}
export const labelColorHelper = (value) => {
    if (value === null || value === "") return background.greyMediumHigh
    if (value === false) return background.orange
    if (value === true) return background.green
}

export const removeAutoFill = {
    'aria-autocomplete': 'none',
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: 'false',
    InputProps: {
        autoComplete: 'new-password',
        form: {
            autoComplete: 'off',
        },
        inputProps: {
            inputMode: 'numeric',
        },
    },
};
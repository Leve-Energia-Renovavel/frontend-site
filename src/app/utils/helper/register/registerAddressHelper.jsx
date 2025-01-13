import { DISTRIBUTOR } from "@/app/pages/enums/globalEnums";
import { background } from "@/app/pages/globalStyles";

export const inputIncomplete = (value) => {
    if (value?.toString()?.length === 0) return null
    return value?.toString()?.length < 1
};
export const cepInputIncomplete = (value) => {
    if (!value || value?.toString()?.length === 0) return null
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    if (value?.includes('_') || !cepRegex.test(value)) return true
};

export const cepInputComplete = (value) => {
    if (!value) return null
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    return cepRegex.test(value);
};

export const inputIsEmpty = (value) => {
    if (!value) return null
    return value?.length < 1;
}

export const shrinkHelper = (value) => {
    return value !== ""
}
export const activeDistributorsForDisclaimer = (distributor) => {
    return distributor === DISTRIBUTOR.CEMIG
        || distributor === DISTRIBUTOR.CPFL_PAULISTA
        || distributor === DISTRIBUTOR.CPFL_PIRATININGA
}

export const addressTextInputFilled = (value) => {
    if (!value) return null
    return value?.toString().length > 0;
};
export const numberInputIncomplete = (value) => {
    if (!value) return null
    if (value === "_____") return true
};
export const numberInputFilled = (value) => {
    if (!value) return null
    const underscoreCount = (value?.match(/_/g) || []).length;
    if (underscoreCount === 5) return null
    return underscoreCount <= 4 && underscoreCount >= 0;
};

export const cityInputFilled = (value) => {
    const cityRegex = /^[a-zA-ZÀ-ú\s]+$/;
    return cityRegex.test(value);
};

export const labelColorHelper = (value) => {
    if (value === null) return background.greyMediumHigh
    if (value === false) return background.orange
    if (value === true) return background.green
}
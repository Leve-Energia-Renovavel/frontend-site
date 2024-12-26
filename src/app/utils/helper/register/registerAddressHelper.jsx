import { DISTRIBUTOR } from "@/app/pages/enums/globalEnums"

export const inputIncomplete = (value) => {
    return value?.toString()?.length > 5 && value.toString()?.length < 8
};
export const activeDistributorsForDisclaimer = (distributor) => {
    return distributor === DISTRIBUTOR.CEMIG
        || distributor === DISTRIBUTOR.CPFL_PAULISTA
        || distributor === DISTRIBUTOR.CPFL_PIRATININGA
}

export const addressTextInputFilled = (value) => {
    return value?.toString().length > 0;
};
export const numberInputIncomplete = (value) => {
    return value?.length < 1;
};
export const numberInputFilled = (value) => {
    const underscoreCount = (value?.match(/_/g) || []).length;
    return underscoreCount <= 4 && underscoreCount > 0;
};
export const cepInputFilled = (value) => {
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    return cepRegex.test(value);
};
export const cityInputFilled = (value) => {
    const cityRegex = /^[a-zA-ZÀ-ú\s]+$/;
    return cityRegex.test(value);
};
import { background } from "@/app/pages/globalStyles"

export const isTrue = (value) => {
    return value === true
}
export const isEmpty = (value) => {
    return value === ""
}
export const isNotEmpty = (value) => {
    return value !== ""
}
export const dontIncludesUnderscore = (value) => {
    return !value?.includes('_')
}

export const labelColorHelperForMasked = (value) => {
    if (value?.toString().length < 1) return background.greyMediumHigh
    if (value?.toString().length > 0 && value.includes('_')) return background.orange
    if (!value.includes('_')) return background.orange
}
export const labelColorHelper = (value) => {
    if (value === null || value === "") return background.greyMediumHigh
    if (value === false) return background.orange
    if (value === true) return background.green
}

export const isValidCNPJ = (cnpj) => {

    const cleanedValue = cnpj?.toString()?.replace(/\D/g, '');
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

    if (!cnpj || cnpj?.includes("_") || cleanedValue.length !== 14 || invalidSequences.includes(cleanedValue)) return false;
    else return true


}
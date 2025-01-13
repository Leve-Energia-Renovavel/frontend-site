
export const isTrue = (value) => {
    return value === true
}
export const isNull = (value) => {
    return value === null
}
export const isEmpty = (value) => {
    return value === ""
}
export const isNotEmpty = (value) => {
    return value !== ""
}
export const stringLengthIsZero = (value) => {
    return value?.toString()?.length === 0
}
export const dontIncludesUnderscore = (value) => {
    return !value?.includes('_')
}
export const valuesAreNotEqual = (first, second) => {
    if (first !== second) return true
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
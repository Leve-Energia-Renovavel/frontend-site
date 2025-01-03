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
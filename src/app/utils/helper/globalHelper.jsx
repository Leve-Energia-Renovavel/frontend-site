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
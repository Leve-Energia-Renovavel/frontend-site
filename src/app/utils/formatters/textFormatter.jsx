export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string?.slice(1);
};
export const pascalCaseWord = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};
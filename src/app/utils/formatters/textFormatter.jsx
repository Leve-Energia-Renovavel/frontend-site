export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string?.slice(1);
};
export const pascalCaseWord = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};

export const capitalizeEachWord = (string) => {
    if (!string) return '';
    return string
        ?.toLowerCase()
        ?.split(' ')
        ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join(' ');
};
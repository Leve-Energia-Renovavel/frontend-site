export const costValidation = (cost) => {
    if (cost.includes(',')) {
        return parseInt(cost.replace(/[^0-9]/g, ""), 10) / 100;
    } else {
        return parseInt(cost, 10);
    }
}
export const costValidation = (cost) => {
    if (cost.includes(',')) {
        return parseInt(cost.replace(/[^0-9]/g, ""), 10) / 100;
    } else {
        return parseInt(cost, 10);
    }
}

export const formatBrazillianCurrency = (value) => {
    return value ? value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0,00"
}
export const formatBrazillianCurrencyWithoutDecimals = (value) => {
    return value ? value.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "0,00"
}
export const clearChartCost = (value) => {
    if (!value) return "0";

    const truncatedValue = Math.floor(value);
    return truncatedValue.toLocaleString().replace(".", ",");
};
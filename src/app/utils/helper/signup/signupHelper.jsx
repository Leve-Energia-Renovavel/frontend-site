export const benefits = [
    "Adesão gratuita",
    "Sem custos adicionais",
    "Sem instalações ou obras",
    "Serviço regulado pela ANEEL",
    "Cancele quando quiser",
]

export const costValidation = (cost) => {
    if (cost.includes(',')) {
        return parseInt(cost.replace(/[^0-9]/g, ""), 10) / 100;
    } else {
        return parseInt(cost, 10);
    }
}

export const newCostValidation = (newCost) => {
    if (isNaN(newCost)) return 0;
    return Math.min(Math.max(newCost, 0), 20000);
};
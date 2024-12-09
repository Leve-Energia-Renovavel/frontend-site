import { background } from "@/app/pages/globalStyles";

export function formatBillingArray(array, maxSize) {
    if (array.length < maxSize || array.length < 1) {
        return array
    }
    const result = [];
    for (let i = 0; i < array.length; i += maxSize) {
        const chunk = array?.slice(i, i + maxSize);
        while (chunk.length < maxSize) {
            chunk.push({
                uuid: "",
                installationId: "",
                energyConsumed: "",
                energyInjected: "",
                availability: "",
                value: "",
                billDate: "",
                dueDate: "",
                status: "",
                urlBill: "",
                urlPayment: ""
            });
        }
        result.push(chunk);
    }
    return result;
}

export const chartLegends = [
    {
        title: "Consumo Energia Renovável Leve",
        fontColor: background.white,
        backgroundColor: background.green,
    },
    {
        title: "Taxa mín. distribuidora",
        fontColor: background.white,
        backgroundColor: background.greyDark,
    },
    {
        title: "Conta sem o plano LEVE",
        fontColor: background.greyMedium,
        backgroundColor: background.grey,
    },
]
export function formatBillingArray(array, maxSize) {
    if (array.length < maxSize || array.length < 1) {
        return array
    }
    const result = [];
    for (let i = 0; i < array.length; i += maxSize) {
        const chunk = array.slice(i, i + maxSize);
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
export const availableDueDates = [
    5, 15, 25
]

export const handlePayButtonText = (isLoading, nextBills) => {
    if (isLoading) {
        return "Carregando..."
    } else {
        if (nextBills?.length > 1) {
            return "Pagar Faturas"
        } else {
            return "Pagar Fatura"
        }
    }
}

export const formatToTwoDecimals = (value) => {
    const dotCount = (value.match(/\./g) || []).length;

    if (dotCount > 1) {
        let parts = value.split('.');

        return parts.slice(0, 2).join('') + ',' + parts.slice(2).join('.');
    } else {
        return value.replace(".", ",")
    }
}

export const formatToBrazillianReal = (value) => {
    return value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
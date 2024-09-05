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
export const billingStatusOptions = {
    due: "Em aberto",
    paid: "Pago",
    pending: "Vencida",
    canceled: "Cancelada",
}

export const billHasToBePaid = {
    due: true,
    paid: false,
    pending: true
}

export const billWasSend = (sendStatus) => {
    return sendStatus === 1
}
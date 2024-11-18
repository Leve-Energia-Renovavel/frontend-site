export const billingStatusOptions = {
    due: "Em aberto",
    paid: "Pago",
    pending: "Vencido",
    canceled: "Cancelado",
    scheduled: "Agendado",
}

export const billHasToBePaid = {
    due: true,
    paid: false,
    pending: true,
    canceled: false,
    scheduled: false,
}

export const billWasSend = (sendStatus) => {
    return sendStatus === 1
}
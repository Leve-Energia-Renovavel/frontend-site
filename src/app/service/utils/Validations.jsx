
export const requestSuccessful = (status) => {
    return status === 200
}

export const hasToSignContract = (message) => {
    return message == "Tem contrato para assinar"
}
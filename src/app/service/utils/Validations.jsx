
export const requestSuccessful = (status) => {
    return status === 200
}

export const hasToSignContract = (message) => {
    return message == "Tem contrato para assinar" || message == "cliente precisa assinar os contratos desta instalação"
}

export const informationNotAccepted = (status) => {
    return status === 406
}
export const permanentRedirect = (status) => {
    return status === 308
}
export const requestNotFound = (status) => {
    return status === 404
}
export const requestUnauthorized = (status) => {
    return status === 401
}
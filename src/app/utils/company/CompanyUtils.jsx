export const checkForCompanyName = (razaoSocial, instalacaoNome) => {
    if (razaoSocial) {
        return razaoSocial
    } else if (instalacaoNome) {
        return instalacaoNome
    } else {
        return ""
    }
}
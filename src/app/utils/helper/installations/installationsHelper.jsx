const removeNumbers = (str) => str.replace(/\d+/g, "");

export const isPending = (status) => {
    if (status === "pendente") {
        return true
    } else {
        return false
    }
}

export const getAddress = (address, street) => {
    if (address && address !== "") {
        return removeNumbers(address.replace("Avenida", "Av.").replace("Rua", "R.").replace("Jardim", "Jd."))
    } else if (street && street !== "") {
        return removeNumbers(street.replace("Avenida", "Av.").replace("Rua", "R.").replace("Jardim", "Jd."))
    } else {
        return "Logradouro"
    }
}
export const getNumber = (number) => {
    if (number && number !== "") {
        return number
    } else {
        return "Nº"
    }
}

export const getInstallationIndexById = (id, installations) => {
    const index = installations.findIndex(installation => installation.id === id);

    return index !== -1 ? index + 1 : null;
}
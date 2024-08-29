const removeNumbers = (str) => str.replace(/\d+/g, "");

export const getAddress = (address, street) => {
    if (address && address !== "") {
        return removeNumbers(address.replace("Avenida", "Av.").replace("Rua", "R."))
    } else if (street && street !== "") {
        return removeNumbers(street.replace("Avenida", "Av.").replace("Rua", "R."))
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
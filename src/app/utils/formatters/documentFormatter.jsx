export const formatCpfRestricted = (cpf) => {
    if (!cpf || cpf === "") {
        return `***.***.000-00`;
    }
    const part1 = cpf.substring(0, 3);
    const part2 = cpf.substring(3, 6);
    const part3 = cpf.substring(6, 9);
    const part4 = cpf.substring(9);
    return `***.***.${part3}-${part4}`;
}

export const formatCpf = (cpf = "") => {
    const cleanedCpf = cpf.replace(/\D/g, ""); // Remove non-numeric characters
    return cleanedCpf.padStart(11, "0").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
export const formatCpfUnrestricted = (cpf) => {
    if (!cpf || cpf === "") {
        return `000.000.000-00`;
    }
    const part1 = cpf.substring(0, 3);
    const part2 = cpf.substring(3, 6);
    const part3 = cpf.substring(6, 9);
    const part4 = cpf.substring(9);
    return `${part1}.${part2}.${part3}-${part4}`;
}

export const formatCep = (cep) => {
    if (!cep || cep === "") {
        return `00000-000`
    }
    return `${cep?.slice(0, 5)}-${cep.slice(5)}`;
}
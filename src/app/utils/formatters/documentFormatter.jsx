export const formatCpf = (cpf) => {
    const part1 = cpf.substring(0, 3);
    const part2 = cpf.substring(3, 6);
    const part3 = cpf.substring(6, 9);
    const part4 = cpf.substring(9);
    return `***.***.${part3}-${part4}`;
}

export const formatCep = (cep) => {
    return `${cep.slice(0, 5)}-${cep.slice(5)}`;
}
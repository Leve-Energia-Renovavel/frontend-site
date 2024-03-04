import * as yup from 'yup'

const isOver18 = (value) => {
    if (!value) return false;

    const [day, month, year] = value.split('/');
    const userBirthday = new Date(`${year}-${month}-${day}`);

    const today = new Date();
    const ageDifference = today.getFullYear() - userBirthday.getFullYear();
    const birthdayInThisYear = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());

    return ageDifference > 18 || (ageDifference === 18 && today >= birthdayInThisYear);
};

export const userSchema = yup.object({
    uuid: yup.string().required(),
    nome: yup.string()
        .required('O campo Nome Completo é obrigatório')
        .test('has-two-words', 'Nome e sobrenome são obrigatórios', (value) => {
            if (!value) return false;
            const words = value.trim().split(/\s+/);
            return words.length >= 2;
        }),
    email: yup.string().required('O campo E-mail é obrigatório'),
    telefone: yup.string().required('O campo Celular é obrigatório'),
    cep: yup.string().required('O campo CEP é obrigatório'),
    endereco: yup.string().required('O campo Endereco é obrigatório'),
    numero: yup.number().required('O campo Número é obrigatório'),
    bairro: yup.string().required('O campo Bairro é obrigatório'),
    estado_id: yup.number().required(),
    cidade_id: yup.number().required(),
    valor: yup.number().required(),
    rg: yup.string().required('O campo RG é obrigatório'),
    data_nascimento: yup.string()
        .required('O campo Data de Nascimento é obrigatório')
        .test('is-over-18', 'Você deve ser maior de 18 anos', isOver18),
    nacionalidade: yup.string().required('O campo Nacionalidade é obrigatório'),
    profissao: yup.string().required('O campo Profissão é obrigatório'),
    estado_civil: yup.string().required('O campo Estado Civil é obrigatório'),
    cpf: yup.string().required('O campo CPF é obrigatório'),
    numero_instalacao: yup.string().required('O campo Número de Instalação é obrigatório')
});

export const companySchema = yup.object({
    "company": {
        "companyName": "Empresa do Marcos",
        "corporateReason": "Razao Social da Empresa do Marcos",
        "cnpj": "07.526.557/0001-00",
        "responsibleName": "Marcos Vinicius Ferreira",
        "companyEmail": "marcosferreiraf22@gmail.com",
        "companyPhone": "(11) 98933-2002"
    },
    "address": {
        "address": "Rua das Rosas",
        "addressNumber": "999__",
        "addressCep": "30670-515",
        "addressComplement": "casa rosa",
        "neighborhood": "Vila Ecologica",
        "state": "MG",
        "city": "Belo Horizonte",
        "installationNumber": "010203040506070809"
    }
});




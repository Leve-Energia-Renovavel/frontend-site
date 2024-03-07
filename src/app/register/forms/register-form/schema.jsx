import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
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
    email: yup.string().email('O formato do E-mail é inválido')
        .required('O campo E-mail é obrigatório'),
    telefone: yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'O formato do Telefone é inválido')
        .required('O campo Celular é obrigatório'),
    cep: yup.string().required('O campo CEP é obrigatório'),
    endereco: yup.string().required('O campo Endereco é obrigatório'),
    numero: yup.number().required('O campo Número é obrigatório'),
    bairro: yup.string().required('O campo Bairro é obrigatório'),
    estado_id: yup.number().required(),
    cidade_id: yup.number().required(),
    valor: yup.number().required(),
    rg: yup.string()
        .matches(/^\d{8}-\d$/, 'O formato do RG é inválido')
        .required('O campo RG é obrigatório'),
    data_nascimento: yup.string()
        .required('O campo Data de Nascimento é obrigatório')
        .test('is-over-18', 'Você deve ser maior de 18 anos', isOver18),
    nacionalidade: yup.string().required('O campo Nacionalidade é obrigatório')
        .oneOf(nationalityOptions.map(option => option.value), 'Valor de nacionalidade inválido'),
    profissao: yup.string().required('O campo Profissão é obrigatório')
        .oneOf(professionOptions.map(option => option.value), 'Valor de profissão inválido'),
    estado_civil: yup.string().required('O campo Estado Civil é obrigatório')
        .oneOf(maritalStatusOptions.map(option => option.value), 'Valor de estado civil inválido'),
    cpf: yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'O formato do CPF é inválido')
        .required('O campo CPF é obrigatório')
        .test('is-valid-cpf', 'CPF inválido', (value) => {
            if (!value) return true;
            const cpf = value.replace(/[^\d]+/g, '');
            if (cpf.length !== 11) return false;

            if (/^(\d)\1{10}$/.test(cpf)) return false;

            let sum = 0;
            let remainder;

            for (let i = 1; i <= 9; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }

            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11)) {
                remainder = 0;
            }

            if (remainder !== parseInt(cpf.substring(9, 10))) {
                return false;
            }

            sum = 0;
            for (let i = 1; i <= 10; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11)) {
                remainder = 0;
            }

            if (remainder !== parseInt(cpf.substring(10, 11))) {
                return false;
            }

            return true;
        }),
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




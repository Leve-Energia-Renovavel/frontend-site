import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup.string()
        .required('O campo Nome é obrigatório')
        .test('has-two-words', 'Nome e sobrenome são obrigatórios', (value) => {
            if (!value) return false;
            const words = value.trim().split(/\s+/);
            return words.length >= 2;
        }),
    companyName: yup.string(),
    email: yup.string().required('O campo E-mail é obrigatório').email('Invalid email format'),
    phone: yup.string().required('O campo Telefone é obrigatório').matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de Telefone inválido'),
    cep: yup.string().required('O campo CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'Formato de CEP inválido'),
    cost: yup.number().required('O campo de Custo é obrigatório'),
    type: yup.string(),
    birthDate: yup.date()
        .required('O campo Data de Nascimento é obrigatório')
        .test('is-over-18', 'Você deve ser maior de 18 anos', (value) => {
            if (!value) return false;
            const today = new Date();
            const userBirthday = new Date(value);
            const ageDifference = today.getFullYear() - userBirthday.getFullYear();
            const birthdayInThisYear = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());
            return ageDifference > 18 || (ageDifference === 18 && today >= birthdayInThisYear);
        })
});

export const userSchema = yup.object({
    "user": {
        "name": "Marcos Vinicius Ferreira",
        "rg": "39361304-5",
        "cpf": "367.359.968-28",
        "birthday": "22/02/1995",
        "nationality": "brasileiro",
        "maritalStatus": "solteiro",
        "profession": "assalariado",
        "email": "marcosferreiraf22@gmail.com",
        "phone": "(11) 98933-2002"
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
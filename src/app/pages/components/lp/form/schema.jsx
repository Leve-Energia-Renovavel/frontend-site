import { startSignUpForPartners } from '@/app/service/lead-service/LeadService';
import * as yup from 'yup';

const nameRegex = /^[a-zA-Z\u00C0-\u017F\s]+$/;

export const partnerSchemaValidation = async (data) => {
    const response = await partnerLeadSchema.validate(data, { abortEarly: false })
        .then(async () => {
            return await startSignUpForPartners(data)

        })
        .catch((error) => {
            return error
        });

    return response
}

export const promoSchemaValidation = async (data) => {
    const response = await promoLeadSchema.validate(data, { abortEarly: false })
        .then(async () => {
            return await startSignUpForPartners(data)

        })
        .catch((error) => {
            return error
        });

    return response
}

export const partnerLeadSchema = yup.object({
    nome: yup.string()
        .required('O campo Nome Completo é obrigatório')
        .matches(nameRegex, 'O nome deve conter apenas letras e espaços')
        .test('has-two-words', 'Nome e sobrenome são obrigatórios', (value) => {
            if (!value) return false;
            const words = value.trim().split(/\s+/);
            return words.length >= 2;
        }),
    email: yup.string()
        .email('O formato do E-mail é inválido'),
    email_corporativo: yup.string()
        .email('O formato do E-mail Corporativo é inválido'),
    telefone: yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'O formato do Telefone é inválido')
        .required('O campo Celular é obrigatório'),
    cep: yup.string()
        .required('O campo CEP é obrigatório'),
    valor: yup.number()
        .min(150, 'O valor deve ser maior ou igual a 150')
        .max(3000, 'O valor deve ser menor ou igual a 3000')
        .required('O campo Valor é obrigatório'),
    type: yup.string()
        .oneOf(['PF', 'PJ'], 'É necessário selecionar "Empresa" ou "Residência"')
        .required('O campo Tipo é obrigatório'),
    token: yup.string().required()
})


export const promoLeadSchema = yup.object({
    nome: yup.string()
        .required('O campo Nome Completo é obrigatório')
        .matches(nameRegex, 'O nome deve conter apenas letras e espaços')
        .test('has-two-words', 'Nome e sobrenome são obrigatórios', (value) => {
            if (!value) return false;
            const words = value.trim().split(/\s+/);
            return words.length >= 2;
        }),
    email: yup.string()
        .email('O formato do E-mail é inválido'),
    telefone: yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'O formato do Telefone é inválido')
        .required('O campo Celular é obrigatório'),
    cep: yup.string()
        .required('O campo CEP é obrigatório'),
    valor: yup.number()
        .min(150, 'O valor deve ser maior ou igual a 150')
        .max(3000, 'O valor deve ser menor ou igual a 3000')
        .required('O campo Valor é obrigatório'),
    type: yup.string()
        .oneOf(['PF', 'PJ'], 'É necessário selecionar "Empresa" ou "Residência"')
        .required('O campo Tipo é obrigatório'),
    token: yup.string().required(),
})
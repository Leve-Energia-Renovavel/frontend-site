import * as yup from 'yup'

export const leadSchema = yup.object({
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
    valor: yup.number()
        .min(150, 'O valor deve ser maior ou igual a 150')
        .max(3000, 'O valor deve ser menor ou igual a 3000')
        .required('O campo Valor é obrigatório'),
    type: yup.string()
        .oneOf(['PF', 'PJ'], 'O tipo deve ser "PF" ou "PJ"')
        .required('O campo Tipo é obrigatório')
})
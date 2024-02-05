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
});
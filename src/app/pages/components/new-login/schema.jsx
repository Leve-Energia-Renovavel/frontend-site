import * as yup from 'yup'

export const loginSchema = yup.object({
    username: yup.string().email('O formato do E-mail é inválido').required('O campo E-mail é obrigatório'),
    password: yup.string().required('O campo Senha é obrigatório'),
});

export const forgotPasswordSchema = yup.object({
    email: yup.string().email('O formato do E-mail é inválido').required('O campo E-mail é obrigatório')
});
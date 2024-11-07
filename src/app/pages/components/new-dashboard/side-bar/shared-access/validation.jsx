
import * as yup from 'yup';

export const emptyFields = (email, password) => {
    if (!email || !password) {
        return true
    }
    return false
}

export const emailLoginSchema = yup.object({
    login: yup.string().email('O formato do E-mail é inválido').required('O campo E-mail é obrigatório'),
    pass: yup.string().required('O campo Senha é obrigatório'),
})

export const cpfLoginSchema = yup.object({
    login: yup.string().matches(/^\d{11}$/, 'O CPF deve conter apenas números e ter 11 dígitos').required('O campo CPF é obrigatório'),
    pass: yup.string().required('O campo Senha é obrigatório'),
});


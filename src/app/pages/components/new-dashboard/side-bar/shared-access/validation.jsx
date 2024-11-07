
import * as yup from 'yup';

export const emptyFields = (email, password) => {
    if (!email || !password) {
        return true
    }
    return false
}

export const sharedAccessSchema = yup.object({
    email: yup.string().email('O formato do E-mail é inválido').required('O campo E-mail é obrigatório'),
    password: yup.string().required('O campo Senha é obrigatório'),
})



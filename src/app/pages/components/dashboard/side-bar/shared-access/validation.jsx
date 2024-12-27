
import { syncDistributorData } from '@/app/service/shared-access-service/SharedAccessService';
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


export const schemaValidation = async (data, uuid, storeUser, isCPFL, router, setIsLoading, setErrorMessage, setNotifications, closeModal) => {
    try {
        const validatedData = isCPFL
            ? await emailLoginSchema.validate(data, { abortEarly: false })
            : await cpfLoginSchema.validate(data, { abortEarly: false });

        await syncDistributorData(uuid, validatedData, router, storeUser, setErrorMessage, setNotifications, setIsLoading, closeModal)

    } catch (error) {
        console.error(error)
        setErrorMessage(error.errors)
        setIsLoading(false)
        return;
    }
};

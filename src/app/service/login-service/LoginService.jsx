import { forgotPasswordSchema, loginSchema } from "@/app/pages/components/new-login/schema";
import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import axios from "axios";
import Cookies from "js-cookie";
import { getAccessToken } from "../user-service/UserService";
import { requestSuccessful } from "../utils/Validations";

export const loginValidation = async (data, store, setErrorMessage) => {
    return await loginSchema.validate(data, { abortEarly: false })
        .then(async () => {
            const response = await getAccessToken(data)
            if (requestSuccessful(response.status)) {
                store.updateUser({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token
                })
                Cookies.set('accessToken', response.data.access_token)
                Cookies.set('refreshToken', response.data.refresh_token)
            }
            return response
        })
        .catch((error) => {
            return error
        });
}

export const forgotPasswordValidation = async (data, setNotifications, setErrorMessage) => {
    await forgotPasswordSchema.validate(data, { abortEarly: false })
        .then(async () => {
            const response = await recoverPassword(data)
            if (requestSuccessful(response?.status)) {
                setNotifications(["E-mail enviado com sucesso!"])
            } else {
                setErrorMessage(["Erro ao recuperar senha. Por favor, tente novamente"])
            }
        })
        .catch((err) => {
            // console.log(err.errors);
            setErrorMessage(["Erro ao recuperar senha. Por favor, tente novamente"])
            return (err.errors)
        });

}

export const recoverPassword = async (data) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-pass`, data);
}

const newPasswodVerification = (newPassword, confirmedNewPassword) => {
    if (newPassword === confirmedNewPassword) {
        return true
    } else {
        return false
    }
}
export const confirmNewPassword = async (newPassword, confirmedNewPassword, token, setNotifications, setValidationErrors, router, setIsLoading) => {
    const validated = newPasswodVerification(newPassword, confirmedNewPassword)
    if (validated) {
        const data = {
            newPassword: newPassword,
            confirmNewPassword: confirmedNewPassword,
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/recovery-pass/${token}`, data);

            if (requestSuccessful(response?.status)) {
                setNotifications(["Nova senha confirmada com sucesso! Em 3 segundos vamos te redirecionar para o login"]);
                await awaitSeconds(4);
                setIsLoading(false)
                router.push(`/login/`);

            } else {
                setValidationErrors(["Erro ao confirmar a nova senha. Por favor, tente novamente."]);
            }
        } catch (error) {
            if (!error.response) {
                setValidationErrors(["Erro de rede. Verifique sua conexão e tente novamente."]);
            } else {
                setValidationErrors(["Erro ao confirmar a nova senha. Por favor, tente novamente mais tarde."]);
            }
        }
    } else {
        setValidationErrors(["É necessário confirmar sua nova senha!"]);
    }
}
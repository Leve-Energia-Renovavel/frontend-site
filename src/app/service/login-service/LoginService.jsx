import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import axios from "axios";
import { requestSuccessful } from "../utils/Validations";

export const recoverPassword = async (data) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-pass`, data);
}

const newPasswodVerification = (newPassword, confirmedNewPassword) => {
    if (newPassword !== confirmedNewPassword) {
        return false
    } else {
        return true
    }
}
export const confirmNewPassword = async (newPassword, confirmedNewPassword, token, setNotifications, setValidationErrors, router) => {
    const validated = newPasswodVerification(newPassword, confirmedNewPassword)
    if (validated) {
        const data = {
            newPassword: newPassword,
            confirmNewPassword: confirmedNewPassword,
        };

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recovery-pass/${token}`, data);

            if (requestSuccessful(response?.status)) {
                setNotifications(["Nova senha confirmada com sucesso!"]);
                awaitSeconds(3);
                router.push(`/login/`);
            } else {
                setValidationErrors(["Erro ao confirmar a nova senha. Por favor, tente novamente."]);
            }
        } catch (error) {
            if (!error.response) {
                setValidationErrors(["Erro de rede. Verifique sua conexão e tente novamente."]);
            } else {
                setValidationErrors(["Erro ao confirmar a nova senha. Por favor, tente novamente."]);
            }
        }
    } else {
        setValidationErrors(["É necessário confirmar sua nova senha!"]);
    }
}
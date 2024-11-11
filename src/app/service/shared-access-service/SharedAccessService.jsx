import axios from "axios";
import { updateSharedAccess } from "../profile-service/ProfileService";
import { requestSuccessful } from "../utils/Validations";

export const syncDistributorData = async (uuid, data, router, storeUser, setErrorMessage, setNotifications, setIsLoading, closeModal) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/distribuidora-login/${uuid}`, data);
        if (requestSuccessful(response?.status)) {
            setNotifications(["Dados de acesso salvos com sucesso!"])
            await updateSharedAccess(data, storeUser)

            if (closeModal) {
                closeModal()
            }

        } else {
            console.error("Failed to sync user access");
        }
    } catch (error) {
        console.error("Error syncing user access:", error?.response?.data);
        setErrorMessage(["Não foi possível salvar os dados. Tente novamente ou entre em contato com nosso atendimento."])
    } finally {
        setIsLoading(false);
    }
}
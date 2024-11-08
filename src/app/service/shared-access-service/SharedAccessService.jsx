import axios from "axios";
import { requestSuccessful } from "../utils/Validations";

export const syncDistributorData = async (uuid, data, store, setErrorMessage, setNotifications, setIsLoading) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/distribuidora-login/${uuid}`, data);
        console.log("response ===>>>>", response)
        if (requestSuccessful(response?.status)) {
            setNotifications(["Dados de acesso salvos com sucesso!"])
            // await updateSharedAccess(response, store)

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
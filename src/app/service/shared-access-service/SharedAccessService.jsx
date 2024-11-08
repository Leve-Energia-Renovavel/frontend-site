import axios from "axios";
import { updateSharedAccess } from "../profile-service/ProfileService";
import { requestSuccessful } from "../utils/Validations";
import Cookies from "js-cookie";

export const syncDistributorData = async (uuid, data, store, setErrorMessage, setNotifications, setIsLoading) => {
    try {
        const accessToken = Cookies.get('accessToken')
        const headers = {
            "Authorization": `Bearer ${accessToken}`
        };
        console.log("data ===>", { uuid, data, accessToken })
        console.log(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/distribuidora-login/${uuid}`)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/distribuidora-login/${uuid}`, data, { headers });
        console.log("@@@@@ response ===>>>>", response)
        if (requestSuccessful(response?.status)) {
            setNotifications(["Dados de acesso salvos com sucesso!"])
            // await updateSharedAccess(response, store)

        } else {
            console.error("Failed to sync user access");
        }
    } catch (error) {
        // console.log("@@@@@ response ===>>>>", response.data)
        console.log("Error syncing user access:", error?.response?.data);
        console.error("Error syncing user access:", JSON.stringify(error));
        setErrorMessage(["Não foi possível salvar os dados. Tente novamente ou entre em contato com nosso atendimento."])
    } finally {
        setIsLoading(false);
    }
}
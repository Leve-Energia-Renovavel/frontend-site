import axios from "axios";
import { requestSuccessful } from "../utils/Validations";

export const getAddressByCEP = async (cep, setNotifications, setErrorMessage, setIsLoadingCEP) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
            params: { cep: cep }
        });
        if (requestSuccessful(response?.status)) {
            setNotifications(["Endereço localizado com sucesso!"])
            return response
        } else {
            setErrorMessage(["Erro ao buscar o CEP. Por favor, preencha os dados manualmente."])
        }
    } catch (error) {
        console.error('Error fetching CEP data:', error);
        setErrorMessage(["Erro ao buscar o CEP. Por favor, preencha os dados manualmente."])
        return error
    }
    finally {
        setIsLoadingCEP(false)
    }
};
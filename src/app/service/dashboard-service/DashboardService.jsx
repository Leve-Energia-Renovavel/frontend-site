import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import { formatBrazillianDate } from "@/app/utils/formatters/dateFormatter";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful, requestUnauthorized } from "../utils/Validations";

export const handleSendInvite = async (invitedEmail, closeModal, setErrorMessage, setNotifications) => {
    if (invitedEmail) {
        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };
        const data = {
            send_mail: invitedEmail,
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/send-code`, data, { headers })
        if (requestSuccessful(response.status)) {
            setNotifications(["Código de indicação enviado com sucesso!"])
            closeModal()
        } else {
            setErrorMessage(["Erro ao enviar código. Verifique as informações e tente novamente"])
        }

    } else {
        setErrorMessage(["Informe um e-mail válido"])
    }
}

export const getDashboardMainData = async (router, storeUser, storeEconomy, setErrorMessage) => {
    try {
        const token = Cookies.get('accessToken') || storeUser.accessToken
        const headers = {
            "Authorization": `Bearer ${token}`,
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
            const { consumidor, economia } = response?.data
            const receivedCredits = response?.data?.creditos_recebidos
            const carbonCredits = response?.data?.co_dois

            const updatedUserEconomy = {
                economySince: formatBrazillianDate(consumidor?.created_at),
                value: economia,
                carbonCredits: carbonCredits?.toFixed(2),
                receivedCredits: receivedCredits?.toFixed(2),
            }

            storeEconomy.updateUserEconomy(updatedUserEconomy)

        } else if (requestUnauthorized(response?.status)) {
            setErrorMessage(["Erro ao autenticar. Por favor, faça o login e tente novamente"])
            awaitSeconds(3)
            router.push(`/login`)
        } else {
            setErrorMessage(["Erro ao validar as informações. Por favor, tente novamente"])
            awaitSeconds(3)
            router.push(`/login`)
        }
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error?.response?.data?.message === "Unauthenticated.") {
            setErrorMessage(["Erro de autenticação. Por favor, faça o login e tente novamente"])
            awaitSeconds(3)
            router.push("/login")
        }
        if (error?.response?.data?.error === "Consumidor não encontrado") {
            setErrorMessage(["Erro ao logar. Por favor, faça o login e tente novamente"])
            awaitSeconds(3)
            router.push("/login")
        }
    }
}
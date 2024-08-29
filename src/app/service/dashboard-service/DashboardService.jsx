import { formatBrazillianDate } from "@/app/utils/formatters/dateFormatter";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const handleSendInvite = async (invitedEmail, setAlert) => {
    if (invitedEmail) {
        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };
        const data = {
            send_mail: invitedEmail,
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/send-code`, data, { headers })
        if (requestSuccessful(response.status)) {
            setAlert({ status: 'success', message: "Código de indicação com sucesso com sucesso!" });
        } else {
            setAlert({ status: 'warning', message: "Erro ao enviar código. Verifique as informações e tente novamente" });
        }


    } else {
        setErrorMessages(["Informe um e-mail válido"])
    }
}

export const getDashboardMainData = async (router, storeEconomy) => {
    try {
        const headers = {
            "Authorization": `Bearer ${Cookies.get('accessToken')}`
        };

        console.log("accessToken ==>>", Cookies.get('accessToken'))
        console.log("refreshToken ==>>", Cookies.get('refreshToken'))
        console.log("headers ==>>", headers)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        console.log("response ==>>", response)

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

        } else {
            router.push(`/login`)
        }
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error?.response?.data?.message === "Unauthenticated.") {
            router.push("/login")
        }
        if (error?.response?.data?.error === "Consumidor não encontrado") {
            router.push("/login")
        }
    }
}
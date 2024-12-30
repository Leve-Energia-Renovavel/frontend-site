import { COOKIES_FOR, ERROR_MESSAGE } from "@/app/pages/enums/globalEnums";
import { awaitSeconds, clearBrowserData } from "@/app/utils/browser/BrowserUtils";
import { formatBrazillianDate } from "@/app/utils/formatters/dateFormatter";
import axios from "axios";
import Cookies from "js-cookie";
import { updateBillingData } from "../billing-service/BillingService";
import { updateEconomyData } from "../economy-service/EconomyService";
import { createInstallationData, updateOtherInstallationsData } from "../installation-service/InstallationService";
import { updateUserData } from "../user-service/UserService";
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
            await awaitSeconds(3)
            router.push(`/login`)
        } else {
            setErrorMessage(["Erro ao validar as informações. Por favor, tente novamente"])
            await awaitSeconds(3)
            router.push(`/login`)
        }
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error?.response?.data?.message === "Unauthenticated.") {
            setErrorMessage(["Erro de autenticação. Por favor, faça o login e tente novamente"])
            await clearBrowserData()
            await awaitSeconds(3)
            router.push("/login")
        }
        if (error?.response?.data?.error === "Consumidor não encontrado") {
            setErrorMessage(["Erro ao logar. Por favor, faça o login e tente novamente"])
            await clearBrowserData()
            await awaitSeconds(3)
            router.push("/login")
        }
    }
}

const shouldUpdateDashboardData = (response, storeBilling, storeMainInstallation) => {
    const hasDifferentBillings = response.data.ciclosConsumo.length !== storeBilling.billings.length;
    const hasDifferentInstallation = response.data.instalacao.uuid !== storeMainInstallation.mainInstallation.uuid;
    return hasDifferentBillings || hasDifferentInstallation;
}

export const getGeneralDashboardData = async (router, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations, setErrorMessage) => {
    try {
        const accessToken = storeUser?.user?.accessToken
        const token = accessToken || Cookies.get(COOKIES_FOR.ACCESS_TOKEN)
        const headers = {
            "Authorization": `Bearer ${token}`,
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
            if (shouldUpdateDashboardData(response, storeBilling, storeMainInstallation)) {
                const data = response?.data
                await updateGeneralDashboardData(data, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations)
            }

        } else if (requestUnauthorized(response?.status)) {
            setErrorMessage(["Erro ao autenticar. Por favor, faça o login e tente novamente"])
            await awaitSeconds(3)
            router.push(`/login`)
        } else {
            setErrorMessage(["Erro ao validar as informações. Por favor, tente novamente"])
            await awaitSeconds(3)
            router.push(`/login`)
        }
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error?.response?.data?.message === ERROR_MESSAGE.UNAUTHENTICATED) {
            setErrorMessage(["Erro de autenticação. Por favor, faça o login e tente novamente"])
            await clearBrowserData()
            await awaitSeconds(3)
            router.push("/login")
        }
        if (error?.response?.data?.error === ERROR_MESSAGE.CONSUMER_NOT_FOUND) {
            setErrorMessage(["Erro ao logar. Por favor, faça o login e tente novamente"])
            await clearBrowserData()
            await awaitSeconds(3)
            router.push("/login")
        }
    }
}

export const updateGeneralDashboardData = async (data, storeUser, storeEconomy, storeNextBills, storeBilling, storeMainInstallation, storeInstallations) => {
    const { consumidor, economia, ciclosConsumo, instalacao } = data;
    const distribuidoraInstalacao = data?.distribuidora_instalacao;
    const descontosCarbono = data?.descontos_carbono
    const outrasInstalacoes = data?.outras_instalacoes;

    const hasStartedBilling = ciclosConsumo?.length > 0;
    const carbonCredits = data?.co_dois
    const receivedCredits = data?.creditos_recebidos

    updateUserData(consumidor, instalacao, distribuidoraInstalacao, descontosCarbono, storeUser);

    updateEconomyData(consumidor, economia, carbonCredits, receivedCredits, storeEconomy);

    updateBillingData(ciclosConsumo, storeBilling, storeNextBills);

    const mainInstallationData = createInstallationData(instalacao, hasStartedBilling);
    storeMainInstallation?.updateMainInstallation(mainInstallationData);

    updateOtherInstallationsData(outrasInstalacoes, storeInstallations, mainInstallationData);
};








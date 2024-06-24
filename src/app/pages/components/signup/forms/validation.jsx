import { awaitSeconds } from "@/app/utils/browser/BrowserUtils"

export const handleRequestsErrors = async (response, setNotifications, setErrorMessage, router) => {
    if (Array.isArray(response)) {
        setErrorMessage(response)
    }
    else if (response?.response?.data?.message === "Valor de custo mensal baixo.") {
        setErrorMessage(["Seu consumo já é muito leve! Para aproveitar nossas vantagens seu consumo mínimo deve ser R$200"])
        await awaitSeconds(10)
        router.push(`/fail/low-cost`)
    }
    else if (response?.response?.data?.message) {
        console.error(response?.response?.data?.message)
        setErrorMessage(["Ops! Algo deu errado, tente novamente mais tarde"])
    }

    else {
        setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
        console.error(response)
    }
}
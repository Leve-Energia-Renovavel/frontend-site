import { informationNotAccepted, requestSuccessful } from "@/app/service/utils/Validations"
import { awaitSeconds } from "@/app/utils/browser/BrowserUtils"

export const requestValidation = async (response, setNotifications, setErrorMessage, router) => {

    if (requestSuccessful(response?.status)) {
        if (response?.data?.message === "Você já possui cadastro") {
            setNotifications(["Você já possui cadastro! Vamos te redirecionar para o Login"])
            await awaitSeconds(3)
            router.push(`/login`)
        }
        else if (response?.data?.message === "Você não completou seu cadastro, por favor continue através do link enviado em seu e-mail") {
            setNotifications(["Continue seu cadastro pelo link enviado ao seu e-mail. "])
        } else {
            const uuid = response?.data?.uuid
            setNotifications(["Simulação realizada com sucesso!"])
            router.push(`/signup/?uuid=${uuid}`)
        }

    } else if (informationNotAccepted(response?.status)) {
        if (response?.data?.message === "Fora de rateio") {
            router.push(`/fail/out-of-range`)
        }
        if (response?.data?.message === "A leve ainda não chegou a sua região") {
            router.push(`/fail/out-of-range`)
        }
        if (response?.data?.message === "A leve não chegou a sua região") {
            router.push(`/fail/out-of-range`)
        }
        else if (response?.data?.message === "Seu consumo já é leve") {
            router.push(`/fail/low-cost`)
        }
    }
    else if (response?.message === "Seu consumo já é leve") {
        router.push(`/fail/low-cost`)
    }
    else if (response?.message === "Consumo Baixo") {
        router.push(`/fail/low-cost`)
    }
    else if (response?.message === "Tem contrato para assinar") {
        router.push(`/signup/contract-signature`)
    }
    else if (response?.message === "cliente precisa assinar os contratos desta instalação") {
        router.push(`/signup/contract-signature`)
    }
    else if (response?.message === "Fora de rateio") {
        router.push(`/fail/out-of-range`)
    }
    else if (response?.message === "A leve ainda não chegou a sua região") {
        router.push(`/fail/out-of-range`)
    }
    else if (response?.message === "A leve não chegou a sua região") {
        router.push(`/fail/out-of-range`)
    }
    else if (response?.message === "Cupom inválido") {
        setErrorMessage(["Cupom inválido. Por favor, verifique e tente novamente"])
    }
    else if (response?.message === "Você não completou seu cadastro, por favor continue através do link enviado em seu e-mail") {
        setErrorMessage(["Você não completou seu cadastro, por favor continue através do link enviado em seu e-mail"])
    }
    else if (response?.message === "Usuário existente") {
        setNotifications(["Você já possui cadastro! Vamos te redirecionar para o Login"])
        await awaitSeconds(3)
        router.push(`/login`)
    }
    else if (response?.errors) {
        setErrorMessage(response?.errors)
    }

    else {
        setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
        // setErrorMessage([response?.message])
    }

}
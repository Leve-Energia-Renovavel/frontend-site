import { informationNotAccepted, permanentRedirect, requestSuccessful } from "@/app/service/utils/Validations"
import { awaitSeconds } from "@/app/utils/browser/BrowserUtils"

export const requestValidation = async (response, setNotifications, setErrorMessage, router) => {

    if (requestSuccessful(response?.status)) {
        if (response?.data?.message === "Você já possui cadastro") {
            setNotifications(["Você já possui cadastro! Vamos te redirecionar para o Login"])
            await awaitSeconds(4)
            router.push(`/login`)
        }
        else if (response?.data?.message === "Você não completou seu cadastro, por favor continue através do link enviado em seu e-mail") {
            setNotifications(["Continue seu cadastro pelo link enviado ao seu e-mail. "])
        }
        else {
            const uuid = response?.data?.uuid
            if (!uuid || uuid == "undefined") {
                setErrorMessage(["Erro ao criar conta. Mas nao se preocupe! Em 5 segundos vamos te redirecionar ao nosso Suporte."])
                await awaitSeconds(4)
                const phone = "551131818210"
                const url = `https://api.whatsapp.com/send/?phone=${phone}&text=Oi!+Tive+um+problema+ao+criar+conta+na+Leve+Energia+e+preciso++de+ajuda&type=phone_number&app_absent=0`
                window.open(url, '_blank', 'noopener noreferrer');
            } else {
                setNotifications(["Simulação realizada com sucesso! Aguarde 2 segundos..."])
                router.push(`/signup/?uuid=${uuid}`)
            }
        }

    } else if (informationNotAccepted(response?.status)) {
        if (response?.data?.message === "A leve ainda não chegou a sua região" ||
            response.data.message == "A leve ainda n\u00e3o chegou a sua\u00a0regi\u00e3o" ||
            response?.data?.message === "A leve não chegou a sua região" ||
            response?.data?.message === "Fora de rateio") {
            router.push(`/fail/out-of-range`)
        }
        else if (response?.data?.message === "Seu consumo já é leve") {
            router.push(`/fail/low-cost`)
        }
    } else if (permanentRedirect(response?.status)) {
        if (response.data.message == "A leve ainda n\u00e3o chegou a sua\u00a0regi\u00e3o" ||
            response.data.message == "A leve ainda não chegou a sua região" ||
            response.data.message == "A leve não chegou a sua região") {
            router.push(`/fail/out-of-range`)
        }
    }
    else if (response?.message === "Seu consumo já é leve" ||
        response?.message === "Consumo Baixo" ||
        response?.message === "Seu consumo j\u00e1 \u00e9 leve") {
        router.push(`/fail/low-cost`)
    }
    else if (response?.message === "Tem contrato para assinar" ||
        response?.message === "cliente precisa assinar os contratos desta instalação") {
        router.push(`/signup/contract-signature`)
        // router.push(`/signup/?uuid=${uuid}`)
    }
    else if (response?.message === "Fora de rateio" ||
        response?.message === "A leve ainda não chegou a sua região" ||
        response?.message === "A leve não chegou a sua região" ||
        response?.message === "A leve ainda n\u00e3o chegou a sua\u00a0regi\u00e3o" ||
        response?.message === "A leve n\u00e3o chegou a sua\u00a0regi\u00e3o") {
        router.push(`/fail/out-of-range`)
    }
    else if (response?.message === "Cupom inválido") {
        setErrorMessage(["Cupom inválido. Por favor, verifique e tente novamente"])
    }
    else if (response?.message === "Não foi possível achar esse usuário") {
        setErrorMessage(["E-mail não encontrado. Verifique se foi digitado corretamente ou se tiver, busque pelo e-mail secundário."])
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

    //encoding error texts
    else if (response?.message === "N\u00e3o h\u00e1 geradora" ||
        response?.message === "Não há geradora") {
        const errorCode = "BDM001"
        setErrorMessage([`Erro de servidor. Por favor, tente novamente mais tarde (cod. ${errorCode})`])
    }

    else {
        setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
        // setErrorMessage([response?.message])
    }

}
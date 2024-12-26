import { requestSuccessful } from "@/app/service/utils/Validations";
import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import Cookies from "js-cookie";
import { COOKIES_FOR, LEVE_WHATSAPP_NUMBER, PATH_TO, USER_TYPE } from "../../enums/globalEnums";

const signupValidationCodes = {
    ALANCASR: "A leve ainda não chegou a sua região",
    CB: "Consumo Baixo",
    CI: "CEP inválido",
    CIEE: "CNPJ Informado está errado",
    CNV: "CNPJ não validado",
    CNE: "Consumidor não encontrado",
    CPI: "Cupom inválido",
    CNENN: "Caracteres não esperado no nome",
    IJC: "Instalação já cadastrada",
    INE: "Instalação não encontrada",
    IOS: "Informe o sobrenome",
    NFPEAC: "Não foi possível encontrar a cidade",
    NFPEOE: "Não foi possível encontrar o estado",
    NFPAAI: "Não foi possível achar a instalação",
    NFPAOC: "Não foi possível achar o consumidor",
    ODCEO: "O dado CNPJ é obrigatório",
    SCJEL: "Seu consumo já é leve",
    TCPA: "Tem contrato para assinar",
    TNENU: "Token não encontrado na url",
    UE: "Usuário existente",
    UT: "unexpected token",
    VDCMB: "Valor de custo mensal baixo.",
    VJPC: "Você já possui cadastro"
};


export const requestValidation = async (data, response, setNotifications, setErrorMessage, storeUser, router) => {

    const status = response?.status
    const message = response?.message
    const responseCode = response?.data?.code
    const uuid = response?.data?.uuid

    if (requestSuccessful(status)) {
        if (responseCode === "VJPC") {
            setNotifications(["Você já possui cadastro! Vamos te redirecionar para o Login"])
            await awaitSeconds(4)
            router.push(PATH_TO.LOGIN)
        }
        else {
            Cookies.set(COOKIES_FOR.UUID, uuid)

            if (!uuid || uuid == "undefined") {
                setErrorMessage(["Erro ao criar conta. Mas nao se preocupe! Em alguns segundos vamos te redirecionar ao nosso Suporte."])
                await awaitSeconds(4)
                const url = `https://api.whatsapp.com/send/?phone=${LEVE_WHATSAPP_NUMBER}&text=Oi!+Tive+um+problema+ao+criar+conta+na+Leve+Energia+e+preciso++de+ajuda&type=phone_number&app_absent=0`
                window.open(url, '_blank', 'noopener noreferrer');
            } else {

                storeUser.updateUser({
                    uuid: uuid,
                    name: data?.nome_completo,
                    email: data?.email?.toLowerCase()?.trim(),
                    phone: data?.telefone?.toLowerCase()?.trim(),
                    cep: data?.cep,
                    cost: data?.valor,
                    isCompany: data?.type === USER_TYPE.PJ ? true : false,
                    coupon: data?.cupom,
                })
                setNotifications(["Simulação realizada com sucesso!"])
                await awaitSeconds(1)
                router.push(`${PATH_TO.ECONOMY_SIMULATION}`)
            }
        }

    } else {

        if (responseCode === "ALANCASR") {
            router.push(PATH_TO.OUT_OF_RANGE)
        }
        else if (responseCode === "UE") {
            setNotifications(["Você já possui cadastro! Vamos te redirecionar para o Login"])
            await awaitSeconds(3)
            router.push(`/login`)
        }
        else if (responseCode === "SCJEL") {
            router.push(PATH_TO.LOW_COST)
        }
        else if (responseCode === "ALANCASR" || message === "A leve ainda não chegou a sua região") {
            router.push(PATH_TO.OUT_OF_RANGE)
        }
        else if (responseCode === "CI") {
            router.push(PATH_TO.OUT_OF_RANGE)
        }
        else if (responseCode === "TCPA") {
            router.push(PATH_TO.REGISTER_CONTRACT)
        }
        else if (responseCode === "CPI") {
            setErrorMessage(["Cupom inválido. Por favor, verifique e tente novamente"])
        }
        else if (responseCode === "CNENN") {
            setErrorMessage(["Campo de nome inválido. Por favor, verifique e tente novamente"])
        }
        else if (message === "Não foi possível achar esse usuário") {
            setErrorMessage(["E-mail não encontrado. Verifique se foi digitado corretamente ou se tiver, busque pelo e-mail secundário."])
        }

        else if (message === "N\u00e3o h\u00e1 geradora" ||
            message === "Não há geradora") {
            const errorCode = "BDM001"
            setErrorMessage([`Erro de servidor. Por favor, tente novamente mais tarde (cod. ${errorCode})`])
        }
        else if (response?.errors) {
            setErrorMessage(response?.errors)
        }
        else {
            setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
        }
    }

}
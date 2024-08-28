import axios from "axios";
import Cookies from "js-cookie";
import { getInstallationByUUID } from "../installation-service/InstallationService";
import { requestSuccessful } from "../utils/Validations";

export const getClicksignKey = async (uuid) => {
    const response = await getInstallationByUUID(uuid)
    if (requestSuccessful(response?.status)) {
        const clicksignKey = response.data.instalacao.document_key
        return clicksignKey
    }
}

export const finishSignup = async (router) => {
    try {
        const data = { uuid: Cookies.get("leveUUID") }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/finalizar-cadastro`, data)
        if (requestSuccessful(response?.status)) {
            const accessToken = response.data.access_token
            Cookies.set('accessToken', accessToken)
            router.push(`/signup/success`)
        }

    } catch (error) {
        console.error(error)
    }
}

export const signContract = async (uuid) => {
    const data = { uuid: uuid }
    return await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/finalizar-cadastro`, data)
}
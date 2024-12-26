import axios from "axios";
import Cookies from "js-cookie";
import { getInstallationByUUID } from "../installation-service/InstallationService";
import { requestSuccessful } from "../utils/Validations";
import { COOKIES_FOR, PATH_TO } from "@/app/pages/enums/globalEnums";

export const getClicksignKey = async (uuid) => {
    const response = await getInstallationByUUID(uuid)
    if (requestSuccessful(response?.status)) {
        const clicksignKey = response.data.instalacao.document_key
        return clicksignKey
    }
}

export const finishSignup = async (router, uuid) => {
    try {
        const data = { uuid: uuid }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/finalizar-cadastro`, data)
        if (requestSuccessful(response?.status)) {
            const accessToken = response?.data?.access_token
            Cookies.set(COOKIES_FOR.ACCESS_TOKEN, accessToken)
            router.push(PATH_TO.DASHBOARD)
        }

    } catch (error) {
        console.error(error)
    }
}

export const signContract = async (uuid, router, path) => {
    const data = { uuid: uuid }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/finalizar-cadastro`, data)
    if (requestSuccessful(response?.status)) {
        router.push(path)
    }
}
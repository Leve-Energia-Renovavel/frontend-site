import axios from "axios";
import Cookies from "js-cookie";

export const getConsumerByUUID = async (uuid) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
}

export const getInstallationByUUID = async (uuid) => {
    const headers = {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`
    };
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/${uuid}`, { headers });
}
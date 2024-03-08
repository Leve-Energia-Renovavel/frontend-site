import axios from "axios";

export const getInstallationsByUUID = async (uuid) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);

}
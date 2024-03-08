import axios from "axios";

export const recoverPassword = async (data) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-pass`, data);
}
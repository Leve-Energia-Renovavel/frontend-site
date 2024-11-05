import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const handleChangePassword = async (oldPassword, newPassword, setNotifications, setErrorMessage) => {

    if (oldPassword !== "" && newPassword !== "") {
        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };

        const data = {
            last_pass: oldPassword,
            new_pass: newPassword,
        }
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/change-pass`, data, { headers })
            if (requestSuccessful(response.status)) {
                setNotifications([response.data.message])
                return true
            }
            
        } catch (error) {
            setErrorMessage([error.response.data.message])
            return false
        }
    } else {
        setErrorMessage(["É necessário preencher os campos de Senha Atual e Nova Senha"])
        return false
    }
}
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const handleSecondaryEmail = async (secondaryEmail, setNotifications, setErrorMessage) => {
    if (secondaryEmail !== "") {

        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };

        const data = {
            email_secondary: secondaryEmail,
            secondary_send: "on"
        }

        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/add-secondary-email`, data, { headers })
            if (requestSuccessful(response.status)) {
                setNotifications([response.data.message])
            }

        } catch (error) {
            console.log(error)
            setErrorMessage([error?.response?.data?.message])

        }
    } else {
        setErrorMessage(["É necessário preencher o campo de E-mail Secundário"])
    }
}
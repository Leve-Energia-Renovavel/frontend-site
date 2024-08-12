import { awaitSeconds } from "@/app/utils/browser/BrowserUtils";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const handleSendInvite = async (invitedEmail, setAlert) => {
    if (invitedEmail) {
        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };
        const data = {
            send_mail: invitedEmail,
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/send-code`, data, { headers })
        if (requestSuccessful(response.status)) {
            setAlert({ status: 'success', message: "Código de indicação com sucesso com sucesso!" });
        } else {
            setAlert({ status: 'warning', message: "Erro ao enviar código. Verifique as informações e tente novamente" });
        }


    } else {
        setErrorMessages(["Informe um e-mail válido"])
    }
}
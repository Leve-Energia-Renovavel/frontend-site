import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const updateProfileData = async (response, store) => {
    const consumidor = response?.data?.consumidor
    const instalacao = response?.data?.instalacao

    store.updateUser({
        name: consumidor?.nome + " " + consumidor?.sobrenome,
        phone: consumidor?.telefone,
        email: consumidor?.email,
        secondaryEmail: consumidor?.email_secondary,
        cost: instalacao?.valor_base_consumo,
        cep: consumidor?.cep,
        discount: instalacao?.desconto,
        birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

        cpf: consumidor?.cpf,
        cost: consumidor?.valor,
        rg: consumidor?.rg,

        profession: consumidor?.profissao,
        nationality: consumidor?.nacionalidade,
        maritalStatus: consumidor?.estado_civil,
        memberGetMemberCode: consumidor?.ref_code,

        hasFetchedData: true,

        invoiceDate: consumidor?.dia_fatura
    });

}
export const getProfileData = async (store, setIsLoading) => {
    try {
        const headers = {
            "Authorization": `Bearer ${Cookies.get('accessToken')}`,
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
            await updateProfileData(response, store)

        } else {
            console.error("Failed to fetch user data");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    } finally {
        setIsLoading(false);
    }
}
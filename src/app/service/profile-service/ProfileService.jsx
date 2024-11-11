import { USER_TYPE } from "@/app/pages/enums/globalEnums";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const updateProfileData = async (response, store) => {
    const consumidor = response?.data?.consumidor
    const instalacao = response?.data?.instalacao
    const distribuidoraInstalacao = response?.data?.distribuidora_instalacao

    store.updateUser({
        uuid: consumidor?.uuid,
        name: consumidor?.nome + " " + consumidor?.sobrenome,
        phone: consumidor?.telefone,
        email: consumidor?.email,
        secondaryEmail: consumidor?.email_secondary,
        cost: instalacao?.valor_base_consumo,
        cep: consumidor?.cep,
        discount: instalacao?.desconto,
        birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

        isCompany: consumidor?.type === USER_TYPE.PJ ? true : false,
        companyName: instalacao?.razao_social,
        cnpj: instalacao?.cnpj,

        cpf: consumidor?.cpf,
        rg: consumidor?.rg,
        cost: instalacao?.valor_base_consumo,

        profession: consumidor?.profissao,
        nationality: consumidor?.nacionalidade,
        maritalStatus: consumidor?.estado_civil,
        memberGetMemberCode: consumidor?.ref_code,

        invoiceDate: consumidor?.dia_fatura,

        distributor: distribuidoraInstalacao?.nome,
        hasSyncDistributorData: instalacao?.distribuidora_login ? true : false,
        distributorLogin: instalacao?.distribuidora_login ? instalacao?.distribuidora_login : "",
        distributorPassword: instalacao?.distribuidora_pass ? instalacao?.distribuidora_pass : "",
    });
}

export const updateSharedAccess = (data, store) => {
    store.updateUser({
        hasSyncDistributorData: true,
        distributorLogin: data?.login,
        distributorPassword: data?.pass
    })
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
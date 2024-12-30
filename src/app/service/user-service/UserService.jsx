import { DISTRIBUTOR_STATUS, USER_TYPE } from "@/app/pages/enums/globalEnums";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import { capitalizeEachWord } from "@/app/utils/formatters/textFormatter";
import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (data) => {
    try {
        return await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up`, data);

    } catch (error) {
        console.error(error);
        return error
    }
}
export const getAccessToken = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_LOGIN}`, data);
        return response

    } catch (error) {
        console.error(error);
        return error
    }
}
export const logIn = async (data) => {
    try {
        const payload = {
            username: "dalbenmilton@gmail.com",
            password: "123456",
            grant_type: "password",
            client_id: 3,
            client_secret: "Ne3XLQEfGYzkhwDAtIYcknkn8cbRXGL2Ya0vFY7r",
            scope: ""
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_TOKEN_OAUTH}`, payload);
        return response

    } catch (error) {
        console.error(error);
        return error
    }
}
export const updateUserProfile = async (data) => {
    const headers = {
        "Authorization": `Bearer ${Cookies.get('accessToken')}`
    };
    try {
        return await axios.put(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/painel/`, data, { headers });

    } catch (error) {
        console.error(error);
        return error
    }
}

export const updateUserData = (consumidor, instalacao, distribuidoraInstalacao, descontosCarbono, storeUser) => {

    const currentUserData = storeUser?.user;

    storeUser.updateUser({
        ...currentUserData,
        uuid: consumidor?.uuid,
        name: `${capitalizeEachWord(consumidor?.nome_completo)}`,
        phone: consumidor?.telefone,
        email: consumidor?.email,
        secondaryEmail: consumidor?.email_secondary,
        cost: instalacao?.valor_base_consumo,
        cep: consumidor?.cep,
        discount: descontosCarbono?.desconto,
        birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor.data_nascimento) : "",
        isCompany: consumidor?.type === USER_TYPE.PJ,
        companyName: instalacao?.razao_social,
        cnpj: instalacao?.cnpj,
        cpf: consumidor?.cpf,
        rg: consumidor?.rg,
        profession: consumidor?.profissao,
        nationality: consumidor?.nacionalidade,
        maritalStatus: consumidor?.estado_civil,
        memberGetMemberCode: consumidor?.ref_code,
        invoiceDate: consumidor?.dia_fatura,
        distributor: distribuidoraInstalacao?.nome,
        distributorStatus: distribuidoraInstalacao?.status?.toUpperCase() === DISTRIBUTOR_STATUS.ACTIVE ? true : false,
        hasSyncDistributorData: Boolean(instalacao?.distribuidora_login),
        distributorLogin: instalacao?.distribuidora_login || "",
        distributorPassword: instalacao?.distribuidora_pass || "",
    })
};
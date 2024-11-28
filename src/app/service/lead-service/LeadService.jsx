import { USER_TYPE } from "@/app/pages/enums/globalEnums";
import { checkForCompanyName } from "@/app/utils/company/CompanyUtils";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import { capitalizeEachWord } from "@/app/utils/formatters/textFormatter";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const createSignupPayload = (name, email, phone, cep, value, type, coupon) => {
    return {
        nome_completo: name,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
        cupom: coupon,
    }
}

export const createCompanyPartnerPayload = (name, corporateName, email, phone, cep, value, type) => {
    return {
        nome_completo: name,
        nome_empresa: corporateName,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
    }
}
export const createPartnerPayload = (name, corporateEmail, email, phone, cep, value, type, token, coupon) => {
    return {
        nome_completo: name,
        email_corporativo: corporateEmail,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
        token: token,
        cupom: coupon
    }
}
export const createPromoPayload = (name, email, phone, cep, value, type, token) => {
    return {
        nome_completo: name,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
        token: token,
    }
}

export const startSignUp = async (data) => {
    var response = null
    try {
        response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/step-one`, data);
    } catch (error) {
        if (error.response) {
            console.log("Error message from server:", error.response.data);
            response = error.response;
        } else if (error.request) {
            console.log("No response received from server.");
            response = error.request;
        } else {
            console.log("Error while setting up the request:", error.message);
            response = error.message;
        }
    }
    return response
}
export const startSignUpForPartners = async (data) => {
    var response = null
    try {
        response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/lp/${data.token}`, data);

    } catch (error) {
        if (error.response) {
            console.log("Error message from server:", error.response);
            return error.response;
        } else if (error.request) {
            console.log("No response received from server.");
            response = error;
        } else {
            console.log("Error while setting up the request:", error.message);
            response = error;
        }
    }
    return response
}


export const getLeadData = async (uuid, store, storeAddress) => {

    store.updateUser({ uuid: uuid });
    Cookies.set('leveUUID', uuid)

    try {
        const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
        if (requestSuccessful(userResponse?.status)) {

            console.log("userResponse ==>>", userResponse)

            const { instalacao, distribuidora } = userResponse?.data
            const consumidor = userResponse?.data?.instalacao?.consumidor
            const descontosCarbono = userResponse?.data?.descontos_carbono

            const cep = consumidor?.cep

            const updatedUser = {
                name: capitalizeEachWord(consumidor?.nome_completo),
                phone: consumidor?.telefone,
                email: consumidor?.email,
                cost: instalacao?.valor_base_consumo,
                cep: instalacao?.cep,
                coupon: consumidor?.ref_origin,

                cpf: consumidor?.cpf !== "" ? consumidor.cpf : "",
                rg: consumidor?.rg !== "" ? consumidor.rg : "",
                birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

                isCompany: consumidor?.type == USER_TYPE.PJ ? true : false,
                cnpj: consumidor?.type == USER_TYPE.PJ ? instalacao?.cnpj : "",
                companyName: consumidor?.type == USER_TYPE.PJ ? checkForCompanyName(instalacao?.razao_social, instalacao?.nome) : "",

                nationality: consumidor?.nacionalidade,
                profession: consumidor?.profissao,
                maritalStatus: consumidor?.estado_civil,

                discount: descontosCarbono?.desconto,
                clientId: instalacao?.clientes_id,

                distributor: distribuidora?.nome,
                distributorPhotoUrl: distribuidora?.foto_numero_instalacao,

                tusd: descontosCarbono?.tusd,
                te: descontosCarbono?.te,
                annualDiscount: descontosCarbono?.desconto_anual,
                treeEquivalency: descontosCarbono?.equivalencia_arvores,
                carbonReduction: descontosCarbono?.reducao_carbono,
                availabilityTax: descontosCarbono?.taxa_disponibilidade,
            }

            store.updateUser(updatedUser);

            const updatedAddress = {
                cityId: consumidor?.cidade_id,
                stateId: consumidor?.estado_id,
                installationNumber: instalacao?.numero_instalacao
            }
            storeAddress.updateAddress(updatedAddress)

            const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                params: { cep: cep },
                withCredentials: false
            });

            if (requestSuccessful(addressResponse?.status)) {
                const address = addressResponse?.data
                const updatedFullAddress = {
                    street: address?.logradouro,
                    neighborhood: address?.bairro,
                    city: address?.cidade,
                    state: address?.uf,
                    cep: address?.cep,
                }
                storeAddress.updateAddress(updatedFullAddress)

            }
        }
    } catch (error) {
        console.error(error);
    }
}
import { COOKIES_FOR, USER_TYPE } from "@/app/pages/enums/globalEnums";
import { checkForCompanyName } from "@/app/utils/company/CompanyUtils";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import { capitalizeEachWord, sanitizeAndCapitalizeWords } from "@/app/utils/formatters/textFormatter";
import axios from "axios";
import Cookies from "js-cookie";
import { requestSuccessful } from "../utils/Validations";

export const createSignupPayload = (name, email, phone, cep, value, type, coupon) => {
    return {
        nome_completo: sanitizeAndCapitalizeWords(name),
        email: email?.toLowerCase()?.trim(),
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


export const getLeadData = async (uuid, storeUser, storeAddress) => {

    storeUser.updateUser({ uuid: uuid });
    Cookies.set(COOKIES_FOR.UUID, uuid)

    try {
        const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
        if (requestSuccessful(userResponse?.status)) {

            console.log("userResponse ==>>", userResponse)

            const { instalacao, distribuidora } = userResponse?.data
            const consumidor = userResponse?.data?.instalacao?.consumidor
            const descontosCarbono = userResponse?.data?.descontos_carbono

            const cep = consumidor?.cep

            const updatedUser = {
                uuid: consumidor?.uuid || storeUser?.user?.uuid,
                name: capitalizeEachWord(consumidor?.nome_completo) || capitalizeEachWord(storeUser?.user?.name) || "",
                phone: consumidor?.telefone || storeUser?.user?.phone || "",
                email: consumidor?.email || storeUser?.user?.email || "",
                cost: storeUser?.user?.cost || instalacao?.valor_base_consumo,
                cep: instalacao?.cep,
                coupon: consumidor?.ref_origin,

                cpf: consumidor?.cpf || storeUser?.user?.cpf || "",
                rg: consumidor?.rg || storeUser?.user?.rg || "",
                birthDate: formatBasicBirthDate(consumidor?.data_nascimento) || storeUser?.user?.birthDate || "",

                isCompany: consumidor?.type == USER_TYPE.PJ ? true : false,
                cnpj: consumidor?.type == USER_TYPE.PJ ? instalacao?.cnpj : "",
                companyName: consumidor?.type == USER_TYPE.PJ ? checkForCompanyName(instalacao?.razao_social, instalacao?.nome) : "",

                nationality: consumidor?.nacionalidade || storeUser?.user?.nationality || "",
                profession: consumidor?.profissao || storeUser?.user?.profession || "",
                maritalStatus: consumidor?.estado_civil || storeUser?.user?.maritalStatus || "",

                discount: descontosCarbono?.desconto || storeUser?.user?.discount || "",
                clientId: instalacao?.clientes_id || storeUser?.user?.clientId || "",

                distributor: distribuidora?.nome || storeUser?.user?.distributor || "",
                distributorPhotoUrl: distribuidora?.foto_numero_instalacao,

                tusd: descontosCarbono?.tusd,
                te: descontosCarbono?.te,
                annualDiscount: descontosCarbono?.desconto_anual,
                treeEquivalency: descontosCarbono?.equivalencia_arvores,
                carbonReduction: descontosCarbono?.reducao_carbono,
                availabilityTax: descontosCarbono?.taxa_disponibilidade,
            }

            storeUser.updateUser(updatedUser);

            const updatedAddress = {
                cityId: consumidor?.cidade_id || storeAddress?.cityId || "",
                stateId: consumidor?.estado_id || storeAddress?.stateId || "",
                installationNumber: instalacao?.numero_instalacao || storeAddress?.installationNumber || ""
            }
            storeAddress.updateAddress(updatedAddress)

            const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                params: { cep: cep },
                withCredentials: false
            });

            if (requestSuccessful(addressResponse?.status)) {
                const address = addressResponse?.data
                const updatedFullAddress = {
                    street: address?.logradouro || storeAddress?.street || "",
                    neighborhood: address?.bairro || storeAddress?.neighborhood || "",
                    city: address?.cidade || storeAddress?.city || "",
                    state: address?.uf || storeAddress?.state || "",
                    cep: address?.cep || storeAddress?.cep || "",
                }
                storeAddress.updateAddress(updatedFullAddress)

            }
        }
    } catch (error) {
        console.error(error);
    }
}
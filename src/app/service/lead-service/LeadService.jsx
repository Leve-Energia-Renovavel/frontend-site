import { COOKIES_FOR, USER_TYPE } from "@/app/pages/enums/globalEnums";
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
            response = error.response.data;
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

    try {
        const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
        if (requestSuccessful(userResponse?.status)) {

            console.log("getLeadData response ==>>", userResponse)
            Cookies.set(COOKIES_FOR.UUID, uuid)

            const { instalacao, distribuidora } = userResponse?.data
            const consumidor = userResponse?.data?.instalacao?.consumidor
            const descontosCarbono = userResponse?.data?.descontos_carbono

            const cep = consumidor?.cep

            const user = storeUser?.user

            const updatedUser = {
                uuid: instalacao?.uuid || user?.uuid,
                name: capitalizeEachWord(consumidor?.nome_completo) || capitalizeEachWord(user?.name) || "",
                phone: consumidor?.telefone || user?.phone || "",
                email: consumidor?.email || user?.email || "",
                cost: user?.cost || instalacao?.valor_base_consumo,
                cep: instalacao?.cep,
                coupon: consumidor?.ref_origin,

                cpf: consumidor?.cpf || user?.cpf || "",
                rg: consumidor?.rg || user?.rg || "",
                birthDate: formatBasicBirthDate(consumidor?.data_nascimento) || user?.birthDate || "",

                isCompany: consumidor?.type == USER_TYPE.PJ ? true : false,
                cnpj: user?.cnpj || instalacao?.cnpj || "",
                companyName: user?.companyName || instalacao?.razao_social || "",

                nationality: consumidor?.nacionalidade || user?.nationality || "",
                profession: consumidor?.profissao || user?.profession || "",
                maritalStatus: consumidor?.estado_civil || user?.maritalStatus || "",

                discount: descontosCarbono?.desconto || user?.discount || "",
                clientId: instalacao?.clientes_id || user?.clientId || "",

                distributor: distribuidora?.nome || user?.distributor || "",
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
                number: instalacao?.numero || storeAddress?.number || "",
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
import axios from "axios";

export const createSignupPayload = (name, email, phone, cep, value, type, coupon) => {
    return {
        nome: name,
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
        nome: name,
        nome_empresa: corporateName,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
    }
}
export const createPartnerPayload = (name, corporateEmail, email, phone, cep, value, type, token) => {
    return {
        nome: name,
        email_corporativo: corporateEmail,
        email: email.toLowerCase(),
        telefone: phone,
        cep: cep,
        valor: value,
        type: type,
        token: token
    }
}
export const createPromoPayload = (name, email, phone, cep, value, type, token) => {
    return {
        nome: name,
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
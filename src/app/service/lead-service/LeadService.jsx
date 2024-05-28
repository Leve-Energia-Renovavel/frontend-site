import { partnerTokens } from "@/app/utils/helper/partnerHelper";
import axios from "axios";

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
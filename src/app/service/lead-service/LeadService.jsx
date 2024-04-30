import axios from "axios";

export const startSignUp = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/step-one`, data);
        return response

    } catch (error) {
        if (error.response) {
            console.log("Error message from server:", error.response.data);
            return error.response.data;
        } else if (error.request) {
            console.log("No response received from server.");
            return error.request;
        } else {
            console.log("Error while setting up the request:", error.message);
            return error.message;
        }
    }
}
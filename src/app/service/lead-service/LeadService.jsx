import axios from "axios";

export const startSignUp = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/step-one`, data);
        return response

    } catch (error) {
        console.error(error);
        return error
    }
}
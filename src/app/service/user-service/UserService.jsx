import axios from "axios";

export const signUp = async (data) => {
    try {
        console.log("saving data...")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up`, data);
        return response

    } catch (error) {
        console.error(error);
        return error
    }
}
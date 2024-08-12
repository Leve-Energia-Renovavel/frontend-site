import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (data) => {
    try {
        console.log("saving data...")
        return await axios.post(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up`, data);

    } catch (error) {
        console.error(error);
        return error
    }
}
export const getAccessToken = async (data) => {
    try {
        console.log("getting access token...")
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

        console.log("logging in...")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_TOKEN_OAUTH}`, payload);
        console.log("logIn response ===>>>", response)
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
        console.log("updating user profile data...")
        return await axios.put(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/painel/`, data, { headers });

    } catch (error) {
        console.error(error);
        return error
    }
}
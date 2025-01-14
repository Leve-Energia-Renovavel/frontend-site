export const createLoginData = (email, password) => {
    return {
        username: email.trim(),
        password: password,
        grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        scope: "",
    };
};

export const createForgotPasswordData = (email, password) => {
    return { email: email, password: password };

}

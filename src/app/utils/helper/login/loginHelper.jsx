export const createLoginData = (loginRef) => {
    return {
        username: loginRef.email.current.value.trim(),
        password: loginRef.password.current.value,
        grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        scope: "",
    };
};

export const createForgotPasswordData = (loginRef) => {
    return { email: loginRef.email.current.value.trim() };

}

export const clearPartnerName = (str) => {
    return str.replace(/\/|lp/g, '');
};


export const partnerTokens = {
    "tribanco": process.env.NEXT_PUBLIC_TRIBANCO_TOKEN,
    "tim": process.env.NEXT_PUBLIC_TIM_TOKEN,
    "yduqs": process.env.NEXT_PUBLIC_YDUQS_TOKEN,
    "loreal": process.env.NEXT_PUBLIC_LOREAL_TOKEN,
    "localiza": process.env.NEXT_PUBLIC_LOCALIZA_TOKEN,
    "martins": process.env.NEXT_PUBLIC_MARTINS_TOKEN,
}
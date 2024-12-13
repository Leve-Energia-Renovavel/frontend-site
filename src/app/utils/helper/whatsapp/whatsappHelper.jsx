import { LEVE_WHATSAPP_NUMBER } from "@/app/pages/enums/globalEnums";

export const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send/?phone=${LEVE_WHATSAPP_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};
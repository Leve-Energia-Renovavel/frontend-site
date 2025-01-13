import { LEVE_WHATSAPP_NUMBER } from "@/app/pages/enums/globalEnums"

export const pathHelper = {
    '/': null,
    '/home/': null,
    '/register/': false,
    '/login/': false,
    '/lp/': false,
    '/lp/novos-clientes/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/recover-password/': true,
    '/fail/out-of-range/': false,
    '/fail/low-cost/': false,
    '/connection/': true,
}

export const headerHelper = {
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/dashboard/installations/contract-signature/': true,
    '/dashboard/payment/': true,
    '/connection/': true,
}
export const landingPageHelper = {
    '/lp/': true,
    '/lp/novos-clientes/': true,
    '/lp/apresentacao/': true,
    '/lp/empresas/': true,
    '/lp/tribanco/': true,
    '/lp/tim/': true,
    '/lp/martins/': true,
    '/lp/yduqs/': true,
    '/lp/localiza/': true,
}

export const helperToPath = {
    '/': "na+home",
    '/home/': "na+home",
    '/login/': "no+login",
    '/simulacao-de-economia/': "na+simulacao+de+economia",
    '/cadastro/titular/': "no+cadastro",
    '/cadastro/imovel/': "no+cadastro",
    '/cadastro/assinatura-contrato/': "na+página+de+assinatura+de+contrato",

    '/municipios-atendidos/': "na+página+de+municípios+atendidos",
    '/dashboard/': "no+painel",
    '/dashboard/profile/': "na+minha+página+de+perfil",
    '/dashboard/invoices/': "na+página+de+faturas",
    '/dashboard/installations/': "na+página+meus+enderecos",
    '/recover-password/': "na+página+de+recuperar+senha",
    '/fail/out-of-range/': "na+página+de+fora+de+região",
    '/fail/low-cost/': "na+página+de+baixo+custo",
    '/politica-de-privacidade/': "na+Política+de+Privacidade",
    '/connection/': "na+página+de+conexão",

    // LPs internal
    '/lp/novos-clientes/': "na+landing+page+de+novos+clientes",
    '/lp/apresentacao/': "na+landing+page+de+apresentação",
    '/lp/empresas/': "na+landing+page+para+Empresas",

    // LPs partners
    '/lp/tribanco/': "na+landing+page+do+Tribanco",
    '/lp/tim/': "na+landing+page+da+Tim",
    '/lp/martins/': "na+landing+page+da+Martins",
    '/lp/yduqs/': "na+landing+page+da+Yduqs",
    '/lp/localiza/': "na+landing+page+da+Localiza",
    '/lp/allya/': "na+landing+page+da+Allya",
}

export const partnersPath = {
    '/lp/allya/': true,
    '/lp/localiza/': true,
    '/lp/martins/': true,
    '/lp/tim/': true,
    '/lp/tribanco/': true,
    '/lp/yduqs/': true,
}

export const handleWhatsapp = (location) => {
    const url = `https://api.whatsapp.com/send/?phone=${LEVE_WHATSAPP_NUMBER}&text=Oi!+Estou+${location}+da+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`
    window.open(url, '_blank', 'noopener noreferrer');
}
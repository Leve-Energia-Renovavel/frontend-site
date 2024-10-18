import { leveWhatsappNumber } from "@/app/pages/globalEnums"

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
    '/': false,
    '/home/': false,
    '/signup/': false,
    '/lp/': false,
    '/lp/novos-clientes/': false,
    '/lp/apresentacao/': false,
    '/lp/empresas/': false,
    '/lp/tribanco/': false,
    '/lp/tim/': false,
    '/lp/martins/': false,
    '/lp/yduqs/': false,
    '/lp/localiza/': false,
    '/register/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/dashboard/installations/contract-signature/': true,
    '/dashboard/payment/': true,
    '/recover-password/': false,
    '/fail/out-of-range/': false,
    '/fail/low-cost/': false,
    '/connection/': true,
}
export const landingPageHelper = {
    '/': false,
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
    '/signup/': "no+cadastro",
    '/login/': "no+login",
    '/lp/novos-clientes/': "na+landing+page+de+novos+clientes",
    '/lp/apresentacao/': "na+landing+page+de+apresentação",
    '/lp/tribanco/': "na+landing+page+do+Tribanco",
    '/lp/tim/': "na+landing+page+da+Tim",
    '/lp/martins/': "na+landing+page+da+Martins",
    '/lp/yduqs/': "na+landing+page+da+Yduqs",
    '/lp/localiza/': "na+landing+page+da+Localiza",
    '/lp/empresas/': "na+landing+page+para+Empresas",
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
}

export const partnersPath = {
    '/lp/tribanco/': true,
    '/lp/tim/': true,
    '/lp/martins/': true,
    '/lp/yduqs/': true,
    '/lp/localiza/': true,
}

export const handleWhatsapp = (location) => {
    const url = `https://api.whatsapp.com/send/?phone=${leveWhatsappNumber}&text=Oi!+Estou+${location}+da+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`
    window.open(url, '_blank', 'noopener noreferrer');
}
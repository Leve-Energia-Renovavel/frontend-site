export const pathHelper = {
    '/': false,
    '/home/': null,
    '/register/': false,
    '/login/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/recover-password/': true,
    '/fail/out-of-range/': false,
    '/fail/low-cost/': false,
}

export const helperToPath = {
    '/': "no+cadastro+da",
    '/home/': "na+home+da",
    '/register/': "no+cadastro+da",
    '/login/': "no+login+da",
    '/dashboard/': "no+painel+da",
    '/profile/': "no+meu+perfil+da",
    '/invoices/': "na+pagina+de+faturas+da",
    '/installations/': "na+pagina+de+enderecos+da",
    '/fail/out-of-range/': "na+pagina+de+fora+da+regiao+de+cobertura+da",
    '/fail/low-cost/': "na+pagina+de+baixo+custo+da",
}

export const headerHelper = {
    '/': false,
    '/home/': "newhomedesktop",
    '/register/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/recover-password/': true,
    '/fail/out-of-range/': false,
    '/fail/low-cost/': false,
}
export const pathHelper = {
    '/': false,
    '/register/': false,
    '/login/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/recover-password/': true,
}

export const helperToPath = {
    '/': "no+cadastro+da",
    '/register/': "no+cadastro+da",
    '/login/': "no+login+da",
    '/dashboard/': "no+painel+da",
    '/profile/': "no+meu+perfil+da",
    '/invoices/': "na+pagina+de+faturas+da",
    '/installations/': "na+pagina+de+enderecos+da",
}

export const headerHelper = {
    '/': false,
    '/register/': false,
    '/dashboard/': true,
    '/dashboard/profile/': true,
    '/dashboard/invoices/': true,
    '/dashboard/installations/': true,
    '/recover-password/': true,
}
export const metadata = {
    title: 'Empresas - Leve Energia Renovavel',
    description: 'Reduza os custos operacionais da sua empresa com energia solar da Leve. Descubra como nossos serviços beneficiam negócios de todos os tamanhos.',
    icons: {
        icon: "/favicon.ico",
    },
    content: 'text/html; charset=utf-8',
    cacheControl: 'public, max-age=31536000',
    expires: 'Sun, 31 Dec 2024 23:59:59 GMT',
}


export default function Layout({ children }) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}
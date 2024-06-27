export const metadata = {
    title: 'Política de Privacidade - Leve Energia Renovavel',
    description: 'Conheça a Política de Privacidade da Leve Energia e saiba como protegemos seus dados pessoais. Transparência e segurança são nossas prioridades.',
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
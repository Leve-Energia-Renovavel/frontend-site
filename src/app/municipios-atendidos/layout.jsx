export const metadata = {
    title: 'Área de Atendimento - Leve Energia Renovavel',
    description: 'Confira os municípios atendidos pela Leve Energia. Descubra se sua cidade está na nossa área de cobertura e aproveite os benefícios da energia solar.',
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
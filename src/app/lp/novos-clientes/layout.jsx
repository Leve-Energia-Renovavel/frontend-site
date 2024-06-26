export const metadata = {
    title: 'Leve Energia Renovavel',
    description: 'Junte-se à Leve Energia e aproveite os benefícios da energia solar. Cadastre-se e comece a economizar na sua conta de luz de forma sustentável e eficiente.',
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
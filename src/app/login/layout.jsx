export const metadata = {
    title: 'Login - Leve Energia Renovavel',
    description: 'Faça login para ver sua economia na conta de luz e sua contribuição para um futuro sustentável com energia solar.',
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
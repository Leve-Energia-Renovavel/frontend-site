export const metadata = {
    title: 'Apresentação - Leve Energia Renovavel',
    description: 'Veja como podemos ajudar você a economizar na conta de luz e contribuir para um futuro sustentável com energia solar. 100% digital e em apenas 3 cliques!',
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
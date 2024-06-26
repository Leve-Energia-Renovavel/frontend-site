export const metadata = {
    title: 'Arraiá Leve Energia Renovavel',
    description: 'Leve energia renovavel - pague menos na conta de luz',
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
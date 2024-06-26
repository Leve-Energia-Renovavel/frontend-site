
export async function generateMetadata({ params, searchParams }) {

    function capitalizeFirstLetter(string) {
        if (!string || string === "") {
            return ""
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {
        title: `Leve + ${capitalizeFirstLetter(params?.partner)}`,
        description: `Parceiro ${capitalizeFirstLetter(params?.partner)}: Agora você pode usar energia sustentável e ainda economizar na sua conta de luz com a Leve Energia! 100% digital e em apenas 3 cliques.`,
    }
}


export default function Layout({ children }) {

    return (
        <>
            <main>{children}</main>
        </>
    )
}
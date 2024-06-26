
export async function generateMetadata({ params, searchParams }) {

    function capitalizeFirstLetter(string) {
        if (!string || string === "") {
            return ""
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {
        title: `Leve + ${capitalizeFirstLetter(params?.partner)}`,
        description: 'Leve energia renovavel - pague menos na conta de luz',
    }
}


export default function Layout({ children }) {

    return (
        <>
            <main>{children}</main>
        </>
    )
}
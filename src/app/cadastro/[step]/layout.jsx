import { capitalizeFirstLetter } from "@/app/utils/formatters/textFormatter"

export async function generateMetadata({ params, searchParams }) {

    return {
        title: `Cadastro ${capitalizeFirstLetter(params?.step)} - Leve Energia Renovável`,
        description: `Cadastro ${capitalizeFirstLetter(params?.partner)}.`,
    }
}

export default function Layout({ children }) {
    return (
        <main>{children}</main>
    )
}

import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import Image from "next/image";
import boleto from "../../../resources/img/exemplo_numero_instalacao_cemig.png";

export default function RegisterModal() {
    return (
        <>
            <Image src={boleto} alt='exemplo numero instalacao' width={420} height={'auto'} loading="eager" priority={true} />
            <DefaultButton variant="contained" text={"Close modal"} />
        </>
    );
}
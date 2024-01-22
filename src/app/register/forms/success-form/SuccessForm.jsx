
import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { FormContainer, FormHeader } from "./styles";
import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import { useRouter } from "next/navigation";

export default function SuccessForm() {
    const router = useRouter()

    return (
        <>
            <FormContainer>
                <FormHeader>
                    <SuccessFormTitle />
                    <SuccessFormProgress />
                </FormHeader>
                <div style={{ margin: '0 auto' }}>
                    <DefaultButton variant="contained" text={"Acessar a minha conta"} onClick={() => router.push(`/`)} />
                </div>
            </FormContainer>
        </>
    );
}
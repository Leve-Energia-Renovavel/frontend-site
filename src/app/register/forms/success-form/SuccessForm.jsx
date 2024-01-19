import SuccessFormProgress from "./SuccessFormProgress";
import SuccessFormTitle from "./SuccessFormTitle";
import { FormContainer, FormHeader } from "./styles";

export default function SuccessForm() {
    return (
        <FormContainer>
            <FormHeader>
                <SuccessFormTitle />
                <SuccessFormProgress />
            </FormHeader>
        </FormContainer>
    );
}
"use client"

import SignupFormHeader from "../signup/forms/SignupFormHeader";
import { ContractSignatureContainer as Container, ContractSignatureForm } from "./styles";

export default function NewContractSignature() {
    return (
        <>
            <Container>
                <ContractSignatureForm>
                    <SignupFormHeader step={2} />

                </ContractSignatureForm>
            </Container>
        </>
    )
}
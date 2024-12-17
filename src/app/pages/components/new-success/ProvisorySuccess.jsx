"use client"

import dynamic from 'next/dynamic';
import { NewSuccessContainer as Container, NewSuccessForm, SignupLinearProgress } from "./styles";

const SignupFormHeader = dynamic(() => import("../signup/forms/header/SignupFormHeader"), { ssr: false });
const ProvisorySuccessFormContent = dynamic(() => import('./ProvisorySuccessFormContent'), { ssr: false });

export default function ProvisorySuccess() {

    return (
        <Container >
            <NewSuccessForm>
                <SignupFormHeader step={4} />
                <SignupLinearProgress variant="determinate" value={100} />
                <ProvisorySuccessFormContent />
            </NewSuccessForm>
        </Container>
    )
}

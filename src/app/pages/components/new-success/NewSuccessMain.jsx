"use client"

import dynamic from 'next/dynamic';
import { NewSuccessContainer as Container, NewSuccessForm, SignupLinearProgress } from "./styles";

const SignupFormHeader = dynamic(() => import("../signup/forms/SignupFormHeader"), { ssr: false });
const NewSuccessContent = dynamic(() => import('./NewSuccessFormContent'), { ssr: false });

export default function NewSuccessMain() {

    return (
        <Container className="newSuccessMainContainer">
            <NewSuccessForm className="newSuccessForm">
                <SignupFormHeader step={4} />
                <SignupLinearProgress variant="determinate" value={100} />
                <NewSuccessContent />
            </NewSuccessForm>
        </Container>
    )
}

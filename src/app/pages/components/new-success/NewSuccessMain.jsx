"use client"

import dynamic from 'next/dynamic';
import ConfettiExplosion from "react-confetti-explosion";
import { NewSuccessContainer as Container, NewSuccessForm, SignupLinearProgress } from "./styles";

const SignupFormHeader = dynamic(() => import("../signup/forms/SignupFormHeader"), { ssr: false });
const NewSuccessContent = dynamic(() => import('./NewSuccessFormContent'), { ssr: false });

export default function NewSuccessMain() {

    return (
        <Container >
            <NewSuccessForm>
                {/* <ConfettiExplosion force={0.8}
                    duration={4000}
                    particleCount={300}
                    width={1900}
                    style={{ margin: "0 auto" }}
                    colors={['#005940', '#FF7133', '#E1FF0F', '#ff814b', '#66D805']} /> */}

                <SignupFormHeader step={4} />
                <SignupLinearProgress variant="determinate" value={100} />

                <NewSuccessContent />
            </NewSuccessForm>
        </Container>
    )
}

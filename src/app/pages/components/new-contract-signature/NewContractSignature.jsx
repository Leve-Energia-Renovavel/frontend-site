/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreClickSign, useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import formatPhoneNumber from "@/app/utils/formatters/phoneFormatter";
import { Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContractSignatureContainer as Container, ContractSignatureForm, SignupLinearProgress } from "./styles";

const SignupFormHeader = dynamic(() => import("../signup/forms/SignupFormHeader"), { ssr: false });
const ClicksignWidgetComponent = dynamic(() => import("@/app/utils/clicksign/ClicksignWidgetComponent"), { ssr: false });

export default function NewContractSignature() {


    const search = useSearchParams()

    const pathUuid = search.get("uuid")

    const router = useRouter()
    const store = useStoreUser()
    const storeClicksign = useStoreClickSign()

    const user = JSON.parse(window.localStorage.getItem('user')) || store?.user
    const { uuid, phone } = user?.user ?? (store?.user || {})

    if (!uuid || uuid == "undefined") {
        router.push("/")
    }

    const [step, setStep] = useState(2);
    const [value, setValue] = useState(50);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                if (requestSuccessful(response.status)) {

                    const clicksignReg = response.data.instalacao.document_key
                    Cookies.set("clickSignKey", response.data.instalacao.document_key)

                    storeClicksign.updateClicksignKey(clicksignReg);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        const stepTimeout = setTimeout(() => {
            setStep(3);
        }, 5000);

        const valueTimeout = setTimeout(() => {
            setValue(75);
        }, 5000);

        return () => {
            clearTimeout(stepTimeout);
            clearTimeout(valueTimeout);
        };
    }, []);


    return (
        <>
            <Container>
                <ContractSignatureForm>
                    <SignupFormHeader step={step} />
                    <SignupLinearProgress variant="determinate" value={value} />
                    <Typography className="contractSignInfo">Para assinar o contrato, esteja com o telefone <span className="phoneNumber">{formatPhoneNumber(phone)}</span> em mãos. Insira o código de confirmação que enviaremos a você via SMS.</Typography>
                    <ClicksignWidgetComponent />
                </ContractSignatureForm>
            </Container>
        </>
    )
}
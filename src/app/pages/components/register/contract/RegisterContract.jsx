/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreClickSign, useStoreUser } from "@/app/hooks/stores/useStore";
import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import { requestSuccessful } from "@/app/service/utils/Validations";
import axios from "axios";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { PATH_TO } from "../../../enums/globalEnums";
import { ContractSignatureForm } from "./styles";

const ClicksignWidgetComponent = dynamic(() => import("@/app/utils/clicksign/ClicksignWidgetComponent"), { ssr: false });

export default function RegisterContract() {

    const router = useRouter()
    const search = useSearchParams()
    const storeMessage = useStoreMessages()

    const storeUser = useStoreUser()
    const storeClicksign = useStoreClickSign()

    const uuid = search.get("uuid") || storeUser.user.uuid || Cookies.get('leveUUID')

    if (!uuid || uuid == "undefined") {
        storeMessage.setErrors(["Erro ao gerar contrato. Por favor, tente novamente."])
        router.push(PATH_TO.REGISTER_ADDRESS)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = { assinatura: true }
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`, data);
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

    return (
        <ContractSignatureForm className="contractSignatureForm">
            <ClicksignWidgetComponent uuid={uuid} />
        </ContractSignatureForm>
    )
}
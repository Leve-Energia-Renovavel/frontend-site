/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import axios from "axios";
import { notFound, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RegisterBannerFailCost from "../banners/banner-fail-cost/FailCostBanner";
import RegisterBannerFailRegion from "../banners/banner-fail-region/FailRegionBanner";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import RegisterForm from "../forms/register-form/RegisterForm";
import ResultEconomy from "../result-economy/ResultEconomy";

const isNotValidUserType = (userType) => {
    return userType != 'cpf' && userType != 'cnpj'
}

export default function RegisterMain() {

    const params = useParams()
    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    // const uuid = search.get("uuid")
    const uuid = "20d04059-a75b-403b-910e-e59096a1370b"

    var isCompany = false
    var isLowCost = false
    var isOutOfRange = false

    // if (isNotValidUserType(userData?.type)) {
    //     notFound()
    // }

    useEffect(() => {
        const fetchData = async () => {

            store.setUUID(uuid)

            try {
                const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                if (requestSuccessful(userResponse.status)) {

                    const consumer = userResponse?.data?.instalacao?.consumidor
                    const cep = consumer?.cep

                    store.setUsername(consumer?.nome)
                    store.setPhone(consumer?.telefone)
                    store.setEmail(consumer?.email)
                    store.setCost(consumer?.valor)
                    store.setCEP(cep)

                    const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                        params: { cep: cep }
                    });

                    if (requestSuccessful(addressResponse?.status)) {

                        const address = addressResponse?.data

                        storeAddress.updateAddress(
                            {
                                street: address?.logradouro,
                                neighborhood: address?.bairro,
                                city: address?.cidade,
                                state: address?.uf,
                                cep: address?.cep,
                            })

                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLowCost && <RegisterBannerFailCost />}
            {!isLowCost && isOutOfRange && <RegisterBannerFailRegion />}
            {!isLowCost && !isOutOfRange &&
                <>
                    <RegisterBannerSuccess />
                    <ResultEconomy />
                    <FormBanner />
                    <RegisterForm />
                </>
            }
        </div>
    )
}



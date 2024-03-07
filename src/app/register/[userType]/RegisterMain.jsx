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
    // const uuid = "20d04059-a75b-403b-910e-e59096a1370b"   //teste Milton

    const uuid = "b2fc67d3-a48e-47d2-972e-629da4dafcfc"   //teste um

    // const uuid = "bc2ad4c7-c9c7-4743-8f70-50431af52565" //teste dois

    var isCompany = store.user.isCompany
    var isLowCost = store.user.isLowCost
    var isOutOfRange = store.user.isOutOfRange

    // if (isNotValidUserType(userData?.type)) {
    //     notFound()
    // }

    useEffect(() => {
        const fetchData = async () => {

            store.updateUser({ uuid: uuid });

            try {
                const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`, {
                    withCredentials: false
                });
                if (requestSuccessful(userResponse.status)) {

                    const instalacao = userResponse?.data?.instalacao
                    const consumer = userResponse?.data?.instalacao?.consumidor
                    const cep = consumer?.cep

                    store.updateUser({
                        name: consumer?.nome + " " + consumer?.sobrenome,
                        phone: consumer?.telefone,
                        email: consumer?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: cep,
                        discount: instalacao?.desconto,
                    });

                    storeAddress.updateAddress({
                        cityId: consumer?.cidade_id,
                        stateId: consumer?.estado_id,
                    })

                    const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                        params: { cep: cep },
                        withCredentials: false
                    });

                    if (requestSuccessful(addressResponse?.status)) {

                        const address = addressResponse?.data

                        storeAddress.updateAddress({
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



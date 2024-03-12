/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import axios from "axios";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import RegisterForm from "../forms/register-form/RegisterForm";
import ResultEconomy from "../result-economy/ResultEconomy";
import Cookies from "js-cookie";

export default function RegisterMain() {

    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid")

    // if (!uuid) {
    //     notFound()
    // }

    var isLowCost = store.user.isLowCost
    var isOutOfRange = store.user.isOutOfRange

    useEffect(() => {
        const fetchData = async () => {

            store.updateUser({ uuid: uuid });
            Cookies.set('leveUUID', uuid)

            try {
                const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                console.log("userResponse ===>>", userResponse)
                if (requestSuccessful(userResponse.status)) {

                    const instalacao = userResponse?.data?.instalacao
                    const consumer = userResponse?.data?.instalacao?.consumidor
                    const isCompany = consumer?.type == "PJ" ? true : false
                    const cep = consumer?.cep


                    const updatedUser = {
                        name: consumer?.nome + " " + consumer?.sobrenome,
                        phone: consumer?.telefone,
                        email: consumer?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: cep,

                        isCompany: isCompany,

                        discount: instalacao?.desconto,
                        clientId: instalacao?.clientes_id,

                    }

                    store.updateUser(updatedUser);
                    Cookies.set('leveUserIsCompany', isCompany)
                    Cookies.set('leveUsername', consumer?.nome)
                    Cookies.set('leveUser', updatedUser)

                    const updatedAddress = {
                        cityId: consumer?.cidade_id,
                        stateId: consumer?.estado_id,
                    }

                    storeAddress.updateAddress(updatedAddress)
                    Cookies.set('leveAddress', updatedAddress)

                    const addressResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                        params: { cep: cep },
                        withCredentials: false
                    });

                    if (requestSuccessful(addressResponse?.status)) {

                        const address = addressResponse?.data

                        const updatedFullAddress = {
                            street: address?.logradouro,
                            neighborhood: address?.bairro,
                            city: address?.cidade,
                            state: address?.uf,
                            cep: address?.cep,
                        }

                        storeAddress.updateAddress(updatedFullAddress)
                        Cookies.set('leveAddress', updatedFullAddress)

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
            {/* {isLowCost && <RegisterBannerFailCost />} */}
            {/* {!isLowCost && isOutOfRange && <RegisterBannerFailRegion />} */}
            {/* {!isLowCost && !isOutOfRange && */}
            <>
                <RegisterBannerSuccess />
                <ResultEconomy />
                <FormBanner />
                <RegisterForm />
            </>
            {/* } */}
        </div>
    )
}



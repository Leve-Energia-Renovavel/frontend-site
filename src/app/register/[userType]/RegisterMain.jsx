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
                    const distribuidora = userResponse?.data?.distribuidora
                    const consumidor = userResponse?.data?.instalacao?.consumidor
                    const isCompany = consumidor?.type == "PJ" ? true : false
                    const cep = consumidor?.cep

                    const updatedUser = {
                        name: consumidor?.nome + " " + consumidor?.sobrenome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: cep,

                        isCompany: isCompany,

                        discount: instalacao?.desconto,
                        clientId: instalacao?.clientes_id,

                        distributor: distribuidora?.nome,
                        distributorPhotoUrl: distribuidora?.foto_numero_instalacao
                    }

                    store.updateUser(updatedUser);
                    Cookies.set('leveIsCompany', isCompany)
                    Cookies.set('leveUser', JSON.stringify(updatedUser))

                    const updatedAddress = {
                        cityId: consumidor?.cidade_id,
                        stateId: consumidor?.estado_id,
                    }

                    storeAddress.updateAddress(updatedAddress)
                    Cookies.set('leveAddress', JSON.stringify(updatedAddress))

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
                        Cookies.set('leveAddress', JSON.stringify(updatedFullAddress))

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



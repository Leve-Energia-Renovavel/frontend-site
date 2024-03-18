"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useStoreAddress, useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import axios from "axios";
import Cookies from "js-cookie";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import RegisterForm from "../forms/register-form/RegisterForm";
import { clearBrowserData } from "@/app/utils/browser/BrowserUtils";

const ResultEconomy = dynamic(() => import('../result-economy/ResultEconomy'), { ssr: false });


export default function RegisterMain() {
    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid")

    if (!uuid) {
        notFound()
    }

    useEffect(() => {
        const fetchData = async () => {

            clearBrowserData();

            store.updateUser({ uuid: uuid });
            Cookies.set('leveUUID', uuid)

            try {
                const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                console.log("userResponse ===>>", userResponse)
                console.log("USER TYPE ===>>", userResponse.data.instalacao.consumidor.type)
                if (requestSuccessful(userResponse.status)) {

                    const instalacao = userResponse?.data?.instalacao
                    const distribuidora = userResponse?.data?.distribuidora
                    const consumidor = userResponse?.data?.instalacao?.consumidor

                    const cep = consumidor.cep

                    const updatedUser = {
                        name: consumidor?.nome + " " + consumidor?.sobrenome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: cep,

                        isCompany: consumidor.type == "PJ" ? true : false,

                        discount: instalacao?.desconto,
                        clientId: instalacao?.clientes_id,

                        distributor: distribuidora?.nome,
                        distributorPhotoUrl: distribuidora?.foto_numero_instalacao
                    }

                    store.updateUser(updatedUser);

                    const updatedAddress = {
                        cityId: consumidor?.cidade_id,
                        stateId: consumidor?.estado_id,
                    }

                    storeAddress.updateAddress(updatedAddress)

                    // Cookies.set('leveIsCompany', consumidor.type == "PJ" ? true : false)
                    // Cookies.set('leveUser', JSON.stringify(updatedUser))
                    // Cookies.set('leveAddress', JSON.stringify(updatedAddress))

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
                        // Cookies.set('leveAddress', JSON.stringify(updatedFullAddress))

                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <RegisterBannerSuccess />
            <ResultEconomy />
            <FormBanner />
            <RegisterForm suppressHydrationWarning={true} />
        </>
    )
}



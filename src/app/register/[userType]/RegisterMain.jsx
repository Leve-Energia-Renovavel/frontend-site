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
import { clearBrowserData } from "@/app/utils/browser/BrowserUtils";
import { formatBasicBirthDate, formatBirthDate } from "@/app/utils/date/DateUtils";

const ResultEconomy = dynamic(() => import('../result-economy/ResultEconomy'), { ssr: false });
const RegisterForm = dynamic(() => import('../forms/register-form/RegisterForm'), { ssr: false });

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

                        cpf: consumidor?.cpf !== "" ? consumidor.cpf : "",
                        rg: consumidor?.rg !== "" ? consumidor.cpf : "",
                        birthDate: consumidor?.data_nascimento !== "" ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

                        isCompany: consumidor?.type == "PJ" ? true : false,
                        cnpj: consumidor?.type == "PJ" ? instalacao?.cnpj : "",
                        companyName: consumidor?.type == "PJ" ? instalacao?.razao_social : "",

                        nationality: consumidor?.nacionalidade,
                        profession: consumidor?.profissao,
                        maritalStatus: consumidor?.estado_civil,

                        discount: instalacao?.desconto,
                        clientId: instalacao?.clientes_id,

                        distributor: distribuidora?.nome,
                        distributorPhotoUrl: distribuidora?.foto_numero_instalacao
                    }

                    store.updateUser(updatedUser);

                    const updatedAddress = {
                        cityId: consumidor?.cidade_id,
                        stateId: consumidor?.estado_id,
                        installationNumber: instalacao?.numero_instalacao
                    }

                    storeAddress.updateAddress(updatedAddress)

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



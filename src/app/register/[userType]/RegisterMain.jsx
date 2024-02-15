/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { notFound } from "next/navigation";
import RegisterBannerFailCost from "../banners/banner-fail-cost/FailCostBanner";
import RegisterBannerFailRegion from "../banners/banner-fail-region/FailRegionBanner";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import RegisterForm from "../forms/register-form/RegisterForm";
import ResultEconomy from "../result-economy/ResultEconomy";
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import axios from "axios";

const isNotValidUserType = (userType) => {
    return userType != 'cpf' && userType != 'cnpj'
}

export default function RegisterMain() {

    const params = useParams()
    const search = useSearchParams()

    const userData = {};
    for (const [key, value] of search.entries()) {
        userData[key] = value;
    }

    userData["type"] = params?.userType

    const isCompany = userData?.type == 'cnpj'
    const isLowCost = userData?.valor < 300                  //validation for cost
    const isOutOfRange = userData?.cep != "30670-515"       //validation for region

    if (isNotValidUserType(userData?.type)) {
        notFound()
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://viacep.com.br/ws/${userData?.cep}/json/`
                await axios.get(url).then(response => {
                    if (response.status == 200) {
                        userData["address"] = response.data.logradouro
                        userData["neighborhood"] = response.data.bairro
                        userData["city"] = response.data.localidade
                        userData["state"] = response.data.uf
                    }
                })

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLowCost && <RegisterBannerFailCost userData={userData} />}
            {!isLowCost && isOutOfRange && <RegisterBannerFailRegion userData={userData} />}
            {!isLowCost && !isOutOfRange &&
                <>
                    <RegisterBannerSuccess userData={userData} />
                    <ResultEconomy userData={userData} />
                    <FormBanner />
                    <RegisterForm userData={userData} isCompany={isCompany} />
                </>
            }
        </div>
    )
}



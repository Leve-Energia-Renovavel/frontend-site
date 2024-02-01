"use client"

import ResultEconomy from "../result-economy/ResultEconomy";
import RegisterBannerFailCost from "../banners/banner-fail-cost/FailCostBanner";
import RegisterBannerFailRegion from "../banners/banner-fail-region/FailRegionBanner";
import RegisterForm from "../forms/register-form/RegisterForm";
import FormBanner from "../banners/form-banner/FormBanner";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

const loadUserData = () => {
    if (history?.state?.name) {
        return history?.state
    } else {
        const storedObject = localStorage.getItem('leveData');
        if (storedObject) {
            return JSON.parse(storedObject);
        }
    }
}

const isNotValidUserType = (userType) => {
    return userType != 'cpf' && userType != 'cnpj'
}

export default function Register() {

    const userData = loadUserData()
    const isCompany = userData?.type == 'cnpj'
    const isLowCost = userData?.cost < 300                  //validation for cost
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

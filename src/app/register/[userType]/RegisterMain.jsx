/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { notFound, useParams, useSearchParams } from "next/navigation";
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

    const userData = {};
    for (const [key, value] of search.entries()) {
        userData[key] = value;
    }

    userData["type"] = "cpf"

    const isCompany = userData?.type == 'cnpj'
    const isLowCost = false
    const isOutOfRange = false

    if (isNotValidUserType(userData?.type)) {
        notFound()
    }

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



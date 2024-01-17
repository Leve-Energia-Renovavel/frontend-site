"use client"

import ResultEconomy from "../result-economy/ResultEconomy";
import RegisterBannerFailCost from "../banners/banner-fail-cost/RegisterBanner";
import RegisterBannerFailRegion from "../banners/banner-fail-region/RegisterBanner";
import RegisterForm from "../forms/RegisterForm";
import FormBanner from "../form-banner/FormBanner";
import RegisterBannerSuccess from "../banners/banner-success/RegisterBanner";

const loadUserData = () => {
    if (history.state.name) {
        return history.state
    } else {
        const storedObject = localStorage.getItem('leveData');
        if (storedObject) {
            return JSON.parse(storedObject);
        }
    }
}

export default function Register() {

    const userData = loadUserData()
    const isCompany = userData.type == 'cnpj'
    const isLowCost = userData.cost < 300
    const isOutOfRange = userData.cep != "30670-515"

    return (
        <div>
            {isLowCost && <RegisterBannerFailRegion userData={userData} />}
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

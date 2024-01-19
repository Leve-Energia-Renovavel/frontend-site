"use client"

import AlmostThere from "../banners/banner-almost-there/AlmostThereBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import ContractAuthForm from "../forms/contract-auth-form/ContractAuthForm";

const loadUserData = () => {
    if (history?.state?.address) {
        return history?.state
    } else {
        const storedObject = localStorage.getItem('leveLeadData');
        if (storedObject) {
            return JSON.parse(storedObject);
        }
    }
}

const accessNotValid = (user) => {
    return !user.contracts
}

export default function ContractAuthentication() {

    const userData = loadUserData()

    if (accessNotValid(userData)) {
        notFound()
    }

    return (
        <div>
            <AlmostThere userData={userData} confirmationByEmail={userData.user ? true : false} />
            <ContractAuthForm userData={userData} confirmationByEmail={userData.user ? true : false} />
            <FormBanner />
        </div>
    );
}
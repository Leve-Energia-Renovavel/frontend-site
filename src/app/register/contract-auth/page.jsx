"use client"

import AlmostThere from "../banners/banner-almost-there/AlmostThereBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import ContractAuthForm from "../forms/contract-auth-form/ContractAuthForm";
import { notFound } from "next/navigation";

const loadUserData = () => {
    if (typeof window !== 'undefined' && window?.history?.state?.name) {
        return window?.history?.state;
    } else {
        if (typeof window !== 'undefined' && window?.localStorage) {
            const storedObject = window.localStorage.getItem('leveLeadData');
            if (storedObject) {
                return JSON.parse(storedObject);
            }
        }
    }
}

const accessNotValid = (user) => {
    return !user?.contracts
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
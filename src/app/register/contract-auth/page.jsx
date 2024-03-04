"use client"

import { notFound } from "next/navigation";
import AlmostThere from "../banners/banner-almost-there/AlmostThereBanner";
import FormBanner from "../banners/form-banner/FormBanner";
import ContractAuthForm from "../forms/contract-auth-form/ContractAuthForm";

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
            <AlmostThere />
            <ContractAuthForm />
            <FormBanner />
        </div>
    );
}
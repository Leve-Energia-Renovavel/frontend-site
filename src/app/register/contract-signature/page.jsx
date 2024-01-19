"use client"

import { notFound } from 'next/navigation';
import AlmostThere from '../banners/banner-almost-there/AlmostThereBanner';
import ContractForm from '../forms/contract-signature-form/ContractForm';
import FormBanner from '../banners/form-banner/FormBanner';

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
    return !user.address
}

export default function ContractSignature() {

    const userData = loadUserData()

    if (accessNotValid(userData)) {
        notFound()
    }


    return (
        <>
            <AlmostThere userData={userData} confirmationByEmail={userData.user ? true : false} />
            <ContractForm />
            <FormBanner />
        </>
    );
}
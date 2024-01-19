"use client"

import { notFound, useRouter } from 'next/navigation';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
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
            <AlmostThereBanner userData={userData} confirmationByEmail={userData.user ? true : false} />
            <ContractForm userData={userData} isCompany={userData.company ? true : false} />
            <FormBanner />
        </>
    );
}
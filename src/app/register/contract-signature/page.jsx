"use client"

import { notFound } from 'next/navigation';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
import ContractForm from '../forms/contract-signature-form/ContractForm';
import FormBanner from '../banners/form-banner/FormBanner';
import ClicksignWidget from '@/app/utils/clicksign/ClickSignWidget';

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
    return !user?.address
}

export default function ContractSignature() {

    const userData = loadUserData()

    if (accessNotValid(userData)) {
        notFound()
    }


    return (
        <>
            <AlmostThereBanner userData={userData} confirmationByEmail={userData.user ? true : false} />
            <ClicksignWidget />
            <FormBanner />
        </>
    );
}
{/* <ContractForm userData={userData} isCompany={userData.company ? true : false} /> */ }
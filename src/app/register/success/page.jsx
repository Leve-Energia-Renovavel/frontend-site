"use client"

import CongratulationsBanner from '../banners/banner-congratulations/CongratulationsBanner';
import FormBanner from '../banners/form-banner/FormBanner';
import SuccessForm from '../forms/success-form/SuccessForm';

export default function Page() {
    return (
        <>
            <CongratulationsBanner />
            <SuccessForm />
            <FormBanner />
        </>
    );
}
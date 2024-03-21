"use client"

import CongratulationsBanner from '../banners/banner-congratulations/CongratulationsBanner';
import FormBannerSuccess from '../banners/form-banner-success/FormBannerSuccess';
import SuccessForm from '../forms/success-form/SuccessForm';

export default function Page() {
    return (
        <>
            <CongratulationsBanner />
            <SuccessForm />
            <FormBannerSuccess />
        </>
    );
}
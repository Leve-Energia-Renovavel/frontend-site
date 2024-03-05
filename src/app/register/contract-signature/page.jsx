"use client"

import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import ClicksignWidget from '@/app/utils/clicksign/ClickSignWidget';
import axios from 'axios';
import { useEffect } from 'react';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
import FormBanner from '../banners/form-banner/FormBanner';

const accessNotValid = (user) => {
    return !user?.address
}

export default function ContractSignature() {

    const user = useStoreUser().user
    const storeClicksign = useStoreClickSign()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${user.uuid}`);
                if (requestSuccessful(response.status)) {
                    storeClicksign.updateClickSign(response?.data?.instalacao?.clicksign_reg);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [])


    return (
        <>
            <AlmostThereBanner userData={user} />
            <ClicksignWidget />
            <FormBanner />
        </>
    );
}
{/* <ContractForm userData={userData} isCompany={userData.company ? true : false} /> */ }
"use client"

import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import ClicksignWidget from '@/app/utils/clicksign/ClickSignWidget';
import axios from 'axios';
import { useEffect } from 'react';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
import FormBanner from '../banners/form-banner/FormBanner';

const accessNotValid = (user) => {
    return !user?.address
}

export default function ContractSignature() {

    const store = useStoreUser()
    const user = store.user
    const clicksign = useStoreClickSign()

    // if (accessNotValid(userData)) {
    //     notFound()
    // }

    // const getClicksignData = useFetchClickSignData();

    // useEffect(() => {
    //     getClicksignData();
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            const uuid = store.uuid;

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                if (requestSuccessful(response.status)) {
                    clicksign.updateClickSign(response?.data?.instalacao?.clicksign_reg);
                }
            } catch (error) {
                console.error(error);
            }
        };

        return fetchData;
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
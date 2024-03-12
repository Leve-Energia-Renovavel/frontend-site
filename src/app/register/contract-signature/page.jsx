/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import ClicksignWidget from '@/app/utils/clicksign/ClickSignWidget';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
import FormBanner from '../banners/form-banner/FormBanner';

export default function ContractSignature() {

    const user = useStoreUser().user
    const storeClicksign = useStoreClickSign()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${user.uuid}`);
                if (requestSuccessful(response.status)) {
                    console.log("contract signature response ===>>", response)
                    const clicksignReg = response.data.instalacao.document_key
                    Cookies.set("clickSignKey", response.data.instalacao.document_key)

                    storeClicksign.updateClicksignKey(clicksignReg);
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
            {/* {storeClicksign.data.key != '' ? <ClicksignWidget />
                : <Typography>Carregando dados...</Typography>
            } */}
            <ClicksignWidget />
            <FormBanner />
        </>
    );
}
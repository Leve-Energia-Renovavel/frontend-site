/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import ClicksignWidget from '@/app/utils/clicksign/ClickSignWidget';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import AlmostThereBanner from '../banners/banner-almost-there/AlmostThereBanner';
import FormBannerContract from '../banners/form-banner-contract/FormBannerContract';

export default function ContractSignature() {

    const store = useStoreUser()
    const storedUser = useStoreUser().user
    const user = storedUser ? storedUser : JSON.parse(Cookies.get('leveUser'))

    const storeClicksign = useStoreClickSign()

    const uuid = Cookies.get('leveUUID') ? Cookies.get('leveUUID') : user.uuid

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
                if (requestSuccessful(response.status)) {

                    const consumidor = response?.data?.instalacao?.consumidor
                    const cep = consumidor?.cep

                    const updatedUser = {
                        name: consumidor?.nome + " " + consumidor?.sobrenome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        cep: cep,

                    }
                    
                    store.updateUser(updatedUser);
                    Cookies.set('leveUser', JSON.stringify(updatedUser))

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
            <ClicksignWidget />
            <FormBannerContract />
        </>
    );
}
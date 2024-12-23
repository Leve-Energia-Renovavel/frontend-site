/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import SignupAddressForm from '../signup/forms/address/SignupAddressForm';

export default function RegisterAddress() {

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid") || storeUser?.user?.uuid || Cookies.get(COOKIES_FOR.UUID)

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data for address ===>>", uuid)
            console.log("storeUser ===>>", storeUser.user)
            console.log("storeAddress ===>>", storeAddress.address)
            await getLeadData(uuid, storeUser, storeAddress)
        };
        fetchData();
    }, []);


    return (
        <SignupAddressForm />
    )
}
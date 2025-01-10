/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SignupAddressForm from '../../signup/forms/address/SignupAddressForm';
import LoadingSignupAddressForm from '../../signup/forms/address/loading/LoadingSignupAddressForm';

export default function RegisterAddress() {

    const [isLoading, setIsLoading] = useState(true)

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid") || storeUser?.user?.uuid || Cookies.get(COOKIES_FOR.UUID)

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuid, storeUser, storeAddress)
            setIsLoading(false)
        };
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? <LoadingSignupAddressForm /> : <SignupAddressForm />}
        </>
    )
}
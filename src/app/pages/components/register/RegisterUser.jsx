/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SignupUserForm = dynamic(() => import('../signup/forms/user/SignupUserForm'), { ssr: false });

export default function RegisterUser() {

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid") || storeUser?.user?.uuid || Cookies.get(COOKIES_FOR.UUID)

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuid, storeUser, storeAddress)
        };
        fetchData();
    }, []);

    return (
        <SignupUserForm />
    )
}
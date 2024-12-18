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
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const { uuid } = store?.user || {}
    var uuidParam = search.get("uuid")

    if (!uuidParam || uuidParam === 'undefined') {
        uuidParam = uuid
    }

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuidParam, store, storeAddress)
        };
        fetchData();
    }, []);


    return (
        <SignupUserForm />
    )
}
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { COOKIES_FOR } from '@/app/pages/enums/globalEnums';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SignupMainForm from '../../signup/forms/SignupMainForm';
import LoadingSignupUserForm from '../../signup/forms/user/loading/LoadingSignupUserForm';

const SignupUserForm = dynamic(() => import('../../signup/forms/user/SignupUserForm'), { ssr: false });

export default function RegisterUser() {

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
            {isLoading ? <LoadingSignupUserForm /> : <SignupMainForm />}
        </>
    )
}
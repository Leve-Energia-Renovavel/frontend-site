/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import dynamic from 'next/dynamic';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { SignUpContainer as Container } from './styles';

const SignupForm = dynamic(() => import('./forms/SignupForm'), { ssr: false });
const NewResultEconomy = dynamic(() => import('../new-result-economy/NewResultEconomy'), { ssr: false });

export default function SignupMain() {

    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid")

    if (!uuid || uuid == "undefined") {
        notFound()
    }

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuid, store, storeAddress)
        };

        fetchData();
    }, []);


    return (
        <>
            <Container className='container'>
                <NewResultEconomy />
                <SignupForm />
            </Container>
        </>
    )
}
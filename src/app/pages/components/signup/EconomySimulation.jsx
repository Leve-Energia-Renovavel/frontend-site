/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Messages from '../messages/Messages';
import LoadingResultEconomy from '../result-economy/loading/LoadingResultEconomy';
import { SignUpContainer as Container } from './styles';

const ResultEconomy = dynamic(() => import('../result-economy/ResultEconomy'), { ssr: false });

export default function EconomySimulation() {

    const [isLoading, setIsLoading] = useState(true)

    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const { uuid } = store?.user || {}
    var uuidParam = search.get("uuid")

    if (!uuidParam) {
        uuidParam = uuid
    }

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuidParam, store, storeAddress)
            setIsLoading(false)
        };
        fetchData();
    }, []);

    return (
        <>
            <Container className='signupMainContainer'>
                {isLoading ? <LoadingResultEconomy /> : <ResultEconomy />}
            </Container>

            <Messages />
        </>
    )
}
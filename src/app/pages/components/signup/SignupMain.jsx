/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import dynamic from 'next/dynamic';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingResultEconomy from '../new-result-economy/loading/LoadingResultEconomy';
import { SignUpContainer as Container } from './styles';
import Messages from '../messages/Messages';

const NewResultEconomy = dynamic(() => import('../new-result-economy/NewResultEconomy'), { ssr: false });

export default function SignupMain() {

    const [isLoading, setIsLoading] = useState(false)

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

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
            setIsLoading(true)
        };
        fetchData();
    }, []);

    return (
        <>
            <Container className='signupMainContainer'>
                {isLoading ? <NewResultEconomy setErrorMessage={setErrorMessage} setNotifications={setNotifications} /> : <LoadingResultEconomy />}
            </Container>

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    )
}
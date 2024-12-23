/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { getLeadData } from '@/app/service/lead-service/LeadService';
import { clearCookiesAndStorageData } from '@/app/utils/browser/BrowserUtils';
import Cookies from 'js-cookie';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { COOKIES_FOR } from '../../enums/globalEnums';
import Messages from '../messages/Messages';
import LoadingResultEconomy from '../result-economy/loading/LoadingResultEconomy';
import ResultEconomy from '../result-economy/ResultEconomy';
import { SignUpContainer as Container } from './styles';

export default function EconomySimulation() {

    const [isLoading, setIsLoading] = useState(true)

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid") || storeUser?.user?.uuid || Cookies.get(COOKIES_FOR.UUID)

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data for address ===>>", uuid)
            console.log("storeUser ===>>", storeUser.user)
            console.log("storeAddress ===>>", storeAddress.address)
            await clearCookiesAndStorageData()
            await getLeadData(uuid, storeUser, storeAddress)
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
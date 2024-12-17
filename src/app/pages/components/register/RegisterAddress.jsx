/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { notFound, useSearchParams } from 'next/navigation';
import SignupAddressForm from '../signup/forms/address/SignupAddressForm';

export default function RegisterAddress() {

    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid")

    if (!uuid || uuid == "undefined") {
        notFound()
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await getLeadData(uuid, store, storeAddress)
    //     };
    //     fetchData();
    // }, []);


    return (
        <SignupAddressForm />
    )
}
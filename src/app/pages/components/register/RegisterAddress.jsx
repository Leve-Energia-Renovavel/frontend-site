/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from '@/app/hooks/stores/useStore';
import { useSearchParams } from 'next/navigation';
import SignupAddressForm from '../signup/forms/address/SignupAddressForm';

export default function RegisterAddress() {

    const search = useSearchParams()
    const store = useStoreUser()
    const storeAddress = useStoreAddress()

    const { uuid } = store?.user || {}
    var uuidParam = search.get("uuid")

    if (!uuidParam || uuidParam === 'undefined') {
        uuidParam = uuid
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await getLeadData(uuidParam, store, storeAddress)
    //     };
    //     fetchData();
    // }, []);


    return (
        <SignupAddressForm />
    )
}
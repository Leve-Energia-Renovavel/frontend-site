/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from "@/app/hooks/stores/useStore";
import { COOKIES_FOR } from "@/app/pages/enums/globalEnums";
import { getLeadData } from "@/app/service/lead-service/LeadService";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SignupCompanyForm from "../../signup/forms/company/SignupCompanyForm";
import LoadingSignupUserForm from "../../signup/forms/user/loading/LoadingSignupUserForm";
import SignupUserForm from "../../signup/forms/user/SignupUserForm";

export default function RegisterUser() {
    const [isLoading, setIsLoading] = useState(true);

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()

    const uuid = search.get("uuid") || storeUser?.user?.uuid || Cookies.get(COOKIES_FOR.UUID)

    const { isCompany } = storeUser?.user || {}

    useEffect(() => {
        const fetchData = async () => {
            await getLeadData(uuid, storeUser, storeAddress)
            setIsLoading(false)
        }
        fetchData()
    }, [])


    if (isLoading) {
        return <LoadingSignupUserForm />
    }

    return (
        <>
            {isCompany ? <SignupCompanyForm /> : <SignupUserForm />}
        </>
    )
}

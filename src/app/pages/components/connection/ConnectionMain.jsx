"use client"

import { useStoreUser } from '@/app/hooks/useStore'
import Cookies from 'js-cookie'
import { notFound, useRouter, useSearchParams } from 'next/navigation'

export default function ConnectionMain() {

    const router = useRouter()
    const search = useSearchParams()

    const storeUser = useStoreUser()

    const token = search.get("token")

    if (token) {
        Cookies.set('accessToken', token)
        storeUser.updateUser({ hasConnectedByBackoffice: true });
        router.push('/dashboard')
    } else {
        notFound()
    }

    return (
        <>
        </>
    )
}

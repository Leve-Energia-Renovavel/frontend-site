"use client"
import Cookies from 'js-cookie'
import { useRouter, useSearchParams } from 'next/navigation'
export default function ConnectionMain() {
    const router = useRouter()
    const search = useSearchParams()
    const token = search.get("token")
    if (token) {
        Cookies.set('accessToken', token)
        router.push('/dashboard')
    }
    return (
        <>
        </>
    )
}
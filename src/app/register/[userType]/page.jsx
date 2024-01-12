"use client"

import { useRouter } from "next/navigation"

export default function RegisterType({ params }) {

    const router = useRouter()
    const myState = history.state;//store the state variable outside the component

    const isCompany = params.userType == 'cnpj'

    return (
        <div style={{ paddingTop: '20vh' }}>
            <h1>Register</h1>
            <h1>{params.userType}</h1>
            <h1>{router.query}</h1>
            <h1>{JSON.stringify(myState)}</h1>
            {isCompany && (
                <>
                    <h1>is company too</h1>
                </>)}
        </div>
    )
}
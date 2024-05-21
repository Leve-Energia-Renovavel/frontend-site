"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { PartnershipMainContainer as Container } from "./styles"
import SimulationForm from "../form/SimulationForm"
import { useState } from "react";

export default function PartnershipMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const search = useSearchParams()
    const pathname = usePathname()

    console.log("pathname ===>>>", pathname)


    return (
        <Container>
            <div>PartnershipMain {pathname}</div>
            <SimulationForm setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </Container>
    )
}
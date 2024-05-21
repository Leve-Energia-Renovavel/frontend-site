"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import PartnerForm from "../form/PartnerForm";
import { PartnershipMainContainer as Container } from "./styles";

export default function PartnershipMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const search = useSearchParams()
    const pathname = usePathname()

    // console.log("pathname ===>>>", pathname)

    const clearPartnerName = (str) => {
        return str.replace(/\/|lp/g, '');
    };


    return (
        <Container>
            <PartnerForm partner={clearPartnerName(pathname)} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </Container>
    )
}
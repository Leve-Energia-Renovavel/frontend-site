"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import Messages from "../messages/Messages";
import { NewInvoicesContainer as Container } from "./styles";

const NewInvoicesHeader = dynamic(() => import("./header/NewInvoicesHeader"), { ssr: false });
const NewInvoicesTable = dynamic(() => import("./table/NewInvoicesTable"), { ssr: false });

export default function NewInvoicesMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container className="invoicesContainer">
                <NewInvoicesHeader setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
                <NewInvoicesTable />
            </Container>
            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>

    )
}


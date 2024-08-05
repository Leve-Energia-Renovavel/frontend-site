"use client"

import dynamic from "next/dynamic";
import { NewInvoicesContainer } from "./styles";
import Messages from "../messages/Messages";
import { useState } from "react";

const NewInvoicesTable = dynamic(() => import("./table/NewInvoicesTable"), { ssr: false });
const NewInvoicesHeader = dynamic(() => import("./header/NewInvoicesHeader"), { ssr: false });

export default function NewInvoicesMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <NewInvoicesContainer className="invoicesContainer">
                <NewInvoicesHeader setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
                <NewInvoicesTable />
            </NewInvoicesContainer>
            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>

    )
}


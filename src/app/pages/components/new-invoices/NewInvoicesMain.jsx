"use client"

import dynamic from "next/dynamic";
import NewInvoicesHeader from "./header/NewInvoicesHeader";
import { NewInvoicesContainer } from "./styles";

const NewInvoicesTable = dynamic(() => import("./table/NewInvoicesTable"), { ssr: false });

export default function NewInvoicesMain() {

    return (
        <NewInvoicesContainer className="invoicesContainer">
            <NewInvoicesHeader />
            <NewInvoicesTable />
        </NewInvoicesContainer>
    )
}


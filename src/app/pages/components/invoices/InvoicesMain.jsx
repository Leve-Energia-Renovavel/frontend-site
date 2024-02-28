"use client"

import { Typography } from '@mui/material';
import Timeline from '../timeline/Timeline';
import { InvoiceContainer as Container, InvoicesMainCardContainer, InvoicesMainContainer, InvoicesMainContent, InvoicesTimelineContainer, MoneyIcon, NextBillButtonContainer, NextBillDetail, NextBillTitleContainer } from './styles';
import { useState } from 'react';
import FormButton from '../utils/buttons/FormButton';

export default function InvoicesMain() {

    const [installation, setInstallation] = useState({
        address: "Alameda José de Oliveira Guimarães 563 casa 23.",
        city: "Uberlândia",
        state: "MG",
        zipCode: "38412324",
        amount: 80.75,
        dueDate: "05/02/2024",
        status: "pendente",
    });

    const hasOpenInvoices = true

    function handlePayBill() {
        console.log("InvoicesMain handlePayBill")
    }

    return (
        <Container>
            <InvoicesMainContainer>
                <Typography variant='h1'>Suas Faturas</Typography>
                <InvoicesMainCardContainer>
                    {hasOpenInvoices ? (
                        <>
                            <NextBillTitleContainer>
                            </NextBillTitleContainer>
                            <NextBillDetail>
                                <Typography className="referenceMonth">01/2024</Typography>
                                <Typography className="billValue">R$ {installation?.amount.toString().replace('.', ',')}</Typography>
                            </NextBillDetail>
                            <NextBillDetail>
                                <Typography className="title">Vencimento</Typography>
                                <Typography className="content">{installation?.dueDate}</Typography>
                            </NextBillDetail>
                            <NextBillDetail status={installation?.status}>
                                <Typography className="title">Status</Typography>
                                <Typography className="paymentStatus">{installation?.status}</Typography>
                            </NextBillDetail>
                            <NextBillButtonContainer>
                                <FormButton text="Pagar" onClick={() => handlePayBill()} />
                            </NextBillButtonContainer>
                        </>
                    ) :
                        <Typography variant='h2'>Nao ha faturas em aberto</Typography>}
                </InvoicesMainCardContainer>
            </InvoicesMainContainer>
            <div>
                <Typography variant='h1'>Faturas Anteriores</Typography>
                <InvoicesTimelineContainer>
                    <Timeline />
                </InvoicesTimelineContainer>
            </div>
        </Container >

    );
}

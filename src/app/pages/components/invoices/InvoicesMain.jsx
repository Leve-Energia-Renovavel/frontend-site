/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreNextBills, useStoreUser } from '@/app/hooks/stores/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { clearStorageData } from '@/app/utils/browser/BrowserUtils';
import { billHasToBePaid, billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { Alert, Breadcrumbs, Button, FormControl, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { background } from '../../globalStyles';
import Messages from '../messages/Messages';
import FormButton from '../utils/buttons/FormButton';
import { InvoiceContainer as Container, InvoicesMainCardChangeDate, InvoicesMainCardContainer, InvoicesMainContainer, InvoicesTimelineContainer, NextBillButtonContainer, NextBillDetail, NextBillTitleContainer, PreviousInvoicesContainer, WarningBox } from './styles';

const Timeline = dynamic(() => import('../timeline/Timeline'), { ssr: false });

export default function InvoicesMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const dateRef = useRef()

    const store = useStoreUser()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    const billingsHistory = useStoreBillingHistory().billings


    const user = JSON.parse(localStorage.getItem('user')) || store?.user
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || billingsHistory

    const { invoiceDate } = user?.user ?? (store?.user || {})

    const nextBill = billings[0]
    const nextBillExists = JSON.parse(localStorage.getItem('exists') || false);

    const handlePayBill = (url) => {
        window.open(url, '_blank');
    }

    const isBillPayed = (status) => {
        return status == billingStatusOptions["paid"]
    }

    const handleChangeInvoiceDate = async () => {
        const newExpireDate = dateRef.current.value
        if (newExpireDate == 5 || newExpireDate == 15 || newExpireDate == 25) {
            const headers = {
                "Authorization": `Bearer ${Cookies.get('accessToken')}`
            };
            const data = {
                days: dateRef.current.value
            }
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/vencimento-fatura`, data, { headers })
            if (requestSuccessful(response?.status)) {
                setNotifications(["Data de vencimento alterada com sucesso!"])
            } else {
                setErrorMessage(["Erro ao alterar a data de vencimento. Por favor, tente novamente mais tarde"])
            }
        } else {
            setErrorMessage(["Escolha uma nova data de vencimento"])

        }
    }

    useEffect(() => {
        clearStorageData()
        const fetchInvoicesData = async () => {
            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });

                if (requestSuccessful(response?.status)) {
                    const ciclosConsumo = response?.data?.ciclosConsumo

                    ciclosConsumo?.forEach(bill => {
                        if (bill?.send === 1) {
                            const newBilling = {
                                uuid: bill.uuid,
                                installationId: bill.cliente_instalacao_id,

                                energyConsumed: bill.consumo,
                                energyInjected: bill.energia_injetada,
                                availability: bill.disponibilidade,

                                value: bill.valor_fatura,
                                billDate: bill.data_fatura,
                                dueDate: bill.vencimento_fatura,
                                status: bill.pagamento_status,
                                urlBill: bill.url_fatura,
                                urlPayment: bill.url_pagamento,
                            }
                            storeBilling.addBilling(newBilling)

                            if (billHasToBePaid[newBilling.status]) {
                                storeNextBills.updateExists(true)
                                storeNextBills.addNextBill(newBilling)
                            }
                        }
                    })

                } else {
                    console.error("Failed to fetch dashboard data");
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchInvoicesData();

    }, []);

    return (
        <>
            <Container className='container'>
                <InvoicesMainContainer className='invoicesMainContainer'>
                    <Typography variant='h1' className='yourInvoices'>Faturas</Typography>
                    <Breadcrumbs aria-label="breadcrumb" separator={">"} className='breadcrumbs'>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/dashboard/"
                        >
                            Painel
                        </Link>
                        <Typography style={{ fontWeight: 'bold', color: background.orange }}>Faturas</Typography>
                    </Breadcrumbs>
                    <InvoicesMainCardContainer>
                        {nextBillExists ? (
                            <>
                                <NextBillTitleContainer>
                                </NextBillTitleContainer>
                                <NextBillDetail>
                                    <Typography className="referenceMonth">{nextBill?.billDate}</Typography>
                                    <Typography className="billValue">R$ {nextBill?.value.toString().replace('.', ',')}</Typography>
                                </NextBillDetail>
                                <NextBillDetail>
                                    <Typography className="title">Vencimento</Typography>
                                    <Typography className="content">{nextBill?.dueDate}</Typography>
                                </NextBillDetail>
                                <NextBillDetail status={nextBill?.status}>
                                    <Typography className="title">Status</Typography>
                                    <Typography className="paymentStatus">{billingStatusOptions[nextBill?.status]?.toUpperCase()}</Typography>
                                </NextBillDetail>
                                <NextBillButtonContainer>
                                    {isBillPayed(billingStatusOptions[nextBill?.status]) ? <></> :
                                        <FormButton text="Pagar" onClick={() => handlePayBill(nextBill.urlBill)} />}
                                </NextBillButtonContainer>
                            </>
                        ) :
                            <Typography variant='subtitle1' className='noOpenInvoices'>Não há faturas em aberto</Typography>}
                    </InvoicesMainCardContainer>

                    {/* <WarningBox severity="warning"><span >Atenção:</span> Caso seu método de pagamento seja , a data de vencimento não muda a data de pagamento, <span >que é sempre dia 15.</span> </WarningBox> */}
                    <WarningBox severity="warning"><span className='highlighted'>Atenção:</span> Caso você opte pelo método de pagamento via <span className='highlighted'>cartão de crédito</span>, a sua fatura Leve será cobrada próxima ao <span className='underlined'>dia 15 do mês referente</span>.</WarningBox>

                    <InvoicesMainCardChangeDate>
                        <Typography variant='subtitle1' className='changeInvoiceDate'>Alterar data do vencimento</Typography>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <FormControl className='invoiceDateField'>
                                <InputLabel id="change-invoice-date-input-label"
                                >Data do Vencimento</InputLabel>
                                <Select
                                    labelId="change-invoice-date-select-label"
                                    id="demo-simple-select"
                                    label="Data do Vencimento"
                                    defaultValue={invoiceDate || 5}
                                    inputRef={dateRef}>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                </Select>
                            </FormControl>
                            <Button className='buttonChangeDate' onClick={() => handleChangeInvoiceDate()}>
                                <span>Mudar data de Fatura</span>
                            </Button>
                        </div>
                    </InvoicesMainCardChangeDate>
                </InvoicesMainContainer>
                <PreviousInvoicesContainer>
                    <Typography variant='h1' className='previousInvoices'>Faturas Anteriores</Typography>
                    <InvoicesTimelineContainer>
                        <Timeline />
                    </InvoicesTimelineContainer>
                </PreviousInvoicesContainer>
            </Container >
            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>
    );
}

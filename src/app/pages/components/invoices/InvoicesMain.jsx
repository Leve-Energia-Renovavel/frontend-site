"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { Breadcrumbs, Button, FormControl, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { newBackground } from '../../styles';
import Messages from '../messages/Messages';
import FormButton from '../utils/buttons/FormButton';
import { InvoiceContainer as Container, InvoicesMainCardChangeDate, InvoicesMainCardContainer, InvoicesMainContainer, InvoicesTimelineContainer, NextBillButtonContainer, NextBillDetail, NextBillTitleContainer, PreviousInvoicesContainer } from './styles';

const Timeline = dynamic(() => import('../timeline/Timeline'), { ssr: false });

export default function InvoicesMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const dateRef = useRef()
    const storeBilling = useStoreBillingHistory().billings
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || storeBilling

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
                        <Typography style={{ fontWeight: 'bold', color: newBackground.orange }}>Faturas</Typography>
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
                    <InvoicesMainCardChangeDate>
                        <Typography variant='subtitle1' className='changeInvoiceDate'>Alterar data do vencimento</Typography>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <FormControl className='invoiceDateField'>
                                <InputLabel id="change-invoice-date-input-label">Data do Vencimento</InputLabel>
                                <Select
                                    labelId="change-invoice-date-select-label"
                                    id="demo-simple-select"
                                    label="Data do Vencimento"
                                    defaultValue={5}
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

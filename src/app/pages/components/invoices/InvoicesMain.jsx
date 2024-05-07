"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { background, newBackground } from '../../styles';
import FormButton from '../utils/buttons/FormButton';
import { InvoiceContainer as Container, InvoicesMainCardContainer, InvoicesMainContainer, InvoicesTimelineContainer, NextBillButtonContainer, NextBillDetail, NextBillTitleContainer, PreviousInvoicesContainer } from './styles';

const Timeline = dynamic(() => import('../timeline/Timeline'), { ssr: false });


export default function InvoicesMain() {

    const storeBilling = useStoreBillingHistory().billings
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || storeBilling

    const nextBill = billings[0]
    const nextBillExists = JSON.parse(localStorage.getItem('exists') || false);


    const handlePayBill = (url) => {
        window.open(url, '_blank');
    }

    function getReferenceMonth(dueDate) {
        const dateParts = dueDate.split('/');
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10);
        const year = parseInt(dateParts[2], 10);
        const parsedDate = new Date(year, month - 1, day);

        parsedDate.setMonth(parsedDate.getMonth() - 1);

        const monthBefore = `${parsedDate.getMonth() + 1 < 10 ? '0' : ''}${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`;

        return monthBefore;
    }

    return (
        <Container>
            <InvoicesMainContainer>
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
                                <Typography className="referenceMonth">{getReferenceMonth(nextBill.dueDate)}</Typography>
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
                                <FormButton text="Pagar" onClick={() => handlePayBill(nextBill.urlBill)} />
                            </NextBillButtonContainer>
                        </>
                    ) :
                        <Typography variant='subtitle1' className='noOpenInvoices'>Não há faturas em aberto</Typography>}
                </InvoicesMainCardContainer>
            </InvoicesMainContainer>
            <PreviousInvoicesContainer>
                <Typography variant='h1' className='previousInvoices'>Faturas Anteriores</Typography>
                <InvoicesTimelineContainer>
                    <Timeline />
                </InvoicesTimelineContainer>
            </PreviousInvoicesContainer>
        </Container >

    );
}

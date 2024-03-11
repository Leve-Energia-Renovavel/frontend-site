"use client"

import { useStoreBillingHistory, useStoreNextBills } from '@/app/hooks/useStore';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { Typography } from '@mui/material';
import Timeline from '../timeline/Timeline';
import FormButton from '../utils/buttons/FormButton';
import { InvoiceContainer as Container, InvoicesMainCardContainer, InvoicesMainContainer, InvoicesTimelineContainer, NextBillButtonContainer, NextBillDetail, NextBillTitleContainer } from './styles';

export default function InvoicesMain() {

    const billings = useStoreBillingHistory().billings
    const nextBill = billings[0]

    const storeNextBill = useStoreNextBills()

    const handlePayBill = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Container>
            <InvoicesMainContainer>
                <Typography variant='h1'>Suas Faturas</Typography>
                <InvoicesMainCardContainer>
                    {storeNextBill.exists ? (
                        <>
                            <NextBillTitleContainer>
                            </NextBillTitleContainer>
                            <NextBillDetail>
                                <Typography className="referenceMonth">01/2024</Typography>
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

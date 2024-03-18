"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Typography } from '@mui/material';
import TimelineButton from '../utils/buttons/TimelineButton';
import { DueDate, DueDateContainer, TimelineConnectorStyled, TimelineContentButtonContainer, TimelineContentContainer, TimelineContentStyled, TimelineDiv, TimelineDotStyled, TimelineDueDateDiv, TimelineItemStyled, TimelineOppositeContentStyled, TimelineSeparatorStyled, TimelineStyled } from './styles';

export default function TimelineMain() {

    const storeBilling = useStoreBillingHistory().billings
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || storeBilling

    const checkInvoice = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <TimelineStyled position="right">
                {billings.slice(1).map((invoice) => {
                    return (
                        <TimelineItemStyled key={invoice.id}>
                            <TimelineOppositeContentStyled>
                                <DueDateContainer>
                                    <DueDate className='dueDate'>{invoice.dueDate}</DueDate>
                                </DueDateContainer>
                            </TimelineOppositeContentStyled>
                            <TimelineSeparatorStyled>
                                <TimelineDotStyled status={invoice.status}>
                                    {invoice.status == "paid" ? <PriceCheckIcon /> : <LocalAtmIcon />}
                                </TimelineDotStyled>
                                <TimelineConnectorStyled />
                            </TimelineSeparatorStyled>
                            <TimelineContentStyled>
                                <TimelineContentContainer>
                                    <Typography className='invoiceDueDate'>{invoice.dueDate}</Typography>
                                    <Typography className='invoiceValue'>R$ {invoice.value}</Typography>
                                    <TimelineDiv status={invoice.status}>
                                        <TimelineDueDateDiv>
                                            <Typography className='colorGrey'>Vencimento: </Typography>
                                            <Typography className='invoiceDueDate'>{invoice.dueDate}</Typography>
                                        </TimelineDueDateDiv>
                                        <div>
                                            <Typography className='colorGrey'>Status: </Typography>
                                            <Typography className='billingStatus'>{billingStatusOptions[invoice.status]?.toUpperCase()}</Typography>
                                        </div>
                                    </TimelineDiv>

                                    <TimelineContentButtonContainer>
                                        <TimelineButton text="Ver Fatura" onClick={() => checkInvoice(invoice.urlBill)} />
                                        {/* <NewInstallationButton text="Ver Fatura" onClick={() => checkInvoice(invoice.urlBill)} /> */}
                                    </TimelineContentButtonContainer>
                                </TimelineContentContainer>
                            </TimelineContentStyled>
                        </TimelineItemStyled>
                    )
                })}
            </TimelineStyled>
        </div>

    );
}
"use client"

import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { statusHelper } from '@/app/utils/helper/StyleHelpers';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';
import { background, statusColors } from '../../styles';
import NewInstallationButton from '../utils/buttons/NewInstallationButton';
import { TimelineItemStyled, TimelineOppositeContentStyled, TimelineStyled, TimelineContentButtonContainer, TimelineContentContainer, TimelineSeparatorStyled, TimelineConnectorStyled, TimelineDotStyled, TimelineContentStyled, TimelineDiv, TimelineDueDateDiv, DueDateContainer, DueDate } from './styles';
import TimelineButton from '../utils/buttons/TimelineButton';

export default function TimelineMain() {

    const storeBilling = useStoreBillingHistory()
    const billings = useStoreBillingHistory().billings

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
                                        <TimelineButton text="Ver Fatura" onClick={() => checkInvoice(invoice.urlBill)}/>
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
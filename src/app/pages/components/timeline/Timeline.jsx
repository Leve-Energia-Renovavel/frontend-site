"use client"

import { translationHelper } from '@/app/utils/helper/TranslationHelpers';
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
import { useState } from 'react';
import { background, statusColors } from '../../styles';
import NewInstallationButton from '../utils/buttons/NewInstallationButton';
import { TimelineContentButtonContainer, TimelineContentContainer } from './styles';
import { useStoreBillingHistory } from '@/app/hooks/useStore';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';

export default function TimelineMain() {

    const storeBilling = useStoreBillingHistory()
    const billings = useStoreBillingHistory().billings

    // const newBilling = {
    //     uuid: bill.uuid,
    //     energyConsumed: bill.consumo,
    //     energyInjected: bill.energia_injetada,
    //     availability: bill.disponibilidade,
    //     value: bill.valor_fatura,
    //     dueDate: bill.vencimento_fatura,
    //     installationId: bill.cliente_instalacao_id,
    //     status: bill.pagamento_status
    // }

    function checkInvoice(invoice) {
        console.log("TimelineMain checkInvoice ===>>", invoice)
    }

    return (
        <div>
            <Timeline position="right" sx={{ color: background.blueLeve, maxWidth: "10vw" }}>
                {billings.map((invoice) => {
                    return (
                        <TimelineItem key={invoice.id}>
                            <TimelineOppositeContent>
                                <div>
                                    <Typography sx={{ fontWeight: 500 }}>{invoice.dueDate}</Typography>
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: statusColors[invoice.status] }}>
                                    {invoice.status == "paid" ? <PriceCheckIcon /> : <LocalAtmIcon />}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <TimelineContentContainer>
                                    <Typography sx={{ fontWeight: 700, color: background.grey }}>{invoice.dueDate}</Typography>
                                    <Typography sx={{ fontWeight: 700, fontSize: '2rem' }}>R$ {invoice.value}</Typography>
                                    <div style={{ display: "flex", gap: "1rem", padding: "1rem 1rem 0 0" }}>
                                        <div style={{ marginRight: "2rem" }}>
                                            <Typography sx={{ color: background.grey }}>Vencimento: </Typography>
                                            <Typography sx={{ color: background.grey, fontWeight: 700 }}>{invoice.dueDate}</Typography>
                                        </div>
                                        <div>
                                            <Typography sx={{ color: background.grey }}>Status: </Typography>
                                            <Typography sx={{ color: statusColors[invoice.status], fontWeight: 700 }}>{billingStatusOptions[invoice.status]?.toUpperCase()}</Typography>
                                        </div>
                                    </div>

                                    <TimelineContentButtonContainer>
                                        <NewInstallationButton text="Ver Fatura" onClick={() => checkInvoice(invoice)} />
                                    </TimelineContentButtonContainer>
                                </TimelineContentContainer>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>

    );
}
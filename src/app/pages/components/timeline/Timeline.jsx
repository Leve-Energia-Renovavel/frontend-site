"use client"

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';
import { background, statusColors } from '../../styles';
import { useState } from 'react';
import { statusHelper } from '@/app/utils/helper/StyleHelpers';
import { translationHelper } from '@/app/utils/helper/TranslationHelpers';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export default function TimelineMain() {

    const [invoices, setInvoices] = useState([
        {
            id: "1",
            referenceMonth: "02/2024",
            value: "80,75",
            status: "pending"
        },
        {
            id: "2",
            referenceMonth: "12/2023",
            value: "80,75",
            status: "paid"
        },
        {
            id: "3",
            referenceMonth: "11/2023",
            value: "80,75",
            status: "paid"
        },
        {
            id: "4",
            referenceMonth: "10/2023",
            value: "80,75",
            status: "paid"
        },
        {
            id: "5",
            referenceMonth: "09/2023",
            value: "80,75",
            status: "paid"
        },
        {
            id: "6",
            referenceMonth: "08/2023",
            value: "80,75",
            status: "paid"
        },
    ])
    return (
        <Timeline position="right" sx={{ color: background.blueLeve }}>
            {invoices.map((invoice) => {
                return (
                    <TimelineItem key={invoice.id}>
                        <TimelineOppositeContent>
                            <div>
                                <Typography sx={{ fontWeight: 500 }}>{invoice.referenceMonth}</Typography>
                            </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot sx={{ backgroundColor: statusColors[invoice.status] }}>
                                {invoice.status == "paid" ? <PriceCheckIcon /> : <LocalAtmIcon />}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontWeight: 700 }}>R$ {invoice.value}</Typography>
                            <Typography sx={{ color: statusColors[invoice.status], fontWeight: 700 }}>{translationHelper[invoice.status]}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}
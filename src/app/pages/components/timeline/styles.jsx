import { statusHelper } from "@/app/utils/helper/StyleHelpers";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";
import { background, statusColors } from "../../globalStyles";

const fadeInUp = keyframes`
  from {
      opacity: 0;
      transform: translateY(20px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0);
    }
    `;
export const TimelineContentContainer = styled.div`
    border-radius:4px;
    padding: 2rem;
    width: 30vw;
    max-width: 40vw;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.3);
    
    animation: ${fadeInUp} 0.5s ease-out;
    
    margin-left: 4rem;
    margin-bottom: 1rem;

    .invoiceDueDate {
        font-weight: 700;
        color: ${background.grey}
    }
    .invoiceValue {
        font-weight: 700;
        font-size: 2rem;
    }

    .colorGrey {
        color: ${background.grey};
    }
    
    @media (max-width: 1300px) {
        width: 30vw;
        max-width: 30vw;
        margin-left: 2rem;

    }
    @media (max-width: 900px) {
        width: 100%;
        max-width: 100vw;
    }
    @media (max-width: 600px) {
        width: 100%;
        max-width: 100vw;
    }
    @media (max-width: 500px) {
        margin-left: 1rem;
        width: 100%;
        max-width: 70vw;
    }
    @media (max-width: 400px) {
        margin-left: 0rem;
        max-width: 70vw;
    }
    `
export const TimelineContentButtonContainer = styled.div`
    padding: 1rem 1rem 1rem 0;
    
    @media (max-width: 600px) {
        padding: 2rem 1rem 1rem 0;
    }
`

export const TimelineStyled = styled(Timeline)`
    color: ${background.orange}; 
    max-width: 20vw;
`
export const TimelineItemStyled = styled(TimelineItem)`
    color: ${background.orange}; 
    max-width: 20vw;
`
export const TimelineOppositeContentStyled = styled(TimelineOppositeContent)`
`
export const TimelineSeparatorStyled = styled(TimelineSeparator)`

    @media (max-width: 1300px) {
        margin-left: -3rem;
    }
    @media (max-width: 600px) {
        margin-left: -90px;
    }
`

export const TimelineDotStyled = styled(TimelineDot)`
    background-color: ${props => props.status ? statusColors[props.status] : background.mediumGrey};
`
export const TimelineConnectorStyled = styled(TimelineConnector)`
`
export const TimelineContentStyled = styled(TimelineContent)`
`

export const TimelineDiv = styled.div`
    display: flex;
    gap: 1rem; 
    padding: 1rem 1rem 0 0;

    .billingStatus {
        color:  ${props => props.status ? statusHelper[props.status] : background.mediumGrey}; 
        font-weight: 700;

        @media (max-width: 600px) {
            font-size: .8rem;
            white-space: nowrap;
        }
    }
`
export const DueDateContainer = styled.div`

    .dueDate {
        font-weight: 500;
        @media (max-width: 1800px) {
            display: none;
        }
    }
`
export const TimelineDueDateDiv = styled.div`
    margin-right: 2rem; 
`
export const DueDate = styled(Typography)`
    @media (max-width: 600px) {
        display: none;
    }
`



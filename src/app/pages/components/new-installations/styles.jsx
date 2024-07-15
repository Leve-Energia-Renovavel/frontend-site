import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const NewInstallationsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
    `
export const ConsumptionHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    
    border-radius: 10px;
    padding: 1rem;
    background-color: ${newBackground.white};
`
export const ConsumptionHistoryTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


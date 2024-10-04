import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const NewHomeMainFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    background-color: ${newBackground.grey};

    padding: 153px 86px;

    gap: 105px;
    
    max-width: 1920px;
    
    @media (max-width: 600px) {
    }
`
export const NewHomeMainFormContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};

    gap: 150px;


    .leveHomeMainFormContentTitle {
        font-family: "Graphie";
        font-size: 48px;
        line-height: 40px;
        font-weight: 600;
        color: ${newBackground.green};

        margin-top: 58px;
    }
    
    .leveHomeMainFormContentSubtitle {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 35px;
        font-weight: 600;
        color: ${newBackground.greyMediumHigh};

        max-width: 504px;
        
    }
`
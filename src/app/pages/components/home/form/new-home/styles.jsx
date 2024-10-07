import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const NewHomeMainFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${newBackground.grey};

    max-width: 1366px;
    margin: 0 auto;

    padding: 77px;
    
    /* gap: 105px; */
    
    max-width: 1920px;
    
    @media (max-width: 600px) {
        padding: 20px;
    }
`
export const NewHomeMainFormContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};

    gap: 20px;

    .leveHomeMainFormContentTitle {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 40px;
        font-weight: 600;
        color: ${newBackground.green};
    }
    
    span, .leveHomeMainFormContentSubtitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 27px;
        font-weight: 500;
        color: ${newBackground.greyMediumHigh};
        
        max-width: 1096px;

        margin-bottom: 50px;
    }
    
    .highlighted {
        color: ${newBackground.orange};
    }
    
    @media (max-width: 600px) {
        gap: 20px;
        
        .leveHomeMainFormContentTitle {
            font-size: 34px;
        }
        .leveHomeMainFormContentSubtitle {
            font-size: 24px;
            line-height: 35px;
            max-width: 504px;
        }
    }
`
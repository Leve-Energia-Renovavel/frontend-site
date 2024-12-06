import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const NewHomeMainFormContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    gap: 0;

    border-top: 2px solid ${background.grey};

    max-width: 1366px;

    padding: 77px;
    
    @media (max-width: 600px) {
        padding: 0px;
    }
`
export const NewHomeMainBannerImage = styled.div`
    background-image: url(${props => props.bannerImage.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 20% 50%;
    background-size: 100%;

    border-radius: 20px 0px 0px 20px;

    width: 646px;
    max-width: 646px;
    
    height: auto;
    max-height: 940px;

    .leveHomeFormBannerTitle {
        font-family: "Graphie";
        font-size: 50px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.white};

        margin-top: 58px;
        margin-left: 32px;

        max-width: 425px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`
export const NewHomeMainFormContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.grey};

    gap: 20px;

    .leveHomeMainFormContentTitle {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 40px;
        font-weight: 600;
        color: ${background.green};
    }
    
    span, .leveHomeMainFormContentSubtitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 27px;
        font-weight: 500;
        color: ${background.greyMediumHigh};
        
        max-width: 1096px;

        margin-bottom: 50px;
    }
    
    .highlighted {
        color: ${background.orange};
    }
    
    @media (max-width: 600px) {
        gap: 20px;

        text-align: center;

        .leveHomeMainFormContentTitle {
            font-size: 24px;
            line-height: 24px;

            margin-top: 20px;

            max-width: 250px;
            margin: 0 auto;
        }
        span, .leveHomeMainFormContentSubtitle {
            font-size: 18px;
            line-height: 27px;
            max-width: 350px;
            
            margin-bottom: 4px;

        }
    }
`
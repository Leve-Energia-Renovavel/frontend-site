import { background, containerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const NewHomeBenefitsContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    border-top: 2px solid ${background.grey};
    border-bottom: 2px solid ${background.grey};
    
    width: 100%;
    max-width: ${containerWidth};
    margin: 0 auto;
    
    padding: 62px 0px 110px 0px;
    
    @media (max-width: 600px) {
        padding: 0px 15px;
        background-color: ${background.grey};
    }
`
export const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${background.green};

    gap: 59px;
    
    padding: 40px 60px 30px 60px;

    margin: 0 auto;

    width: 100%;
    max-width: 833px;
    
    .icon {
        width: 96px;
        height: auto;
        color: ${background.orange};
    }

    @media (max-width: 600px) {
        flex-direction: column;
        border-radius: 5px;
        
        gap: 6px;
        padding: 20px 14px 30px 14px;

        .icon {
            width: 59px;
            height: auto;
        }
    }
`

export const BenefitsBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    width: 100%;
    max-width: 550px;

    .benefitTitle {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.white};
    }
    .benefitSubtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 28px;
        font-weight: 100;
        color: ${background.white};

        max-width: 557px;
    }

    @media (max-width: 600px) {
        align-items: center;

        gap: 0px;

        .benefitTitle {
            font-size: 24px;
            line-height: 120%;
            text-align: center;
            max-width: 211px;
        }
        
        .benefitSubtitle {
            font-size: 16px;
            line-height: 120%;
            text-align: center;

            max-width: 325px;

            margin-top: 13px;
        }
    }

`

export const BenefitsBoxButtonIcon = styled(ArrowForwardIcon)`
    width: 33px;
    height: auto;
    color: ${background.yellow};
    
    @media (max-width: 600px) {
        width: 22px;
    }
`
export const BenefitsBoxButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: fit-content;

    gap: 8px;

    border-bottom: 1px solid ${background.green};

    .benefitButtonTitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 100%;
        font-weight: 500;
        color: ${background.yellow};
    }
    
    &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${background.yellow};
        color: ${background.yellow};
    }

    @media (max-width: 600px) {
        margin-top: 20px;

        .benefitButtonTitle {
            font-size: 20px;
        }
    }
`
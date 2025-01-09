import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const ActiveDistributorMessageContainer = styled.div`
        display: flex;
        flex-direction: column;
        
        gap: 1rem;
        
        .title{
            font-family: "Graphie";
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 120%;
            color: ${background.green};
            
        }
        .subtitle{
            font-family: "Graphie";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 120%; 
            color: ${background.orange};
    
            white-space: nowrap;
            
        }
        .descriptionPrimary, .descriptionSecondary{
            font-family: "Graphie";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; 
    
            text-align:justify;
            word-spacing:-2px;
    
            color: ${background.greyMediumHigh};
            
        }
        
        .highlighted {
            font-weight: 600;
            color: ${background.greyMediumHigh};
        }
        
`

export const HighlightBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    background-color: ${background.white};
    border: 2px solid ${background.green};
    border-radius: 8px;
    
    padding: 1rem;
    gap: 1rem;

    .icon {
        width: 37px;
        height: 60px;
        color: ${background.green};
    }
`
export const HighlightBoxContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 6px;

    .title, .subtitle {
        font-family: "Graphie";
        line-height: 120%;
        width: fit-content;
    }
    .title {
        font-weight: 600;
        font-size: 18px;
        color: ${background.green};
    }
    .subtitle {
        font-weight: 400;
        font-size: 14px;
        color: ${background.greyMediumHigh};

        white-space: pre-wrap;

        max-width: 254px;
    }


`
export const DiscountBanner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin: 10px 0;
    
    border-radius: 8px;
    background-color: ${background.yellow};
    
    padding: 10px;

    .icon {
        width: 30px;
        height: 30px;
        color: ${background.green};
    }
    
    .discountText {
        font-family: "Graphie";
        font-size: 14px;
        font-weight: 600;
        line-height: 120%; 
        text-align: center;
        color: ${background.green};

        max-width: 190px;
    }
`
export const DiscountValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .discount, .discountValuePercentage {
        font-family: "Graphie";
        line-height: 120%; 
        text-align: center;
        color: ${background.green};
    }
    .discountValuePercentage {
        font-size: 30px;
        font-weight: 600;
    }
    .discount {
        font-size: 10px;
        font-weight: 600;
    }

`

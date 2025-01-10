import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const InactiveDistributorMessageContainer = styled.div`
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
        }
        .descriptionPrimary, .descriptionSecondary{
            font-family: "Graphie";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; 
    
            text-align: justify;
            word-spacing: 3px;
    
            color: ${background.greyMediumHigh};
            
        }
        
        .highlighted {
            font-weight: 600;
            color: ${background.greyMediumHigh};
        }
        
`
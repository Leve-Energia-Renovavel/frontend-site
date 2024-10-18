import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";


export const ExtractHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;

    span { 
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
    }
`
export const ExtractHeaderDate = styled.div`
    width: 160px;
    text-align: center;
    border-bottom: 2px solid ${background.green};

    span { 
        color: ${background.green};
    }
`
export const ExtractHeaderDistributor = styled.div`
    width: 280px;
    
    text-align: center;
    border-bottom: 2px solid ${background.greyDark};
    
    span { 
        color: ${background.greyDark};
    }
    `
export const ExtractHeaderLeve = styled.div`
    width: 300px;
    text-align: center;
    border-bottom: 2px solid ${background.green};
    span { 
        color: ${background.green};
    }
`
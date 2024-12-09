import { background } from "@/app/pages/globalStyles"
import styled from "@emotion/styled"

export const HistoryDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4px 0;

    height: 100%;
    max-height: 140px;
    
    margin-top: auto;
    
    @media (max-width: 600px) {
        max-height: 160px;

    }
    `
export const HistoryDetailHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .contractInitialDate{
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }
    .initialDate{
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.green};
    }
    `
export const HistoryDetailContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`
export const HistoryDetailValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .value {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 700;
        color: ${background.green};

        white-space: nowrap;
    }
    
    .valueHighlighted {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 700;
        color: ${background.green};
        background-color: ${background.yellow};
        
        white-space: nowrap;
    }
    .legend {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }
`

export const HistoryDetailFooter = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 height: 100px;

 p {
    font-family: "Graphie";
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    color: ${background.orange};
    margin-top: auto;
    
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}

@media (max-width: 340px) {
    p {
        white-space: nowrap;
        font-size: 12px;
        line-height: 14px;
    }
 }
 `
export const HistoryDetailFooterHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;

    .infoIcon {
        color: ${background.orange};
        width: 16px;
        height: auto;

        margin-top: auto;
    }
`
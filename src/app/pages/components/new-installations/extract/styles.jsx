import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const ExtractContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
`
export const Extract = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 10px;

    width: 100%;

    height: 100%;
    max-height: 91px;

    padding: 1rem;

    background-color: ${background.white};

    .dueDate {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};

        white-space: nowrap;

        text-align: center;

        width: 100px;
    }

    .dontHaveAnyBillsYet {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }
`
export const ExtractDetail = styled.div`
    display: flex;
    flex-direction: column;
    
    .measureUnit {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;

        padding: 6px 0;
        margin: 6px 2px;

        color: ${props => props.distributor ? background.greyDark : background.green};
    }
`
export const ExtractDetailValue = styled.div`
    display: flex;
    flex-direction: row;

    gap: 5px;

    span { 
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;

        text-align: center;
        width: 120px;

        background-color: ${props => props.distributor ? background.grey : background.greenLight};
        color: ${props => props.distributor ? background.greyDark : background.green};

        border-radius: 18px;

        padding: 6px 12px;

    }
`
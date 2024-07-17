import { newBackground } from "@/app/pages/styles";
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

    padding: 1rem;

    background-color: ${newBackground.white};

    .dueDate {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};
    }
`
export const ExtractDetail = styled.div`
    display: flex;
    flex-direction: column;
`
export const ExtractDetailValue = styled.div`
    display: flex;
    flex-direction: row;
`
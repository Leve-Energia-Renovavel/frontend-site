import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const NewProfileContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
`
export const NewProfileContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    gap: 10px;

    border-radius: 20px;
    padding: 1rem;

`
export const NewProfileTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 6px;

    .profileIcon {
        color: ${newBackground.orange};
    }
    .formTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};
    }
`





import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const FinalOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;

    margin-top: 1rem;
`
export const FinalOptionsButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;

    border: 1px solid ${newBackground.orange};
    border-radius: 6px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orange};

        span {
            color: ${newBackground.white};
        }

    }

`
import { background } from "@/app/pages/globalStyles";
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

    border: 1px solid ${background.orange};
    border-radius: 6px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.orange};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${background.orange};

        span {
            color: ${background.white};
        }

    }

    @media (max-width: 900px) {
        span {
            text-align: center;
        }
    }

`
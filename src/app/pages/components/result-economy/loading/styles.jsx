import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 8px;

    padding: 16px;
    
    width: 100%;
    max-width: 1366px;

    margin: 0 auto;
    margin-top: 16px;

    min-height: 400px;
    height: 100%;

    gap: 24px;

    .loadingTitle {
        width: 100%;
        font-size: 34px;
        max-width: 580px;
        margin-left: 271px;
    }

    .loadingCard {
        border-radius: 8px;

        width: 100%;
        max-width: 388px;
        max-width: 792px;

        height: 190px;
        max-height: 190px;

        margin: 0 auto;
    }

    @media (max-width: 600px) {
        margin-top: 2px;

        .loadingTitle {
            margin-left: 0px;
        }
    }
`
export const LoadingContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;

    .loadingDiv {
        border-radius: 8px;

        width: 100%;
        max-width: 388px;

        height: 190px;
        max-height: 190px;
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
`
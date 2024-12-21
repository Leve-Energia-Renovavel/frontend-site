import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 8px;

    padding: 16px;
    
    width: 100%;
    max-width: 877px;

    margin: 0 auto;
    margin-top: 16px;

    min-height: 400px;
    height: 100%;

    gap: 16px;

    .loadingTitle {
        width: 100%;
        font-size: 34px;
        max-width: 420px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;

    .loadingDiv, .secondDiv {
        border-radius: 8px;

        width: 100%;
        max-width: 388px;

        height: 190px;
        max-height: 190px;
    }
    .secondDiv {
        height: 150px;
        max-height: 150px;
    }
    .loadingCard {
        border-radius: 8px;

        width: 100%;
        max-width: 388px;

        height: 240px;
        max-height: 240px;
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
`
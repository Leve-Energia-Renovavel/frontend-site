import { background, registerContainerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 10px;

    width: 100%;
    max-width: ${registerContainerWidth};

    gap: 12px;
    padding-bottom: 2rem;

    margin: 0 auto;

    .loadingFullField, .loadingMobileFullField {
        height: 60px;
        border-radius: 10px;
        margin: 0 100px;
    }

    .loadingMobileFullField {
        display: none;
    }
    
    @media (max-width: 600px) {

        .loadingFullField, .loadingMobileFullField {
            height: 60px;
            border-radius: 10px;
            margin: 0 1rem;
        }

        .loadingMobileFullField {
            display: block;
        }
    }
`
export const LoadingSection = styled.div`   
    display: flex;
    gap: 1rem;
    margin: 0 100px;

    .loadingThirdField {
        height: 70px;
        width: 200px;
        border-radius: 10px;
    }
    .loadingThirdField:nth-of-type(1) {
        height: 70px;
        width: 240px;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`
export const LoadingFooter = styled.div`   
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 100px;
    
    .largerCircularButton {
        border-radius: 30px;
        width: 330px;
        height: 60px;
    }
    
    @media (max-width: 600px) {
        margin: 0 1rem;
        gap: 1rem;
    }
`

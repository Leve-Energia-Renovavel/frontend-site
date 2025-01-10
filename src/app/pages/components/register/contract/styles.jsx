import { background, containerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const ContractSignatureForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${background.white};

    width: 100%;
    max-width: ${containerWidth};

    padding: 0 100px;
    padding-bottom: 1rem;
    border-radius: 0px 0px 10px 10px;

    .contractSignInfo {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${background.green};
    }

    .phoneNumber {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.green};

        text-decoration: underline;
        background-color: ${background.yellow};
    }

    @media (max-width: 600px) {
        border-radius: 0;
        width: 100%;
        max-width: 100vw;

        padding: 0 1rem;

        .contractSignInfo, .phoneNumber {
            font-size: 14px;
        }
    }
    @media (max-width: 380px) {
        width: 100%;
        padding: 0;
    }

`
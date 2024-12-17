import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const ContractSignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${background.grey};
    margin: 74px auto 0 auto;   //margin-top for header

    padding: 0px 85px;
    
    width: 100%;
    max-width: 100vw;
    height: auto;
    
    @media (max-width: 600px) {
        padding: 0px 50px;
    }
`
export const ContractSignatureForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 20px;

    margin-top: 4px;

    gap: 10px;

    width: 100%;
    max-width: 1196px;

    min-height: 300px;
    
    padding: 1rem;  //change later !!!!
    padding-bottom: 50px;
    
    @media (max-width: 600px) {
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
    }

    .contractSignInfo {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${background.green};

        max-width: 600px;
    }

    .phoneNumber {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${background.green};

        text-decoration: underline;
        background-color: ${background.yellow};
    }
`
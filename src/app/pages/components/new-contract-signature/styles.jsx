import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const ContractSignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.grey};
    margin: 74px auto 0 auto;   //margin-top for header

    padding: 74px 85px;

    width: 100%;
    max-width: 100vw;
    height: calc(100vh - 74px);
`
export const ContractSignatureForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 20px;

    gap: 10px;

    width: 1196px;

    padding: 1rem;  //change later !!!!
`
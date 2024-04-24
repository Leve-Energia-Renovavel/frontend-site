import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { LinearProgress } from "@mui/material";

export const ContractSignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.grey};
    margin: 74px auto 0 auto;   //margin-top for header

    padding: 74px 85px;

    width: 100%;
    max-width: 100vw;
    height: auto;
`
export const ContractSignatureForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 20px;

    gap: 10px;

    width: 1196px;

    padding: 1rem;  //change later !!!!

    .contractSignInfo {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${newBackground.green};

        max-width: 600px;
    }

    .phoneNumber {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${newBackground.green};

        text-decoration: underline;
        background-color: ${newBackground.yellow};

    }
`

export const SignupLinearProgress = styled(LinearProgress)`
    background-color: ${newBackground.yellow};
    border-bottom-width: 5px;

    margin-bottom: 15px;
    
    & .MuiLinearProgress-bar {
        background-color: ${newBackground.orange};
    }
`
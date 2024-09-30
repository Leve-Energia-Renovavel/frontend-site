import styled from "@emotion/styled";
import { Button, LinearProgress } from "@mui/material";
import { newBackground } from "../../styles";

export const NewSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        to bottom,
        ${newBackground.yellow} 0%,
        ${newBackground.white} 50%,  
        ${newBackground.orange} 100%
    );    
    
    margin: 74px auto 0 auto;   //margin-top for header

    padding: 74px 85px;

    width: 100%;
    max-width: 100vw;
    height: auto;

`

export const NewSuccessForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 20px;

    gap: 10px;

    width: 100%;
    max-width: 1196px;

    padding: 1rem;  //change later !!!!

    @media (max-width: 600px) {
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
    }
`
export const NewSuccessFormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.white};

    min-height: 300px;

    gap: 20px;

    .checkIcon {
        /* margin-top: 124px; */
        
        @media (max-width: 600px) {
            margin-top: 54px;
        }
    }

    h1 {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 600;
        color: ${newBackground.orange};

        @media (max-width: 600px) {
            text-align: center;
        }
    }
    
    .info{
        font-family: "Graphie";
        font-size: 21px;
        line-height: 26px;
        font-weight: 500;
        color: ${newBackground.green};

        max-width: 700px;
        
        @media (max-width: 600px) {
            text-align: center;
        }
    }
    
    .bold {
        font-weight: 600;
    }
`

export const FormButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.yellow};
  border-radius: 30px;

  margin-top: 100px;
  margin-bottom: 25px;

  padding: 8px 16px;

  max-width: 290px;
  max-height: 42px;

    @media (max-width: 600px) {
        margin-top: 54px;
    }
  
  span {
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 500;
    text-transform: none;
  }
  
  &:hover {
    background-color: ${newBackground.yellow};
    color: ${newBackground.orange};
    cursor: pointer;
  }

  .buttonIcon {
    width: 30px;
    height: 30px;
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


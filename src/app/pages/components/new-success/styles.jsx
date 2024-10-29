import styled from "@emotion/styled";
import { Button, LinearProgress } from "@mui/material";
import { background } from "../../styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const NewSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 74px auto 0 auto;   //margin-top for header

    padding: 0px 85px;

    width: 100%;
    max-width: 100vw;
    
    height: auto;
    min-height: 300px;
`

export const NewSuccessForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 20px;

    margin-top: 4px;

    gap: 10px;

    width: 100%;
    /* max-width: 1196px; */
    max-width: 877px;

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
    background-color: ${background.white};

    min-height: 300px;

    min-width: 380px;
    width: 100%;
    max-width: 388px;

    margin: 0 auto;

    .title {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 120%;
        font-weight: 600;
        font-style: normal;
        color: ${background.green};

        text-align: center;
    }
    
    .subtitle {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 120%;
        font-weight: 600;
        font-style: normal;
        color: ${background.green};

        max-width: 388px;

        margin-top: 24px;
    }
    
    .description {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 120%;
        font-weight: 400;
        font-style: normal;
        color: ${background.black};
        
        max-width: 388px;

        margin-top: 8px;
    }
    
    .highlighted {
        font-weight: 600;
    }

    @media (max-width: 600px) {
        min-width: 340px;
        max-width: 342px;

        .description {
            max-width: 342px;
        }
    }
`


export const NewSuccessBoxInfo = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border: 1px solid ${background.green};
    
    gap: 16px;
    
    min-width: 380px;
    width: 100%;
    max-width: 388px;
    
    margin: 0 auto;
    border-radius: 8px;

    margin-top: 32px;

    .boxDescription {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 120%;
        font-weight: 400;
        color: ${background.green};

        max-width: 278px;

        margin-left: 32px; //24px icon + 8px gap
    }

    @media (max-width: 600px) {
        min-width: 340px;
        max-width: 342px;
    }

`

export const NewSuccessBoxContent = styled.div`
    display: flex;
    align-items: start;
    gap: 8px;

    .boxTitle {
        font-family: "Graphie";
        font-size: 18px;
        font-weight: 600;
        line-height: 120%;
        color: ${background.green};

        max-width: 278px;
    }

    .boxIcon {
        color: ${background.green};
    }
`

export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${background.green};
  color: ${background.white};
  border-radius: 30px;

  height: 54px;

  width: 100%;
  max-width: 388px;
  
  margin: 0 auto;
  margin-top: 32px;
  
  padding: 8px 16px;
  
    span {
    font-family: "Graphie";
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    text-transform: none;
    color: ${background.white};

    white-space: nowrap;
  }

  &:hover {
    cursor: pointer;
    background-color: ${background.yellow};

    span {
      color: ${background.green};
    }
    
    .icon {
        color: ${background.green};
    }
  }

    @media (max-width: 600px) {
        max-width: 342px;
    }
`

export const SimpleArrowForward = styled(ArrowForwardIcon)`
    width: 21px;
    height: 21px;
    color: ${background.yellow};
`

export const SignupLinearProgress = styled(LinearProgress)`
    background-color: ${background.yellow};
    border-bottom-width: 5px;

    margin-bottom: 15px;
    
    & .MuiLinearProgress-bar {
        background-color: ${background.orange};
    }
`


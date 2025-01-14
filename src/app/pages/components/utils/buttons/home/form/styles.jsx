import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

const FormButtonBase = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isCompany",
})``;

export const FormButton = styled(FormButtonBase)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 52px;

  padding: 14px 16px;
  margin: ${props => props.isCompany ? `8px auto` : `16px auto`};

  width: 100%;
  max-width: 320px;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 500;
    text-transform: none;
    color: ${background.white};
  }

  .icon {
    color: ${background.yellow};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${background.yellow};

    span, .icon {
      color: ${background.green};
    }
  }
  
    @media (max-width: 600px) {
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
    }
`

export const Loading = styled(CircularProgress)`
  color: ${background.green};
  width: 10px;
  height: 10px;

`
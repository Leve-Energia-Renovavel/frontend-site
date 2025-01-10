import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

export const FormButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 52px;

  padding: 14px 16px;
  margin: 1rem 0;

  width: 100%;
  max-width: 305px;
  margin: 1rem auto;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 700;
    text-transform: none;
    color: ${background.white};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${background.yellow};

    span {
      color: ${background.green};
    }
  }
  
    @media (max-width: 600px) {
      width: 100%;
      max-width: 305px;
      margin: 1rem auto;
    }
`

export const Loading = styled(CircularProgress)`
  color: ${background.green};
  width: 10px;
  height: 10px;

`
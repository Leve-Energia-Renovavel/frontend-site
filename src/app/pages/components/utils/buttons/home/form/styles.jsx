import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

export const FormButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 52px;

  padding: 14px 16px;
  margin: 1rem 0;
  
  //this is very ugly but necessary to avoid hydratation error in nextjs webpack
  ${props => props.ismobile === "true" && 'display: none;'}

  ${props => props.ismobile === "false" && 'width: 100%; max-width: 305px; margin: 1rem auto;'}


  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 700;
    text-transform: none;
    color: ${newBackground.white};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${newBackground.yellow};

    span {
      color: ${newBackground.green};
    }
  }
  
    @media (max-width: 600px) {
      //this is very ugly but necessary to avoid hydratation error in nextjs webpack
      ${props => props.ismobile === "true" ? `display: flex;` : `display: none;`}
    }
`

export const Loading = styled(CircularProgress)`
  color: ${newBackground.green};
  width: 10px;
  height: 10px;

`
import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

export const FormButton = styled(Button)`
  background-color: ${newBackground.yellow};
  color: ${newBackground.green};
  border-radius: 30px;

  height: 42px;

  padding: 8px 16px;
  margin: 1rem 0;
  
  //this is very ugly but necessary to avoid hydratation error in nextjs webpack
  ${props => props.ismobile === "true" && 'display: none;'}

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 700;
    text-transform: none;

    margin-left: auto;
  }
  
  &:hover {
    background-color: ${newBackground.orange};
    color: ${newBackground.yellow};
    cursor: pointer;
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
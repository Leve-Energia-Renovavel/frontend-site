import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

export const CTAButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;
  margin: 30px auto;

  min-width: 330px;
  max-width: 330px;
  
  //this is very ugly but necessary to avoid hydratation error in nextjs webpack
  ${props => props.ismobile === "true" && 'display: none;'}

  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;

    margin-left: auto;
  }

  .icon {
      color: ${background.yellow};
  }
  
  &:hover {
      background-color: ${background.yellow};
      color: ${background.green};
      cursor: pointer;

      .icon {
          color: ${background.green};
      }
  }
  
    @media (max-width: 600px) {
      //this is very ugly but necessary to avoid hydratation error in nextjs webpack
      ${props => props.ismobile === "true" ? `display: flex;` : `display: none;`}

      min-width: 200px;
      width: 100%;
      max-width: 330px;
    }
`

export const Loading = styled(CircularProgress)`
  color: ${background.green};
  width: 10px;
  height: 10px;

`
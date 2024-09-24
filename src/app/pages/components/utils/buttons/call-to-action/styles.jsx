import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

export const CTAButton = styled(Button)`
  background-color: ${newBackground.orange};
  color: ${newBackground.white};
  border-radius: 30px;

  height: 42px;

  padding: 15px 53px;
  margin: 30px auto;

  max-width: 305px;
  
  //this is very ugly but necessary to avoid hydratation error in nextjs webpack
  ${props => props.ismobile === "true" && 'display: none;'}

  span {
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;

    margin-left: auto;
  }

  .icon {
      color: ${newBackground.yellow};
  }
  
  &:hover {
      background-color: ${newBackground.yellow};
      color: ${newBackground.green};
      cursor: pointer;

      .icon {
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
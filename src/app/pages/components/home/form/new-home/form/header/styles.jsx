import { fadeInUp } from "@/app/pages/animations"
import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  animation: ${fadeInUp} 0.5s ease-out; 
  
  .formTitle {
    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.yellow};
    white-space: nowrap;
    font-size: 27px;

    text-align: center;
  } 
`

export const FormSubtitleContainer = styled.div`

    .formSubtitle { 
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      font-size: 18px;
      line-height: 18px;

      animation: ${fadeInUp} 0.5s ease-out;

      margin-top: 3px;
      margin-bottom: 32px;

      text-align: center;
    }
`
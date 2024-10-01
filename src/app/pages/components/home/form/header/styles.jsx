import { fadeInUp } from "@/app/pages/animations"
import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  
  animation: ${fadeInUp} 0.5s ease-out; 
  
  .formTitle {
    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.yellow};
    white-space: nowrap;
    font-size: 27px;
    text-align: left;
  } 

  .formTitleMobile {
    display: none;

    margin: 0 auto;

    font-family: "Graphie";
    font-size: 24px;
    font-weight: 600;
    color: ${newBackground.yellow};
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    .formTitle {
      display: none;
    }
    .formTitleMobile {
      display: block;
    }
    .economyIcon {
      display: none;
    }
  }
`

export const FormSubtitleContainer = styled.div`

    .formSubtitle { 
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      font-size: 14px;
      line-height: 12px;

      animation: ${fadeInUp} 0.5s ease-out;

      margin-top: 17px;
      margin-bottom: 20px;
    }

    .highlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.yellow};
      font-size: 14px;
      line-height: 14px;
    }

  .formSubtitleMobile {
    display: none;

    font-family: "Graphie";
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    color: ${newBackground.white};
    text-align: center;

    max-width: 300px;

    margin: 12px auto 31px auto;
  }

  @media (max-width: 600px) {
    .formSubtitle {
      display: none;
    }
    .formSubtitleMobile {
      display: block;
    }
  }
`
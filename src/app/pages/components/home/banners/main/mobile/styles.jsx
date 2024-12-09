import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const HomeMobileMainContent = styled.div`
  display: flex; 
  flex-direction: column; 
  
  display: none;

  padding: 24px 24px 10px 24px;
  max-width: 100vw;

  .homeMainTitleMobile {
    font-family: "Graphie";
    font-size: 38px;
    line-height: 34px;
    letter-spacing: 0.72px;
    font-weight: 600;
    color: ${background.green};

    margin-top: 31px;
    
    // Ensuring each part of the title is on a new line
    span, 
      &::before, 
      &::after {
        display: block;
        white-space: nowrap;
      }
  }

  .highlighted {
    font-weight: 600;
    color: ${background.orange};
  }
  .homeMainSubtitleMobile {
    font-family: "Graphie";
    font-size: 18px;
    line-height: 120%;
    font-weight: 400;
    color: ${background.greyHigh};
    
    /* text-align: justify; */
    /* max-width: 352px; */
    
    margin-top: 18px;
  }
  
  .homeMainDescriptionMobile {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 600;
    color: ${background.green};
    
    margin-top: 24px;

    /* max-width: 320px; */
  }
  
  @media (max-width: 600px) {
    display: block;
  }

  @media (max-width: 400px) {
    .homeMainTitleMobile {
      font-size: 34px;
    }
  }

`
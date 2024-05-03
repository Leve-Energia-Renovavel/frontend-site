import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, Slider, Button, CircularProgress } from "@mui/material";
import { newBackground } from "../../styles";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${newBackground.white};
    
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 3rem;
    
    @media (max-width: 600px) {
      padding: 0;
      background: linear-gradient(to top, #ffffff 82%, ${newBackground.yellow} 90%,  #ffffff 98%);
    }
`

export const LandingPageBanner = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;
    
    height: auto;
    
    /* padding: 27px 39px; */
    margin-top: 74px;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      gap: 0;
      
      /* padding: 1rem 1.5rem; */
      padding: 0;
    }
`


export const LandingPageMainContent = styled.div`
    border-radius: 15px;
    
    padding: 32px 38px;
    
    width: 900px;
    max-width: 900px;
    
    max-height: 750px;
    
    @media (max-width: 600px) {
      padding: 0;
      width: 100vw;
      max-width: 100vw;

      margin: 1rem 24px;

      /* height: 70vh; */
      height: auto;

      border-radius: 15px;
    }
`

export const LandingPageContent = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  /* position: relative; */
  height: 100%; 
  
  @media (max-width: 600px) {
    text-align: center;
    justify-content: start;

    height: 300px;
  }
`

export const LandingPageMainTitle = styled(Typography)`
    font-family: "Metropolis", sans-serif;
    color: ${newBackground.orange};
    font-size: 55px;
    line-height: 55px;
    font-weight: 500;
    max-width: 680px;
    
    .highlighted { 
      background-color: ${newBackground.yellow};
      border-radius: 12px;
      font-size: 55px;
      font-weight: 600;
      padding: 0 2px;
    }

    @media (max-width: 600px) {
      font-size: 27px;
      line-height: 30px;
      white-space: normal;

      margin-top: 24px;

      .highlighted { 
        font-size: 27px;
      }
    }
`
export const LandingPageSubtitle = styled(Typography)`
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 27px;
    line-height: 30px;
    font-weight: 600;
    max-width: 650px;
    
    margin-top: 45px;
    
    .underlined {
      font-weight: 600;
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      
      .underlined { 
        font-size: 14px;
      }
    }
`
export const LandingPageBannerFooter = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  bottom: 0;
  left: 0;

  background-color: ${newBackground.yellow};
  width: 675px;
  height: 85px;
  border-radius: 10px;

  @media (max-width: 600px) {
    position: static;
    flex-direction: column;
    max-width: 325px;
    margin-top: auto;
    text-align: center;
  }
`
export const LandingPageBannerSecondFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${newBackground.green};
  width: 473px;
  height: 85px;
  border-radius: 0 10px 10px 0;

  .footerTitle {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 21px;
    color: ${newBackground.yellow};

    margin-left: 85px;
  }
  .footerSubtitle {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 21px;
    color: ${newBackground.white};
    
    margin-left: 85px;
  }
  
  @media (max-width: 600px) {
    max-width: 325px;
    border-radius: 10px 10px 0 0;
    
    .footerTitle {
      margin: 0 auto;
      font-size: 17px;
    }
    .footerSubtitle {
      margin: 0 auto;
      font-size: 17px;
    }

  }
`
export const MoreAboutLeveFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;

  gap: 6px;

  &:hover {
    h6 {
      cursor: pointer;
      text-decoration: underline;
    }
    .arrowIcon {
      cursor: pointer;
    }
  }

  h6 {
    font-family: "Graphie";
    font-size: 14px;
    color: ${newBackground.green};
  }
  
  .arrowIcon {
    color: ${newBackground.green};
    width: 32px;
    height: 32px;
  }

  @media (max-width: 600px) {
    display: none;
  }


`

export const LandingPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 388px;
  max-width: 388px;  

  .privacyPolicyDisclaimer {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    text-align: left;
    color: ${newBackground.orange};

    max-width: 360px;
    
    margin: 0 auto;
    
    @media (max-width: 600px) {
      max-width: 320px;
      margin-bottom: 24px;
    }
  }

  .privacyPolicy {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    text-decoration: underline;
    text-align: left;
    color: ${newBackground.orange};
    border-radius: 5px;

    &:hover{
      cursor: pointer;
      color: ${newBackground.green};
      background-color: ${newBackground.yellow};
    }
  }
`

export const LandingMainFormContainer = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};

    border-radius: 15px;
    
    /* height: 85vh; */
    height: 590px;
    
    @media (max-width: 600px) {
      height: auto;
      width: 100vw;
      max-width: 100vw;
      border-radius: 0 0 15px 15px;
    }
`
export const LandingPageForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.orange};

    border-radius: 15px;
    
    padding: 2rem;
    
    height: auto;
    overflow: hidden;
    
    @media (max-width: 600px) {
      padding: 1.5rem;
      width: 100%;
      max-width: 100vw;

      border-radius: 0;
    }
    
    p {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.white};
      font-size: 14px;
      line-height: 14px;

      margin-top: 17px;
      margin-bottom: 30px;

      @media (max-width: 600px) {
        text-align: center;
        line-height: 18px;
        margin: 20px;
      }
    }
    .highlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${newBackground.yellow};
      font-size: 14px;
      line-height: 14px;
    }

    .homeFormInput {
      background-color: ${newBackground.white};
      border-radius: 10px;
      height: 42px;
      margin-bottom: 8px;

      .MuiInputBase-input {
        display: none;
      }

      .MuiOutlinedInput-input {
        
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${newBackground.orange};
        }

        & label {
          font-family: "Graphie";
          font-weight: 500;
          font-size: 14px;
          color:  ${newBackground.orange};
        }
        
        &:focus-within label,
        & input:focus + label {
            margin-top: 8px;
        }
        
        & .MuiOutlinedInput-root {
          & fieldset {
            height: 42px;
            border-radius: 10px;
            border-color: ${newBackground.white};
          }
        }

    }
`
export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  
  animation: ${fadeInUp} 0.5s ease-out; 
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }

  h2 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.yellow};
      white-space: nowrap;
      font-size: 27px;
      text-align: left;
      
      @media (max-width: 600px) {
        font-size: 27px;
      }

  }

  .economyIcon {
    @media (max-width: 600px) {
      width: 32px;
      height: 32px;
    }
  }
`
export const LandingPageFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    h6 {
      font-family: "Graphie";
      font-size: 17px;
      font-weight: 900;
      color:${newBackground.green};
      
      white-space: nowrap;
    }
    
    .averageUserCost { 
      margin: 0;
      margin-top: 25px;
    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${newBackground.orange};
    }

`
export const UserTypeFormContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }

    .chooseWhereToEconomy {
      margin: 17px 0 0 0;  //25px - 8px from margin-bottom of .homeFormInput
    }

`
export const UserTypeFormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;
    
    padding: 1rem 0;
    
    @media (max-width: 600px) {
      gap: .5rem;
      padding: .5rem 0;
    }
`

export const FormSelect = styled(Button)`
  background-color: ${newBackground.orange};
  border: 1px solid ${newBackground.yellow};
  border-radius: 10px;

  font-family: "Graphie";
  font-size: 14px;
  color: ${props => props.selected ? newBackground.yellow : newBackground.white};
  font-weight: 400;
  text-transform: none;
  padding: 0.5rem 2rem;

  width: 100%;
  max-width: 250px;
  
  &:hover {
    cursor: pointer;
  }
  
  ${props => props.selected && `background-image: linear-gradient(to left, ${newBackground.yellow}, transparent 50%);`}
  
  `

export const FormButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${newBackground.yellow};
  color: ${newBackground.green};
  border-radius: 30px;

  height: 42px;
  
  margin: 1rem 0;
  
  @media (max-width: 600px) {
    width: 90vw;
    margin: 1rem auto;
  }

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
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }
`
export const FormSlider = styled(Slider)`
    color: ${newBackground.green};
    height: 8px;
    
    @media (max-width: 600px) {
      height: 10px;
    }
    
    & .MuiSlider-thumb {
        background-color: ${newBackground.orange};
        height: 12px;
        width: 12px;
    }
    
    & .MuiSlider-rail {
      background-color: ${newBackground.yellow};
      height: 8px;
      opacity: 1;
    } 

`;

export const Loading = styled(CircularProgress)`
  color: ${newBackground.green};
  width: 10px;
  height: 10px;

`


export const SecondSectionContainer = styled.div`
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;

    border-radius: 10px;

    height: 508px;

    margin-top: 50px;
    
    padding: 57px 85px;
    
    @media (max-width: 600px) {
      margin-top: 10px;
      padding: 1rem 2rem;

      text-align: center;
    }

`

export const SecondSectionBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to left, #ffffff 5%, ${newBackground.yellow});

    border-radius: 32px;
    
    max-width: 792px;
    height: 287px;
    margin: 65px auto;

    .bannerTitle {
      font-family: "Graphie";
      font-size: 55px;
      font-weight: 600;
      color: ${newBackground.green};

      margin-top: 52px;
    }
    .bannerDescription {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 500;
      color: ${newBackground.green};

      margin-top: 20px;
    }
    .simulateButton {
      font-family: "Graphie";
      color: ${newBackground.yellow};
      background-color: ${newBackground.green};
      padding: 8px 21px;
      max-width: 200px;
      border-radius: 32px;
      margin: 30px auto 0 auto;

      &:hover {
        cursor: pointer;
        background-color: ${newBackground.orange};
      }
     }

     @media (max-width: 600px) {
      height: auto;
      padding: 0 1rem 1rem 1rem;
      background: linear-gradient(to bottom, #ffffff 5%, ${newBackground.yellow});


      .bannerTitle {
        font-size: 27px;
        margin-top: 22px;
      }
      .bannerDescription {
      font-size: 14px;
      margin-top: 10px;
      }
      .simulateButton {
      margin: 10px auto 0 auto;
      }
    }
    
`
export const TutorialBannerContainer = styled.div`
  margin-top: 70px;
`

export const ContactBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff 30%, ${newBackground.orange});

  h4 {
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 34px;
    font-weight: 600;
    line-height: 30px;
  }

  h5 {
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 21px;
    line-height: 21px;
    font-weight: 600;

    margin-top: 11px;
  }

  .contactButton {
    display: flex;
    align-items: center;
    gap: 4px;
    
    font-family: "Graphie";
    color: ${newBackground.yellow};
    background-color: ${newBackground.green};
    padding: 8px 21px;
    max-width: 329px;
    height: 42px;
      border-radius: 32px;
      margin: 30px auto 100px auto;

      &:hover {
        cursor: pointer;
        background-color: ${newBackground.orange};
      }
     }
     
     
     @media (max-width: 600px) {
      text-align: center;
      h4 {
        font-size: 21px;
        font-weight: 700;
      }
      
      h5 {
        font-size: 14px;
        font-weight: 500;
      }
    }


`
export const FaqBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 994px; */
  width: 100%;
  border-radius: 0 0 10px 10px;

  background-color: ${newBackground.orange};

  margin: 0 auto;
  padding: 3rem 2rem;

  text-align: center;

  .faqTitle {
    font-family: "Graphie";
    color: ${newBackground.yellow};
    font-size: 42px;
    line-height: 30px;
    font-weight: 500;
    
    margin-top: 20px;
    margin-bottom: 40px;
  }
  
  .faqIcon {
    margin: 0 auto;
  }

  .faqContainer {
    margin-bottom: 1rem;
    border-radius: 20px;

    &:hover {
      .arrowIcon{
        background-color: ${newBackground.green};
        color: ${newBackground.yellow};
      }
      .question {
        color: ${newBackground.green};
     }
    }
  }
  
  .question {
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 27px;
    font-weight: 600;
  }

  .answer{
    font-family: "Graphie";
    color: ${newBackground.green};
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    text-align: left;
  }

  .arrowIcon{
    background-color: ${newBackground.orange};
    border-radius: 30px;
    padding: 8px;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;

    .faqTitle {
    font-size: 21px;
    margin-top: 10px;
    margin-bottom: 20px;
    }
    .faqIcon {
    width: 31px;
    height: 31px;
    }

    .question {
    font-size: 14px;
  }
    .answer{
      font-size: 14px;
  }
    .arrowIcon{
    width: 32px;
    height: 32px;
  }
  }

`


import { fadeInUp, fadeInUpAnimation, slideAndDisappear } from "@/app/pages/animations";
import { background, notification } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Alert, Button, CircularProgress, Slider, Typography } from "@mui/material";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    max-width: 1920px;
    /* max-width: 1366px; */
    margin: 0 auto;
    padding: 0 3rem;
    
    overflow-x: hidden; /* Disables horizontal scrolling */
    
    @media (max-width: 600px) {
      padding: 0;
      border: 0;
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
      color: ${background.yellow};
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
export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: auto;
    margin-top: 74px;
    
    position: relative; /* Ensure it's positioned correctly for absolute child */

    .dividerBar {
      display: block;
      width: 100vw; 
      position: absolute;
      left: 0;
      right: 0; 
      border: 4px solid ${background.grey};
      margin-left: calc(-50vw + 50%); /*Centers the bar by compensating for parent's padding */
    }
    
    @media (max-width: 600px) {
      margin: 60px auto 0 auto;
      flex-wrap: wrap;

      padding: 0;

      height: auto;

    .dividerBar {
          display: block;
          width: 100%;
          position: absolute;
  
          border: 12px solid ${background.grey};
        }
    }
`
export const HomeMainContent = styled.div`

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;
    z-index: 999; 
    
    border-radius: 15px;
    
    padding: 32px 38px;
    
    width: 900px;
    max-width: 900px;
    
    max-height: 750px;
    
    @media (max-width: 600px) {
      display: none;
    }
`

export const HomeContent = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: end; 
  height: 100%; 
`

export const HomeMainTitleContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  animation: ${fadeInUp} 0.5s ease-out;
  
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h1 { 
      font-family: "Graphie";
      font-weight: 600;
      text-align: left;

      font-size: 89px;
      line-height: 89px;
      max-width: 420px;
      
      @media (max-width: 600px) {
        text-align: center;
        font-size: 42px;
        line-height: 42px;
      }
    }

    .underline { 
      font-family: "Graphie";
      font-weight: 600;
      text-decoration: underline;
      font-size: 89px;

      @media (max-width: 600px) {
        font-size: 40px;
      }
    }
`


export const HomeSubtitleContainer = styled.div`
  display : flex ;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: ${background.white};
  
  gap: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }

  .moreAboutLeve {
    font-family: "Graphie";
    font-size: 12px;
  }
  
  .arrowIcon {
    transform: scale(1.5);
  }

  &:hover { 
    text-decoration: underline;
    cursor: pointer;
  }
  `


export const HomeFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.isMobile && `display:none;`}

  min-width: 450px;
  width: 454px;
  max-width: 454px;  
  
  @media (max-width: 600px) {
    ${props => props.isMobile ? `display:block;` : `display:none;`};
    max-width: 100vw;

    .privacyPolicyDisclaimer, .privacyPolicy {
      display: none;
    }
  }
`

export const HomeSecondaryBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      gap: 1.2rem;
    }
    @media (max-width: 600px) {
      display: none;

      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }
`

export const HomeSecondaryBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;

    height: 170px;
    /* width: 287px; */
    width: 310px;

    padding: 1rem;

    background-color: ${props => props.color};

    .boxDescription {
      font-family: "Graphie";
      font-size: 17px;
      line-height: 17px;
      font-weight: 500;
      color: ${props => props.descriptionColor};
      text-align: left;

      margin-bottom: 20px;
      
      @media (max-width: 600px) {
        margin-bottom: 4px;
        font-size: 12px;
      }
    }

    @media (max-width: 600px) {
      width: 180px;
      height: 180px;

      padding: .8rem;

      border-radius: 15px;
    }
    @media (max-width: 415px) {
      width: 150px;
      height: 150px;

      padding: .8rem;

      border-radius: 15px;
    }
    @media (max-width: 362px) {
      width: 135px;
      height: 135px;

      padding: .8rem;

      border-radius: 15px;
    }
`
export const HomeSecondaryBoxTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;

    h6 {
      font-family: "Graphie";
      font-size: 27px;
      font-weight: 600;
      color: ${props => props.titleColor};
      
      @media (max-width: 600px) {
        font-size: 18px;
      }
      @media (max-width: 415px) {
        font-size: 16px;
      }
    }
    
    .titleIcon {
      width: 30px;
      height: 30px;
      
      @media (max-width: 600px) {
        height: 20px;
        width: 20px;
      }
    }
`

export const HomeMainForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${background.green};
    
    border-radius: 5px;
    
    padding: 1.5rem 1rem ;
    
    height: auto;
    max-height: 756px;
    
    overflow: hidden;

    .homeFormInput, .homeFormInputCEP {
      background-color: ${background.white};
      border-radius: 5px;
      height: 42px;
      margin-bottom: 8px;

      & .MuiInputLabel-shrink {
        /* Styles for the focused label */
        /* line-height: 2.4375em;  */
        font-size: 17px;
        line-height: 17px;   //label lower
        margin-left: 65px;   //label centralized
        margin-top: 10px;
      }

      .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 22px;
        height: 2px;
        padding: 24px 14px;
        font-weight: 700;
        color: ${background.orange};
        }

        & label {
          font-family: "Graphie";
          font-weight: 500;
          font-size: 20px;
          color:  ${background.green};

          margin-top: -5px;

        }
        
        & .MuiFormLabel-root-MuiInputLabel-root {
          line-height: 2.4375em;
        }
        
        & .MuiOutlinedInput-root {
          & fieldset {
            height: 42px;
            border-radius: 10px;
            border-color: ${background.white};
          }
        } 

        & .MuiInputLabel-root {
          right: 0;
          text-align: center;
        }
        
        input {
          all: inset;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: all 1000s ease-in-out 0s;
        }

    }

    .homeFormInputCEP {
      width: 100%;
      max-width: 305px;
      margin: 0 auto;
    }

    .privacyPolicyDisclaimer {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    text-align: left;
    color: ${background.white};

    text-align: center;
    
    max-width: 305px;
    
    margin: 0 auto;
  }

  .privacyPolicy {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    text-decoration: underline;
    text-align: left;
    color: ${background.white};
    border-radius: 5px;

    &:hover{
      cursor: pointer;
      color: ${background.green};
      background-color: ${background.yellow};
    }
  }

    .mobilePrivacyPolicy, .mobilePrivacyPolicyDisclaimer {
      display: none;
    }

    @media (max-width: 600px) {
      display: none;
    }

`



export const UserTypeFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .chooseWhereToEconomy {
      font-family: "Graphie";
      font-weight: 500;
      color: ${background.white};
      font-size: 18px;
      line-height: 19px;
      
      animation: ${fadeInUp} 0.5s ease-out;
      
      margin: 25px 0 17px 0;  //25px - 8px from margin-bottom of .homeFormInput

      text-align: center;
    }
    
    
    @media (max-width: 600px) {
      margin-bottom: 1rem;
      
      .chooseWhereToEconomy {
        font-size: 20px;
        line-height: 19px;
        font-weight: 600;
        margin: 25px auto 17px auto;
      }
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

export const HomeMainTitle = styled(Typography)`
    font-family: "Graphie", sans-serif;
    color: ${background.yellow};
    font-size: 5rem;
    font-weight: bold;
    max-width: 400px;
    word-wrap: break-word;
`
export const FormSelect = styled(Button)`
  background-color: ${background.green};
  border: 1px solid ${background.yellow};
  border-radius: 5px;

  font-family: "Graphie";
  font-size: 16px;
  color: ${props => props.selected ? background.yellow : background.white};
  border: 1px solid ${props => props.selected ? background.yellow : background.grey};

  font-weight: 400;
  text-transform: none;
  padding: 0.5rem 2rem;

  width: 100%;
  max-width: 144px;
  
  &:hover {
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    border-radius: 5px;
    height: 50px;
    max-width: 144px;
    
    background-color: ${background.green};
    
    background-image: none;
    border: 1px solid ${background.grey};
    
    ${props => props.selected && `border: 1px solid ${background.yellow};`}
  }
`

export const FormSlider = styled(Slider)`
    color: ${background.green};
    height: 8px;
    
    @media (max-width: 600px) {
      height: 10px;
    }
    
    & .MuiSlider-thumb {
        background-color: ${background.orange};
        height: 12px;
        width: 12px;
    }
    
    & .MuiSlider-rail {
      background-color: ${background.yellow};
      height: 8px;
      opacity: 1;
    } 

    .sliderLabel {
      /* background-color: aqua; */
    }

`;

export const FormButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${background.yellow};
  color: ${background.green};
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
    background-color: ${background.orange};
    color: ${background.yellow};
    cursor: pointer;
  }
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }
`

export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    h6 {
      font-family: "Graphie";
      font-size: 17px;
      font-weight: 900;
      color:${background.green};
      
      white-space: nowrap;
    }
    
    .averageUserCost { 
      margin: 0;
      margin-top: 12px;
    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${background.orange};
    }

    .sliderTip {
      position: relative;
      top: -24px;
      left: -13px;
      animation: ${slideAndDisappear} 5s forwards;
      width: 30px;
      height: auto;
    }

`








export const HomeSecondarySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    gap: 80px;
    
    padding: 2rem 0;
    
    height: auto;
    /* max-width: 1920px; */
    width: 100%;
    max-width: 1366px;
    
    @media (max-width: 600px) {
      display: none;
      
      width: 100vw;
      max-width: 100vw;

      gap: 40px;

      padding: 15px;
    }
`

export const HomeSecondaryImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${(props) => props.visible && fadeInUpAnimation};
        
    gap: 1rem;
    
    @media (max-width: 600px) {
      display: none;
    }
`

export const HomeSecondaryImagesContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    
    transition: filter 0.5s ease; 

    
    &:hover {
      filter: brightness(0.8);
    }
    
    height: 420px;
    width: 620px;

    border-radius: 20px;
    
    padding: 1rem;
    /* margin-bottom: 5rem; */
    
    @media (max-width: 600px) {
      height: 250px;
      width: 330px;

      
      border-radius: 15px;
    }
    
    h6 {
      ${props => props.invertedBox ? "margin-top: auto" : ""};
      font-family: "Graphie";
      font-size: 27px;
      font-weight: 600;
      color: ${background.white};
      
      @media (max-width: 600px) {
        font-size: 21px;
      }
      
    }

    .arrowIcon {
      ${props => props.invertedBox ? "margin-top: auto" : ""};
      font-size: 50px;
      color: ${background.yellow};
      
      &:hover {
        color: ${background.green};
        background-color: ${background.yellow};
        border-radius: 30px;
      }
    }
`


export const HomeFifthSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${background.green};

    gap: 2rem;
    
    border-radius: 30px;
    
    height: auto;
    max-width: 100vw;

    @media (max-width: 840px) {
      margin: 0 auto;
      flex-wrap: wrap;
    }
    @media (max-width: 600px) {
      display: none;
      
      overflow: auto;
      max-width: 90vw;
      margin: 0 auto;
      flex-wrap: wrap;
      gap: 1rem;
    }
`
export const HomeFifthSectionBannerContainer = styled.div`
  height: auto;
  `
export const HomeFifthSectionBanner = styled.div`
    height: 350px;
    width: 490px;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    
    border-radius: 30px;

    @media (max-width: 600px) {
      width: 90vw;
      max-width: 90vw;
      height: 15rem;
      border-radius: 0px;

    }
`

export const HomeFifthSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding: 30px;

  @media (max-width: 600px) {
    gap: 4rem;
  }
`
export const HomeFifthSectionTitleContainer = styled.div`
  text-align: start;
  overflow: hidden; /* Hide overflowing content */
  
  .sectionTitle {
    font-family: "Graphie";
    font-size: 34px;
    font-weight: 600;
    color: ${background.white};
    
    line-height: 34px;
    
    max-width: 650px;
    margin-right: auto;
    
    @media (max-width: 1250px) {
      font-size: 27px;
      line-height: 27px;
    }
    @media (max-width: 970px) {
      font-size: 21px;
      line-height: 21px;
    }
    @media (max-width: 600px) {
      font-size: 21px;
      line-height: 25px;
    }
  }
  `
export const HomeFifthSectionDescriptionContainer = styled.div`
  
  .sectionDescription {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 21px;
    font-weight: 500;
    color: ${background.yellow};
    
    text-decoration: underline;
    max-width: 300px;
    margin-left: auto;

    @media (max-width: 970px) {
      text-align: end;
      font-size: 14px;
      line-height: 14px;

      .arrowIcon {
        width: 14px;
        height: auto;
      }
    }

    @media (max-width: 600px) {
      text-align: end;
      max-width: 220px;
      font-size: 17px;
      line-height: 17px;
    }
    
    &:hover {
      color: ${background.orange};
      cursor: pointer;
    }
}
`
export const HomeSixthSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${background.white};
    
    min-height: 670px;

    gap: 2rem;
    
    padding: 2rem 2rem 1rem 2rem;
    
    .sectionTitle {
      font-family: "Graphie";
      font-size: 34px;
      font-weight: 600;
      color: ${background.green};
    }
    
    @media (max-width: 600px) {
      padding: 1rem;
      background-color: ${background.grey};
      
      .sectionTitle {
        font-size: 21px;
        line-height: 21px;
      }
    }
`
export const HomeSixthSectionTitleContainer = styled.div`
  text-align: center;


`
export const HomeSixthSectionCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    ${(props) => props.visible && fadeInUpAnimation};

    max-width: 990px;
    
    gap: 1rem;

    margin-bottom: 2rem;
    
    @media (max-width: 600px) {
      max-width: 100vw;
      flex-wrap: wrap;
    }
`
export const HomeSixthSectionCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    background-color: ${background.white};
    
    border-radius: 15px;
    
    width: 180px;
    height: 180px;
    
    @media (max-width: 600px) {
      border: 0;
      border-radius: 5px;

      min-width: 160px;
      width: 161px;
      max-width: 161px;
      
      min-height: 92px;
      height: 94px;
      max-height: 94px;

      .brandLogo { 
          width: 90px;
          height: auto;
        }
        
      #drogasil, #martins {
          width: 70px;
          height: auto;
        }
    }

    @media (max-width: 400px) {
      min-width: 140px;
      width: 100%;
      max-width: 151px;
    }
`











export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.alert};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`

export const SnackbarMessageNotification = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.success};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`


export const Loading = styled(CircularProgress)`
  color: ${background.green};
  width: 10px;
  height: 10px;

`

export const CTAButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;

  max-width: 330px;

  margin-top: 19px;
  margin-bottom: 40px;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${background.green};
      color: ${background.yellow};
      cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
    text-align: left;
    padding: 0px 85px; //same as NewHomeMainBannerContainer padding

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    @media (max-width: 600px) {
      display: none;
  }
`

import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Alert, Button, CircularProgress, Slider, Typography } from "@mui/material";
import { newBackground, notification } from "../../styles";

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

const fadeInUpAnimation = css`
  animation: ${fadeInUp} 2s ease;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 3rem;
    
    @media (max-width: 600px) {
      padding: 0;
    }
`
export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    height: auto;
    
    /* padding: 27px 39px; */
    margin-top: 74px;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      
      padding: 1rem 1.5rem;

      height: auto;
    }
`
export const HomeMainContent = styled.div`

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;
    
    border-radius: 15px;
    
    padding: 32px 38px;
    
    width: 900px;
    max-width: 900px;
    
    max-height: 750px;
    
    @media (max-width: 600px) {
      background-position: 50% 50%;
      padding: 1rem;
      width: 100vw;
      max-width: 100vw;

      height: 70vh;

      border-radius: 15px;
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
  color: ${newBackground.white};
  
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

  width: 388px;
  max-width: 388px;  
`

export const HomeMainFormContainer = styled.div`
    background-color: ${newBackground.white};
    border: 1px solid ${newBackground.orange};

    border-radius: 15px;
    
    /* height: 85vh; */
    height: 680px;
    
    @media (max-width: 600px) {
      height: auto;
      width: 90vw;
      max-width: 100vw;
    }
`
export const HomeMainForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.orange};

    border-radius: 15px;
    
    padding: 2rem;
    
    height: auto;
    overflow: hidden;
    
    @media (max-width: 600px) {
      padding: 1.5rem;
      width: 90vw;
      max-width: 100vw;

      border-radius: 15px;
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
        margin-bottom: 6px;
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

  h2 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.yellow};
      white-space: nowrap;
      font-size: 27px;
      text-align: left;
    }
`
export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    h6 {
      font-family: "Graphie";
      font-size: 17px;
      font-weight: 900;
      color:${newBackground.green};

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

export const HomeMainTitle = styled(Typography)`
    font-family: "Metropolis", sans-serif;
    color: ${newBackground.yellow};
    font-size: 5rem;
    font-weight: bold;
    max-width: 400px;
    word-wrap: break-word;
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
  max-width: 161px;
  
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
  
  margin: 1rem 0;
  
  @media (max-width: 600px) {
    width: 90vw;
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



export const HomeSecondarySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    gap: 80px;
    
    padding: 2rem 0;

    height: auto;
    /* max-width: 1920px; */
    max-width: 1366px;
    
    @media (max-width: 600px) {
      width: 100vw;
      max-width: 100vw;

      padding: 15px;
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

    ${(props) => props.visible && fadeInUpAnimation};

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

export const HomeSecondaryImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${(props) => props.visible && fadeInUpAnimation};
        
    gap: 1rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
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
      font-family: "Graphie";
      font-size: 27px;
      font-weight: 600;
      color: ${newBackground.white};
      
      @media (max-width: 600px) {
        font-size: 21px;
      }
      
    }

    .arrowIcon {
      font-size: 50px;
      color: ${newBackground.yellow};
      
      &:hover {
        color: ${newBackground.green};
        background-color: ${newBackground.yellow};
        border-radius: 30px;
      }
    }
`

export const HomeThirdSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${newBackground.orange};

    gap: 2rem;

    border-radius: 10px;
    
    height: auto;
    width: 100%;
    
    padding: 0 3rem 0 3rem;

    .rowToBeReversed {
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;
      padding: 3rem 2rem 0 2rem;
      gap: 0;
      border-radius: 0px;
    }
`
export const HomeThirdSectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(props) => props.visible && fadeInUpAnimation};

    max-width: 590px;

    text-align: left;
    
    h6 {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 34px;

      max-height: 115px;
      
      @media (max-width: 600px) {
        font-size: 21px;
        line-height: 21px;
      }
    }

    .sectionTitle {
      color: ${newBackground.white};
      font-weight: 200;

    }

    .highlighted {
      font-weight: 500;
    }
`

export const HomeThirdSectionSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => props.visible && fadeInUpAnimation};

    max-width: 300px;
    margin-left: 28px;

    h6 {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 34px;
      
      @media (max-width: 600px) {
        font-size: 21px;
        line-height: 21px;
      }
    }

    .sectionSubtitle {
          color: ${newBackground.yellow};
          font-weight: 500;

          @media (max-width: 600px) {
            margin-top: 24px;
          }

        }
`

export const HomeThirdSectionSoleContainer = styled.div`
  .sole {
    margin-top: 5rem;
    width:250px;
    height:250px;

    ${(props) => props.visible && fadeInUpAnimation};
    
    @media (max-width: 600px) {
      margin-top: 2rem;
      width: 220px;
      height: 220px;
    }
  }
`


export const HomeFourthSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${newBackground.white};

    gap: 2rem;

    padding: 2rem;
    margin-bottom: 64px; //80px - 16px from banner below

    .sectionTitle {
      font-family: "Graphie";
      font-size: 34px;
      font-weight: 600;
      color: ${newBackground.green};

      @media (max-width: 600px) {
          font-size: 21px;
      }
    }
`
export const HomeFourthSectionTitleContainer = styled.div`
  text-align: center;

`
export const HomeFourthSectionCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${(props) => props.visible && fadeInUpAnimation};

    gap: 1rem;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`
export const HomeFourthSectionCard = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 1px solid #ccc;
    
    border-radius: 25px;
    width: 280px;
    max-width: 300px;
    
    padding: 2rem;

    .invisible { 
      @media (max-width: 600px) {
      flex-direction: row-reverse;
      }
    }
    
    @media (max-width: 600px) {
      flex-direction: row-reverse;
      width: 327px;
      height: auto;
      padding: 1rem;
    }
`
export const HomeFourthSectionIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;

    .titleIcon {
      width: 65px;
      height: 65px;
      
      @media (max-width: 600px) {
        width: 50px;
        height: 50px;
      }
    }
`
export const HomeFourthSectionTitle = styled.div`

  .cardTitle {
    font-family: "Graphie";
    font-size: 42px;
    font-weight: 600;
    color: ${newBackground.green};
    
    @media (max-width: 600px) {
      font-size: 34px;
    }
  }
`
export const HomeFourthSectionDescription = styled.div`
  .cardDescription {
    font-family: "Graphie";
    font-size: 17px;
    font-weight: 500;
    color: ${newBackground.green};

    line-height: 17px;
  }
`

export const HomeFifthSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${newBackground.green};

    gap: 2rem;
    
    border-radius: 30px;
    
    height: auto;
    max-width: 100vw;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
      gap: 1rem;
      border-radius: 0px;
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
      width: 100vw;
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
  
  .sectionTitle {
    font-family: "Graphie";
    font-size: 34px;
    font-weight: 600;
    color: ${newBackground.white};
    
    line-height: 34px;
    
    max-width: 650px;
    margin-right: auto;
    
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
    color: ${newBackground.yellow};
    
    text-decoration: underline;
    max-width: 300px;
    margin-left: auto;
    
    @media (max-width: 600px) {
      text-align: end;
      max-width: 220px;
      font-size: 17px;
      line-height: 17px;
    }
    
    &:hover {
      color: ${newBackground.orange};
      cursor: pointer;
    }
}
`
export const HomeSixthSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${newBackground.white};

    gap: 2rem;

    padding: 2rem 2rem 1rem 2rem;

    .sectionTitle {
      font-family: "Graphie";
      font-size: 34px;
      font-weight: 600;
      color: ${newBackground.green};
      
      @media (max-width: 600px) {
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

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`
export const HomeSixthSectionCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    
    border-radius: 15px;

    width: 180px;
    height: 180px;

    @media (max-width: 600px) {
      width: 150px;
      height: 94px;
    }

    .brandLogo{ 
      @media (max-width: 600px) {
      width: 90px;
      height: auto;
      }
    }

`











export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Metropolis";
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
  font-family: "Metropolis";
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
  color: ${newBackground.green};
  width: 10px;
  height: 10px;

`
import { fadeInUp, slideAndDisappear } from "@/app/pages/globalAnimations";
import { background, partners } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button, CircularProgress, Slider } from "@mui/material";

export const HomeFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 100%;
  max-width: 388px;  
  height: auto;

  .privacyPolicyDisclaimer {
    font-family: "Graphie";
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    text-align: left;
    color: ${props => props.islocaliza === "true" ? partners.localiza.green : background.orange};

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
    color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};

    border-radius: 5px;

    &:hover{
      cursor: pointer;
      color: ${background.green};
      background-color: ${background.yellow};
    }
  }

`

export const HomeMainFormContainer = styled.div`
    background-color: ${background.white};
    border: 1px solid ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};
    border-radius: 15px;

    height: auto;
    
    @media (max-width: 900px) {
      height: auto;
      width: 100%;
      max-width: 100vw;
    }
    @media (max-width: 600px) {
      height: auto;
      width: 100%;
      max-width: 100vw;
      border-radius: 0px 0px 10px 10px;
    }
`
export const HomeMainForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};

    border-radius: 15px;
    
    padding: 1.5rem 1rem ;
    
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
      color: ${background.white};
      font-size: 14px;
      line-height: 12px;

      animation: ${fadeInUp} 0.5s ease-out;


      margin-top: 17px;
      margin-bottom: 20px;

      @media (max-width: 600px) {
        text-align: center;
        line-height: 18px;
        margin: 20px;
      }
    }
    .highlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${background.yellow};
      font-size: 14px;
      line-height: 14px;
    }

    .underlined{ 
      text-decoration: underline;
    }

    .homeFormInput {
      background-color: ${background.white};
      border-radius: 10px;
      height: 42px;
      margin-bottom: 8px;

      & .MuiInputLabel-shrink {
        /* Styles for the focused label */
        /* line-height: 2.4375em;  */
        line-height: 3em; 
      }

      .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        height: 0.4375em;
        padding: 20px 14px;
        font-weight: 700;
        color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};

        }

        & label {
          font-family: "Graphie";
          font-weight: 500;
          font-size: 14px;
          color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};

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
      color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};
      background-color: ${props => props.islocaliza && background.yellow};
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
export const UserTypeFormContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }

    .chooseWhereToEconomy {
      margin: 12px 0 0 0;  //25px - 8px from margin-bottom of .homeFormInput
      
    }

`
export const FormFooterContainer = styled.div`
    display: flex;
    flex-direction: ${props => (props.isMartins ? 'row' : 'column')};
    gap: ${props => (props.isMartins ? '4px' : '0px')};
    
    @media (max-width: 600px) {
      /* gap: 8px; */
    }
`
export const UserTypeFormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 1rem 0;
    
    @media (max-width: 600px) {
      gap: .5rem;
      padding: .5rem 0;
    }
`

export const FormSelect = styled(Button)`
    background-color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};
  border: 1px solid ${background.yellow};
  border-radius: 10px;

  font-family: "Graphie";
  font-size: 14px;
  color: ${props => props.selected ? background.yellow : background.white};
  font-weight: 400;
  text-transform: none;
  padding: 0.5rem 2rem;

  width: 100%;
  max-width: 180px;
  
  &:hover {
    cursor: pointer;
  }
  
  ${props => props.selected && `background-image: linear-gradient(to left, ${background.yellow}, transparent 50%);`}
  
  `

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
    background-color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};
    color: ${background.yellow};
    cursor: pointer;
  }
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }
`

export const ButtonSimulateYourEconomy = styled(Button)`
 padding: .5rem 2rem;
  background-color: ${background.orange};
  color: ${background.yellow};
  border-radius: 30px;
  
  margin: 1rem 0 0 0;
  
  @media (max-width: 600px) {
    margin: 0;
  }

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 500;
    text-transform: none;

    margin-left: auto;
  }
  
  &:hover {
    background-color: ${background.yellow};
    color: ${background.orange};
    cursor: pointer;
  }
`


export const FormSlider = styled(Slider)`
    color: ${background.green};

    height: 8px;
    
    @media (max-width: 600px) {
      height: 10px;
    }
    
    & .MuiSlider-thumb {
        background-color: ${props => props.islocaliza == "true" ? partners.localiza.green : background.orange};

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

export const Loading = styled(CircularProgress)`
  color: ${background.green};
  width: 10px;
  height: 10px;

`
import { slideAndDisappear } from "@/app/pages/animations";
import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    ${props => props.isMobile && `display: none;`}

    text-align: center;

    .averageUserCost {
      font-family: "Graphie";
        font-size: 18px;
        font-weight: 500;
        color:${background.white};

        min-width: 340px;

        margin-top: 20px;
    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${background.yellow};
    }

    @media (max-width: 600px) {
      margin: 0 auto;

      ${props => props.isMobile ? `display: block;` : `display: none;`};

      .averageUserCost {
        font-family: "Graphie";
        font-size: 20px;
        font-weight: 600;
        color:${background.white};

        min-width: 200px;
        width: fit-content;
        max-width: 280px;

        margin-top: 20px;
        
      }
      .simulationCost {
        color:${background.yellow};
      }
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

export const FormSlider = styled(Slider)`
    color: ${background.orange};
    height: 8px;

    max-width: 305px;
    margin: 19px auto 0 auto;
    
    & .MuiSlider-thumb {
        background-color: ${background.yellow};
        height: 22px;
        width: 22px;
      }
    
      & .MuiSlider-rail {
        background-color: ${background.green};
        border: 1px solid ${background.white};
        height: 5px;
      } 

    .sliderLabel {
      /* background-color: aqua; */
    }

    @media (max-width: 600px) {
      height: 10px;
      color: ${background.orange};

      & .MuiSlider-thumb {
        background-color: ${background.yellow};
        height: 22px;
        width: 22px;
      }

      & .MuiSlider-rail {
        background-color: ${background.green};
        border: 1px solid ${background.white};
        height: 5px;
      } 
    }

`;
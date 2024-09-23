import { slideAndDisappear } from "@/app/pages/animations";
import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin: 0 2rem; */
    margin: 0 43px;

    ${props => props.isMobile && `display: none;`}

    .averageUserCost {
      font-family: "Graphie";
      font-size: 17px;
      font-weight: 900;
      color:${newBackground.green};
      
      white-space: nowrap;

      margin: 0;
      margin-top: 12px;

      width: 260px;
      max-width: 100%;
    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${newBackground.orange};

    }

    @media (max-width: 600px) {
      margin: 0 auto;

      ${props => props.isMobile ? `display: block;` : `display: none;`};

      .averageUserCost {
        color:${newBackground.white};
      }
      .simulationCost {
        color:${newBackground.yellow};
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
    color: ${newBackground.green};
    height: 8px;
    
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

    .sliderLabel {
      /* background-color: aqua; */
    }

    @media (max-width: 600px) {
      height: 10px;
      color: ${newBackground.orange};

      & .MuiSlider-thumb {
        background-color: ${newBackground.yellow};
        height: 22px;
        width: 22px;
      }

      & .MuiSlider-rail {
        background-color: ${newBackground.green};
        border: 1px solid ${newBackground.white};
        height: 5px;
      } 
    }

`;
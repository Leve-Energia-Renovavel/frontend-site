import { slideAndDisappear } from "@/app/pages/globalAnimations";
import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const HomeMainFormSimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 8px;

    margin: 0;

    text-align: center;

    .averageUserCost {
      font-family: "Graphie";
        font-size: 18px;
        font-weight: 500;
        color:${background.white};
        white-space: nowrap;

        min-width: 340px;

        margin-bottom: 20px;
    }

    .simulationCost {
      font-family: "Graphie";
      font-size: 21px;
      font-weight: 900;
      color:${background.yellow};
    }

    @media (max-width: 600px) {
      margin: 0 auto;

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
    
    margin: 19px auto 0 auto;
    
    max-width: 380px;
    
    & .MuiSlider-thumb {
        background-color: ${background.yellow};
        height: 20px;
        width: 20px;
      }
    
      & .MuiSlider-rail {
        background-color: ${background.green};
        border: 1px solid ${background.white};
        height: 5px;
      } 
      & .MuiSlider-valueLabel {
        background-color: ${background.white};
        color: ${background.green};
        border-radius: 5px;

        span {
          font-weight: 700;
        }
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
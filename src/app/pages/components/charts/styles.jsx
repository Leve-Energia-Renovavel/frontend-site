import styled from "@emotion/styled";
import { background } from "../../styles";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 800px;  // Set a max-width if needed
  max-height: 500px;  // Set a max-height if needed
  overflow: hidden;
`;

export const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;

  //chart total 
  .apexcharts-text {
    font-weight: 900;
  }  

  .apexcharts-xaxis-texts-g tspan {
    font-family: "Graphie";
    font-size: 14px;
    font-weight: 500;
  }  

  .apexcharts-xaxis-texts-g text {
        font-weight: 900; /* Example: setting font-weight to 900 */
    }
  
  //last bar always highlighted 
  .apexcharts-xaxis-texts-g text:nth-of-type(6) tspan {
  font-weight: 900;
}

`;
export const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
position: relative;

  top: 27px;
  left: -8px;

  p {
    font-family: "Graphie";
    font-size: 12px;
    font-weight: 600;
    color: ${background.green};
    margin-left: 15px;
  }
`;
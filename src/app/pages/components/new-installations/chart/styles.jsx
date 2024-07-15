import styled from "@emotion/styled";

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
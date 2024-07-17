import { newBackground } from "@/app/pages/styles";
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

export const ChartLegendContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 20px;
    margin-bottom: 15px;

    .chartLegend-0 {
    position: absolute;
    left: 20px;

    padding: 2px 4px;
    min-width: 156px;
    text-align: center;
    white-space: nowrap;

    border-radius: 5px;

    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.green};
    background-color: ${newBackground.grey};
  }
  .chartLegend-1 {
    position: absolute;
    left: 200px;

    padding: 2px 4px;
    min-width: 156px;
    text-align: center;
    white-space: nowrap;

    border-radius: 5px;


    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.green};
    background-color: ${newBackground.grey};
  }
  .chartLegend-2 {
    position: absolute;
    left: 370px;

    padding: 2px 4px;
    min-width: 156px;
    text-align: center;
    white-space: nowrap;


    border-radius: 5px;


    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.green};
    background-color: ${newBackground.grey};
  }
  .chartLegend-3 {
    position: absolute;
    left: 545px;

    padding: 2px 4px;
    min-width: 156px;
    text-align: center;
    white-space: nowrap;

    border-radius: 5px;


    font-family: "Graphie";
    font-weight: 600;
    color: ${newBackground.green};
    background-color: ${newBackground.grey};
  }
`
export const LegendDetail = styled.div`
    position: relative;
    top: -40px;


    width: 152px;

    padding: 0 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .withoutLeve, .withLeve {
      font-family: "Graphie";
      font-size: 12px;
      line-height: 14px;
      font-weight: 600;
      
      white-space: nowrap;
    }

    .withoutLeve {
      color: ${newBackground.greyDark};
    }
    .withLeve {
      color: ${newBackground.green};
    }
`
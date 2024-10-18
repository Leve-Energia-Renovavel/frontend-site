import { background } from "@/app/pages/styles";
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

    .chartLegend-0, .chartLegend-1, .chartLegend-2, .chartLegend-3 {
      font-family: "Graphie";
      font-weight: 600;
      color: ${background.green};
      background-color: ${background.grey};

      padding: 2px 4px;
      min-width: 156px;
      text-align: center;
      white-space: nowrap;

      border-radius: 5px;
    }

    .chartLegend-0 {
      position: absolute;
      left: 20px;
    }
    .chartLegend-1 {
      position: absolute;
      left: 200px;
    }
    .chartLegend-2 {
      position: absolute;
      left: 370px;
    }
    .chartLegend-3 {
      position: absolute;
      left: 545px;
    }

    @media (max-width: 900px) {
      .chartLegend-0, .chartLegend-1, .chartLegend-2, .chartLegend-3 {
        font-size: 12px;
        padding: 2px;
        min-width: 46px;
        width: fit-content;
      }
      .chartLegend-0 {
        position: absolute;
        left: 15px;
      }
      .chartLegend-1 {
        position: absolute;
        left: 78px;
      }
      .chartLegend-2 {
        position: absolute;
        left: 143px;
      }
      .chartLegend-3 {
        position: absolute;
        left: 220px;
      }

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
      color: ${background.greyDark};
    }
    .withLeve {
      color: ${background.green};
    }

    @media (max-width: 900px) {
      flex-direction: column;
    } 
`



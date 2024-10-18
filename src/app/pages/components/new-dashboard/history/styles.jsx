import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Divider, Switch } from "@mui/material"

export const DashboardHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.green};
    border-radius: 15px;
    
    width: 100%;
    max-width: 490px;

    .myHistory {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.white};

        white-space: nowrap;

        margin: 12px 1rem;
    }
`

export const DashboardHistoryTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 8px;

`
export const DashboardHistorySwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.yellow};
    }
`

export const DashboardHistoryContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 15px;

    padding: 0 1rem;

    width: 100%;
    max-width: 490px;
    height: 100%;
`
export const HistoryDivider = styled(Divider)`
    margin-top: auto;

`
export const HistoryChartLegend = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
    padding: 10px 1rem;
    
    margin-top: auto;
    
    @media (max-width: 900px) {
      padding: 6px 4px;
    }

`

const LegendBase = styled.p`
display: flex;
align-items: center;
    font-family: "Graphie";
    font-size: 11px;
    line-height: 14px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 15px;
    color: ${background.white};
    
    width: fit-content;
    height: auto;
    
    @media (max-width: 900px) {
        text-align: center;
        width: fit-content;
    }
`;

export const LegendPaid = styled(LegendBase)`
    background-color: ${background.green};
`;

export const LegendDue = styled(LegendBase)`
    background-color: ${background.orangeFocused};
    color: ${background.orange};
    `;
export const LegendExpired = styled(LegendBase)`
background-color: ${background.orange};
`;
export const LegendCarrier = styled(LegendBase)`
    background-color: ${background.grey};
    color: ${background.white};
`;




export const AntSwitch = styled(Switch)`
  width: 28px;
  height: 16px;
  padding: 0;
  display: flex;

  &:active {
    .MuiSwitch-thumb {
      width: 15px;
    }
    .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(9px);
    }
  }

  .MuiSwitch-switchBase {
    padding: 2px;

    &.Mui-checked {
      transform: translateX(12px);
      color: #fff;

      + .MuiSwitch-track {
        opacity: 1;
        background-color: ${background.yellow};
      }
    }
  }

  .MuiSwitch-thumb {
    color: ${background.yellow};
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: width 200ms;
  }

  .MuiSwitch-track {
    border: 2px solid ${background.yellow};

    border-radius: 8px;
    opacity: 1;
    
    background-color: ${background.green};
    box-sizing: border-box;
  }
`;
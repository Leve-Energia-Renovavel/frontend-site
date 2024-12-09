import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import { background } from "../../globalStyles";

export const NewInstallationsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${background.orange};
    }
    `
export const ConsumptionHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: auto;

    gap: 1rem;
    
    border-radius: 10px;
    padding: 1rem;
    background-color: ${background.white};
`
export const ConsumptionHistoryTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ConsuptiomHistorySwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        color: ${background.green};
    }
`
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
        background-color: ${background.white};
      }
    }
  }

  .MuiSwitch-thumb {
    color: ${background.green};
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: width 200ms;
  }

  .MuiSwitch-track {
    border: 2px solid ${background.green};

    border-radius: 8px;
    opacity: 1;
    
    background-color: ${background.white};
    box-sizing: border-box;
  }
`;

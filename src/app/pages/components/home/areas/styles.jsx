import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { CircleNotifications } from "@mui/icons-material"

export const HomeAreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${newBackground.white};
  gap: 2rem;

  .map {
      width: 100%;
      max-width: 572px;
      height: auto;
    }

  .areasTitle {
    font-family: "Graphie";
    font-size: 34px;
    line-height: 30px;
    font-weight: 600;
    color: ${newBackground.green};
  }

  @media (max-width: 600px) {
    .areasTitle {
      font-size: 26px;
      line-height: 26px;
    }

    .map {
      width: 80%;
      height: auto;
    }
  }
`
export const LegendIcon = styled(CircleNotifications)`
`

export const MapLegendContainer = styled.div`
`

export const MapLegend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  .legendIcon {
    color: ${props => props.hasFactory ? newBackground.orange : newBackground.green};
  }
  
  .legendDescription {
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    color: ${props => props.hasFactory ? newBackground.orange : newBackground.green};
  }
`
export const AreaListContainer = styled.div`
  margin-top: -1rem;

  .areaList {
    font-family: "Graphie";
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: ${newBackground.green};
  }

  .highlighted {
    font-weight: 700;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    .areaList {
      text-align: center;
      max-width: 200px;
    }
  }
`

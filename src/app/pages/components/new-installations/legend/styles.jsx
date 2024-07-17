import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export const LegendDetailLegend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: fit-content;

  gap: 6px;
  margin-left: auto;

  `
export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 9px;
  background-color: ${props => props.backgroundColor};

  span {
    font-family: "Graphie";
    font-size: 11px;
    line-height: 13px;
    font-weight: 600;
    color: ${props => props.fontColor};
    
    white-space: nowrap;
  }
`
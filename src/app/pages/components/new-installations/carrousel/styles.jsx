import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const CarrouselContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CarrouselContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const ArrowBack = styled(ArrowBackIosIcon)`
    color: ${props => props.disabled ? newBackground.greyDark : newBackground.green};
    width: 30px;
    height: 30px;

    margin: auto;
    border-radius: 20px;
    padding: 4px 4px 4px 6px;

    border: 2px solid ${props => props.disabled ? newBackground.greyDark : newBackground.green};

    background-color: ${newBackground.white};
    
    &:hover {
        background-color:  ${props => props.disabled ? "" : newBackground.green};
        color:  ${props => props.disabled ? "" : newBackground.white};
        cursor: pointer;
    }
`

export const ArrowForward = styled(ArrowForwardIosIcon)`
    color: ${props => props.disabled ? newBackground.greyDark : newBackground.green};
    width: 30px;
    height: 30px;

    margin: auto;
    border-radius: 20px;
    padding: 6px;
    text-align: center;
    border: 2px solid ${props => props.disabled ? newBackground.greyDark : newBackground.green};

    background-color: ${newBackground.white};

    &:hover {
        background-color:  ${props => props.disabled ? "" : newBackground.green};
        color:  ${props => props.disabled ? "" : newBackground.white};
        cursor: pointer;
    }
`

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

`

export const Dot = styled(FiberManualRecordIcon)`
    color: ${props => props.selected ? newBackground.green : newBackground.greyDark};
    width: 10px;
    height: auto;

    
    &:hover {
        color: ${newBackground.orange};
        cursor: pointer;
    }
`
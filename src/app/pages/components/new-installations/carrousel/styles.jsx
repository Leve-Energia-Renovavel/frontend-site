import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const CarrouselContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CarrouselContentContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 900px) {
        max-width: 265px;
    }
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
    
    @media (max-width: 900px) {
        width: 25px;
        height: 25px;
        padding: 2px 2px 2px 4px;
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

    @media (max-width: 900px) {
        width: 25px;
        height: 25px;
        padding: 3px;
    }
`

export const InfoIcon = styled(InfoOutlinedIcon)`
    width: 20px;
    height: auto;
    color: ${newBackground.green};
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 2px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};
    }
    
    &:hover {
        cursor: pointer;
        
        span {
            text-decoration: underline;
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`


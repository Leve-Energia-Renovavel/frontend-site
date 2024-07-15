import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";


import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const CarrouselContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CarrouselContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const ArrowBack = styled(ArrowCircleLeftOutlinedIcon)`
    color: ${props => props.disabled ? newBackground.greyDark : newBackground.green};
    width: 40px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`

export const ArrowForward = styled(ArrowCircleRightOutlinedIcon)`
    color: ${props => props.disabled ? newBackground.greyDark : newBackground.green};
    width: 40px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`
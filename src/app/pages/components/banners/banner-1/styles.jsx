import styled from "@emotion/styled"
import { background } from "../../../styles"
import img from "../../../../../resources/img/person-banner.png"

export const BannerContainer = styled.div`
    display: flex;
    background-color: ${background.blueLeve};
    height: 93dvh;
    max-width: 100dvw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    padding-top: 8dvh;  //margin for header
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${background.light};
    
    h1, span{
        font-family: "Metropolis";
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;
        color: ${background.light};
    }
    
    .highlighted {
        color: ${background.yellowLeve};
        
    }
`

export const BannerTitleContainer = styled.div`
    width: 35dvw;
    height: 7.5rem;
    flex-shrink: 0;
    margin-bottom: 1.5rem;
    margin-right: 1.7rem;
`;

export const BannerSubTitleContainer = styled.div`
    width: 33.625rem;
    height: 3.39388rem;
    flex-shrink: 0;
    margin-bottom: 3rem;
    
    .subtitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.125rem; /* 112.5% */
    }

`;

export const BannerButton = styled.button`
        background-color: ${background.yellowLeve};
        border-radius: 0.5rem;
        display: inline-flex;
        height: 3.01675rem;
        padding: 0.75rem 2.375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        cursor: pointer;
        margin-bottom: 10rem;

        span {
            color:${background.blueLeve};
            font-family: Metropolis;
            font-weight: 600;
            font-size: 1rem;
            font-style: bold;
            line-height: normal;
        }

        &:hover {
            background-color: ${background.white};
        }
`;

export const BannerImageContainer = styled.div`
    filter: drop-shadow(0 0 10vw rgba(255, 255, 0, 2)); 
    
    .logoImage {
        width: auto;
        height: auto;
        }
`
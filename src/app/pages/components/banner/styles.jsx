import styled from "@emotion/styled"
import { background } from "../../styles"


export const BannerContainer = styled.div`
    display: flex;
    background-color: ${background.primary};
    height: 80vh;
    flex-direction: row;
    align-items: center;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${background.light};
    padding: 2rem;
    max-width: 40vw;
    
    .title{
        font-family: -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;
        font-style: bold;
        font-weight: 700;
        font-size: 2.5rem;
        color: ${background.light};
        margin-bottom: 1.2rem;
        
    }
    
    .highlighted {
        color: ${background.secondary};
        
    }
    .bannerSubtitle {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: ${background.light};
        padding: 1rem;

    }
`
export const BannerImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
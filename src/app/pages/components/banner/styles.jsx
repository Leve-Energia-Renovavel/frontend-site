import styled from "@emotion/styled"
import { background } from "../../styles"


export const BannerContainer = styled.div`
    display: flex;
    background-color: ${background.primary};
    height: 80vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 8vh;  //margin for header
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${background.light};
    padding: 2rem;
    max-width: 40vw;
    
    h1, span{
        font-family: -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;
        font-style: bold;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2rem;
        color: ${background.light};
        margin-bottom: 1.2rem;
        max-width: 32vw;
    }
    
    .highlighted {
        color: ${background.secondary};
        
    }
    .bannerSubtitle {
        font-style: normal;
        font-size: 1.2rem;
        color: ${background.light};
        line-height: 1rem;
        max-width: 30vw;
    }
    
`
export const BannerImageContainer = styled.div`
  border-radius: 1rem; 
  overflow: hidden;
  filter: drop-shadow(0 0 10vw rgba(255, 255, 0, 0.8)); 

        img {
            height: auto;
            width: auto;
            border-radius: 1rem;
        }
`
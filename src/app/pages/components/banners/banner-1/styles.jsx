import styled from "@emotion/styled"
import { background } from "../../../globalStyles"

export const BannerContainer = styled.div`
    display: flex;
    background-color: ${background.blueLeve};
    height: 94dvh;
    max-width: 100dvw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    padding-top: 8dvh;  //margin for header
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        height: 90dvh;
        padding-top: 15dvh; 
        max-width: 100dvw;
    }
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${background.light};
    
    h1, span{
        font-family: "Graphie";
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;
        color: ${background.light};
        
        @media (max-width: 600px) {
            font-size: 2rem;
            line-height: 1.5rem;
        }
    }
    
    .highlighted {
        color: ${background.yellowLeve};
        
    }
    
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
    }
`

export const BannerTitleContainer = styled.div`
    width: 35dvw;
    flex-shrink: 0;
    margin-bottom: 1.5rem;
    margin-right: 1.7rem;
    
    h1, span{
        font-family: "Graphie", sans-serif, system-ui, -apple-system;
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;

        @media (max-width: 600px) {
            font-size: 1.8rem;
            line-height: 1.8rem;
        }
    }
    
    @media (max-width: 1600px) {
        width: 42dvw;
        text-align: left;
        margin-top: 4rem;
    }
    @media (max-width: 900px) {
        width: 70dvw;
        flex-wrap: wrap;
        text-align: left;
        padding: 0 5rem;
        margin-bottom: 1.5rem;
        margin-right: 0;
        margin-left: 5rem;
    }
    @media (max-width: 600px) {
        width: 90dvw;
        flex-wrap: wrap;
        margin: 0 auto;
        text-align: center;
        padding: 0 2rem;
    }
`;

export const BannerSubTitleContainer = styled.div`
    width: 33.625rem;
    height: 3.39388rem;
    flex-shrink: 0;
    margin-bottom: 3.5rem;
    
    @media (max-width: 900px) {
        width: 70dvw;
        flex-wrap: wrap;
        text-align: left;
        padding: 0 5rem;
        margin-bottom: 1.5rem;
        margin-right: 0;
        margin-left: 5rem;
    }

    @media (max-width: 600px) {
        display: none;
    }
    .subtitle {
        color: ${background.white};
        font-family: "Inter";
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.125rem;
    }

`;

export const BannerButton = styled.button`
        background-color: ${background.yellowLeve};
        border-radius: 0.5rem;
        display: inline-flex;
        height: 3rem;
        padding: 0.75rem 2.375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        cursor: pointer;
        margin-bottom: 10rem;

        span {
            color:${background.blueLeve};
            font-family: Graphie;
            font-weight: 600;
            font-size: 1rem;
            font-style: bold;
            line-height: normal;
            
            @media (max-width: 600px) {
                font-size: 1rem;
                font-weight: 400;
            }
        }

        &:hover {
            background-color: ${background.white};
        }

        @media (max-width: 900px) {
                font-size: 1rem;
                height: 3rem;
                margin-top: 2rem;
                margin-left: 10rem;

        }
        @media (max-width: 600px) {
            font-size: 1rem;
            height: 3rem;
            padding: 0.75rem 2.375rem;
            margin-bottom: 2rem;
            margin-top: 1rem;
            margin-left: 0;
        }
`;

export const BannerImageContainer = styled.div`
    filter: drop-shadow(0 0 10vw rgba(255, 255, 0, 2)); 

    @media (max-width: 900px) {
        margin-right: 5rem;
        margin-left:0;
    }
    @media (max-width: 600px) {
        text-align: center;
        margin: 0 auto;
        max-width: 100vw;
    }
    
    .logoImage {
        width: 100%;
        height: auto;
        
        @media (min-width: 1900px) and (max-width: 2000px) {
            width: 28rem;
            height: auto;
        }
        @media (max-width: 1800px) {
            width: 24rem;
            height: auto;
        } 
        @media (max-width: 1600px) {
            width: 22rem;
            height: auto;
        } 
        @media (max-width: 1200px) {
            width: 25rem;
            height: auto;
        }
       
        @media (max-width: 800px) {
            width: 20rem;
            height: auto;
        }
        @media (max-width: 600px) {
            width: 20rem;
            height: auto;
        }
        @media (max-width: 400px) {
            width: 14rem;
            height: auto;
        }
        
    }

`
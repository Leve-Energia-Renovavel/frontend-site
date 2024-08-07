import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const FactoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    background-color: ${newBackground.white};
    border-radius: 15px;
    
    @media (max-width: 900px) {
        flex-direction: column-reverse;
    }
`


export const FactoryInfoContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;  
    
    border-radius: 15px;
    
    width: 100%;
    max-width: 287px;
    
    height: auto;
    
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;

    @media (max-width: 900px) {
        max-width: 100%;
    }

`
export const FactoryDescription = styled.div`
    display: flex;
    flex-direction: column;  
    background-color: ${newBackground.green};

    padding: 1rem;

    border-radius: 15px;

    margin-top: auto;

    width: 100%;
    max-width: 287px;

    min-height: 148px;
    max-height: 148px;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.white};
    }

    .factoryName {
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.yellow};

        margin-top: 37px;
    }
    .factoryLocation {
        font-size: 17px;
        line-height: 21px;
        font-weight: 300;
        color: ${newBackground.white};
    }

    @media (max-width: 900px) {
        max-width: 100%;
        max-height: 100%;

        margin-top: 8rem;

    }
`

export const FactoryMainContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column; 
    
    width: 100%;
    max-width: 522px;
    
    padding: 0 1rem 1rem 3rem;
    
    gap: 1rem;
    
    @media (max-width: 900px) {
        padding: 10px;
       gap: 10px;
    }
`
export const MainContentInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .infoDescription {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.green};

        max-width: 230px;
    }

    .leveTopBanner {
        width: 100%;
        max-width: 87px;
        height: auto;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 1rem;

    @media (max-width: 900px) {
        gap: 10px;
    }
    
`
export const MainContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    padding: 10px;

    width: 100%;
    max-width: 220px;

    gap: 10px;

    .iconHeight {
        height: 100%;
        max-width: 27px;
        width: auto;
    }
    .iconWidth {
        width: 100%;
        max-width: 40px;
        height: auto;
    }

    .infoTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 18px;
        font-weight: 600;
        color: ${newBackground.green};

        max-width: 190px;
    }
    .infoValue {
        font-family: "Graphie";
        font-size: 19px;
        line-height: 21px;
        font-weight: 700;
        color: ${newBackground.green};
        background-color: ${newBackground.yellow};

        width: fit-content;
    }


    @media (max-width: 900px) {
        justify-content: center;
        max-width: 145px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }

    @media (min-width: 425px) and (max-width: 700px) {
        justify-content: center;
        max-width: 180px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }

    @media (min-width:  350px) and (max-width: 410px) {
        justify-content: center;
        max-width: 145px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }


`

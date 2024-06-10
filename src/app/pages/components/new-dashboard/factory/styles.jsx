import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const FactoryContainer = styled.div`
    display: flex;
    flex-direction: row;

    background-color: ${newBackground.white};
    border-radius: 15px;
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
`

export const FactoryMainContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column; 

    width: 100%;
    max-width: 522px;

    padding: 0 1rem 1rem 3rem;

    gap: 1rem;
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

        max-width: 253px;
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

`
export const MainContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    padding: 10px;

    width: 100%;
    max-width: 220px;

    gap: 10px;

    .infoIcon {
        width: 100%;
        max-width: 32px;
        height: 100%;
        max-height: 32px;
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
`

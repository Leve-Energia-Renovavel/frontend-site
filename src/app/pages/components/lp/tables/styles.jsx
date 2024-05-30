import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Divider } from "@mui/material";


export const EconomyTableContainer = styled.div`
    width: 100%;
    max-width: 100vw;

    margin: 0 auto;
    margin-top: 36px;

    padding: 2rem;

    background-color: ${newBackground.green};

`
export const EconomyTableContent = styled.div`
    display: flex;
    flex-direction: column;
    `
export const EconomyTableTitleContainer = styled.div`
    text-align: center;

    margin-top: 42px;

    .economyTableTitle {
        font-family: "Graphie";
        font-size: 42px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.white};
    }
`
export const TableContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin: 0 auto;

    margin-top: 41px;
`
export const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;


    gap: 10px;

    width: 590px;

    .tableAddIcon {
        position: absolute;
        z-index: 99;
        text-align: center;
        border-radius: 30px;
        background-color: ${newBackground.yellow};
        border: 2px solid ${newBackground.green};
        
        padding: 0px 7px;
        
        max-width: 40px;
        max-height: 40px;
        
        right: 275px;
        top: 182px;
        color: ${newBackground.green};
        font-weight: 700;
        font-size: 30px;
    }
`
export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 50px;

    p, span {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 500;
    }

    .highlighted {
        font-weight: 700;
    }
`

export const TableHeaderOne = styled(TableHeader)`
    background-color: ${newBackground.orange};
    width: 287px;

    margin-left: auto;

    color: ${newBackground.white};
    `
export const TableHeaderTwo = styled(TableHeader)`
    background-color: ${newBackground.yellow};
    width: 590px;
    color: ${newBackground.green};

    .economyIcon {
        width: 32px;
        height: 32px;
        margin-right: 11px;
    }
`

export const TableCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`



export const TableCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 287px;
    height: 275px;
    border-radius: 15px;
`

export const TableCardOne = styled(TableCard)`
    background-color: ${newBackground.green};
    text-align: start;
    
    p, span {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.yellow};
    }
    .taxes {
        font-size: 14px;
        font-weight: 400;
        margin-left: 10px;
    }
    .cardOneContent {
        margin-top: auto;
        margin-bottom: 8px;
    }
`
export const TableCardTwo = styled(TableCard)`
    text-align: center;
    background-color: ${newBackground.greenLight};

    p {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.green};
    }

    .tinyValue {
        font-size: 14px;
        line-height: 21px;
    }
    .thinValue {
        color: ${newBackground.greenSoft};
    }
    .boldValue {
        font-weight: 800;
    }
`
export const TableCardThree = styled(TableCard)`
    text-align: center;
    background-color: ${newBackground.white};

    p {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.green};
    }
    
    span, .tinyValue {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }
    .thinValue {
        color: ${newBackground.greenSoft};
    }
    .boldValue {
        font-weight: 800;
    }

    .highlighted {
        background-color: ${newBackground.yellow};
    }
`

export const TableCardTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;

    padding: 1rem;

    .cardTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 700;
        color: ${newBackground.green};
    }

    .boletoLeve {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 700;
        color: ${newBackground.orange};
        padding: 0 8px;
        border: 1px solid ${newBackground.orange};
        border-radius: 15px;
    }

    .logoLeve {
        width: 150px;
        height: auto;
    }
`



export const CardDivider = styled(Divider)`
    border-width: 1px;
    margin: 10px 0;
`
export const CardDividerOne = styled(CardDivider)`
    background-color: ${newBackground.greenLight};
`
export const CardDividerTwo = styled(CardDivider)`
    background-color: ${newBackground.green};
    margin: 10px 1rem;
`

export const TableFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1200px;
    margin: 0 auto;

`
export const TableFooterDescription = styled.div`
    text-align: left;

    p {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 15px;
        font-weight: 100;
        color: ${newBackground.white};

        max-width: 269px;
    }
`
export const TableFooterDiscount = styled.div`
    display: flex;
    flex-direction: row;
    padding: 18px;
    border-radius: 15px;
    border: 1px solid ${newBackground.yellow};

    margin-top: 30px;

    gap: 36px;

`



export const TableFooterDiscountValue = styled.div`
    text-align: center;

    .value{
        font-family: "Graphie";
        font-size: 34px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.yellow};
    }
    .description{
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.white};

        margin-top: 8px;
    }

`

export const TableFooterButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 18px;


    margin-right: 8rem;
`
export const TableFooterButton = styled.div`
    background-color: ${newBackground.yellow};
    border-radius: 20px;
    padding: 10px 18px;
    color: ${newBackground.green};

    span {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};
    }
    
    &:hover {
        cursor: pointer;
        
        span {
            font-weight: 700;
            text-decoration: underline;

        }
    }
`
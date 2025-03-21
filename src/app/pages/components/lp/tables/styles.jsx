import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const EconomyTableContainer = styled.div`
    width: 100%;
    max-width: 100vw;

    margin: 0 auto;
    margin-top: 36px;

    padding: 2rem;

    background-color: ${background.green};
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
        color: ${background.white};
    }

    @media (max-width: 900px) {
       flex-wrap: wrap;
       margin-top: 20px;

       .economyTableTitle {
        font-size: 27px;
        line-height: 29px;
        }
    }
`
export const TableContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin: 0 auto;

    margin-top: 41px;

    @media (max-width: 900px) {
       flex-wrap: wrap;
       margin-top: 0px;
    }
`
export const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    gap: 10px;

    width: 100%;
    max-width: 590px;

    .tableAddIcon {
        position: absolute;
        z-index: 99;
        text-align: center;
        border-radius: 30px;
        background-color: ${background.yellow};
        border: 2px solid ${background.green};
        
        padding: 0px 7px;
        
        max-width: 40px;
        max-height: 40px;
        
        right: 255px;
        top: 182px;
        color: ${background.green};
        font-weight: 700;
        font-size: 30px;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;

        .tableHeaderOne {
            display: none;
        }
        .tableAddIcon {
            right: 135px;
            top: 330px;
        }
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
    background-color: ${background.orange};
    width: 287px;

    margin-left: auto;
    
    color: ${background.white};
    
    @media (max-width: 900px) {
        margin-left: 0;
    }
`
export const TableHeaderTwo = styled(TableHeader)`
    background-color: ${background.yellow};
    width: 100%;
    max-width: 590px;
    color: ${background.green};

    .economyIcon {
        width: 32px;
        height: 32px;
        margin-right: 11px;
    }

    @media (max-width: 900px) {
        padding: 0 8px;
        max-width: max-content;

        .economyIcon {
            width: 28px;
            height: 28px;
            margin-right: 4px;
        }
    }
`

export const TableCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .hiddenTableHeaderOne {
        display: none;
    }

    @media (max-width: 900px) {
        flex-direction: column;

        .hiddenTableHeaderOne {
            display: flex;
            align-items: center;
        }

  }
`



export const TableCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 287px;
    height: 275px;
    border-radius: 15px;

    @media (max-width: 900px) {
        width: 287px;
    }
`

export const TableCardOne = styled(TableCard)`
    background-color: ${background.green};
    text-align: start;
    width: 287px;
    
    p, span {
        white-space: nowrap;
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.yellow};
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

    @media (max-width: 900px) {
        width: 100%;
        max-width: 287px;
    }



`
export const TableCardTwo = styled(TableCard)`
    text-align: center;
    background-color: ${background.greenLight};


    p {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.green};
    }

    .tinyValue {
        font-size: 14px;
        line-height: 21px;
    }
    .thinValue {
        color: ${background.greenSoft};
    }
    .boldValue {
        font-weight: 800;
    }

    .churros {
        margin-right: auto;
    }
`
export const TableCardThree = styled(TableCard)`
    text-align: center;
    background-color: ${background.white};

    p {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.green};
    }
    
    span, .tinyValue {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }
    .thinValue {
        color: ${background.greenSoft};
    }
    .boldValue {
        font-weight: 800;
    }

    .highlighted {
        background-color: ${background.yellow};
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
        white-space: nowrap;
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 700;
        color: ${background.green};
    }

    .boletoLeve {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 700;
        color: ${background.orange};
        padding: 0 8px;
        border: 1px solid ${background.orange};
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
    background-color: ${background.greenLight};
`
export const CardDividerTwo = styled(CardDivider)`
    background-color: ${background.green};
    margin: 10px 1rem;
`

export const TableFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1070px;
    margin: 0 auto;

    @media (max-width: 900px) {
        flex-direction: column;
    }

`
export const TableFooterDescription = styled.div`
    text-align: left;

    p {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 15px;
        font-weight: 100;
        color: ${background.white};

        max-width: 269px;
    }

    @media (max-width: 900px) {
        margin-top: 1rem;
    }
`
export const TableFooterDiscount = styled.div`
    display: flex;
    flex-direction: row;
    padding: 18px;
    border-radius: 15px;
    border: 1px solid ${background.yellow};

    margin-top: 30px;

    gap: 36px;

    @media (max-width: 900px) {
        flex-wrap: wrap;
        justify-content: center;
    }

`



export const TableFooterDiscountValue = styled.div`
    text-align: center;

    .value{
        font-family: "Graphie";
        font-size: 34px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.yellow};
    }
    .description{
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.white};

        margin-top: 8px;
    }

`

export const TableFooterButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 18px;

    margin-right: 8rem;

    @media (max-width: 900px) {
        margin: 0;
    }
`
export const TableFooterButton = styled.div`
    background-color: ${background.yellow};
    border-radius: 20px;
    padding: 10px 18px;
    color: ${background.green};

    span {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};
    }
    
    &:hover {
        cursor: pointer;
        
        span {
            font-weight: 700;
            text-decoration: underline;

        }
    }
`
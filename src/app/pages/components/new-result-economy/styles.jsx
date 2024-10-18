import styled from "@emotion/styled";
import PercentIcon from '@mui/icons-material/Percent';
import { Slider } from "@mui/material";
import { background } from "../../styles";


export const SimulateContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    border-radius: 20px;
    
    margin: 0 auto;
    padding: 1rem;
    
    width: 100%;
    max-width: 100vw;

    min-height: 450px;
    
    @media (max-width: 600px) {
        padding: 10px;
    }
`

export const SimulateHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${background.yellow};

    border-radius: 10px;

    padding: 12px;

    .goodNews{
        display: block;
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};
    }
    
    h6 {
        font-family: "Graphie";
        font-size: 17px;
        margin-left: 60px;
        font-weight: 500;
        color: ${background.green};
        
        @media (max-width: 600px) {
            margin: 10px 10px;
            line-height: 17px;
        }
    }
    .bold {
        font-weight: 600;
    }

    @media (max-width: 600px) {
        max-width: 100vw;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`
export const CouponAppliedContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orange};
    border-radius: 15px;
    padding: 1rem;

    position: absolute;
    top: 155px;
    left: 66%;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        text-align: center;
        color: ${background.white};
    }

    .couponValue {
        color: ${background.green};
        font-size: 17px;
        line-height: 20px;
        padding: 2px;
        border-radius: 4px;
        font-weight: 700;
        background-color: ${background.yellow};
    }

    .firstMonthOnly { 
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        top: 600px;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: auto;
        margin: 0 60px;
        left: 0%;
        padding: 4px;
    }
`
export const SimulateHeaderGoodNews = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${background.white};

    gap: 1rem;

    min-height: 200px;
    
    padding: 71px 202px 80px 202px;
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        padding: 35px 1rem;
        gap: 2rem;
    }
`

export const TodayEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orangeTranslucent};

    border: 1px solid ${background.orange};
    border-radius: 15px;

    padding: 16px;

    gap: 8px;

    width: 388px;
    height: 180px;

    .todayEconomyTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.orange};
        text-align: center;

        margin: 0 auto;
    }

    .sliderTitle {
        font-family: "Graphie";
        font-size: 14px;
        font-weight: 500;
        color: ${background.orange};
        text-align: center;

        margin-top: 16px;
    }
`

export const TodayCost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    margin: 0 auto;

    .monetary {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 120%;        
        font-weight: 600;
        color: ${background.orange};
    }
    .todayCost {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 700;
        color: ${background.orange};
        text-align: center;
    }
`


export const TodayEconomy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;


`







export const LeveEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.greenLight};

    border: 1px solid ${background.green};
    border-radius: 15px;


    width: 388px;
    height: auto;

    .leveEconomyTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 400;
        color: ${background.white};
        text-align: center;

        white-space: nowrap;
    }
`
export const LeveEconomyContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.green};
    border-radius: 15px;

    width: 100%;
    height: auto;

    padding: 1rem;



`
export const LeveEconomy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;

    padding: 10px;

    .monetary {
        font-family: "Graphie";
        font-size: 20px;
        line-height: 20px;
        font-weight: 400;
        color: ${background.yellow};
    }

    .leveEconomyValue {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 700;
        color: ${background.yellow};
        text-align: center;
    }
`

export const LeveEconomySecondaryContentContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 30px;

    padding: 14px 34px;
    
    @media (max-width: 1250px) {
        align-items: center;
        padding: 1rem 1rem;
    }
    @media (max-width: 600px) {
        align-items: center;
        padding: 1rem 1rem;
    }
`
export const LeveEconomySecondaryContent = styled.div`
    display: flex;
    flex-direction: column;

    h6 {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
        color: ${background.white};
    }
    
    .economyDifference {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${background.yellow};

        white-space: nowrap;
    }

    .underlined { 
        font-weight: 700;
        text-decoration: underline;
    }
`
export const PercentageIcon = styled(PercentIcon)`
    color: ${background.yellow};
    width: 40px;
    height: 40px;

    padding: 3px;
    border: 4px solid ${background.yellow};
    border-radius: 30px;
`


export const SimulateFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${background.green};

    border-radius: 15px;

    padding: 12px;
    
    margin: 0 auto;
    width: 100%;
    max-width: 1196px;


    h6 {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 300;
        text-align: center;
        color: ${background.white};
        
        @media (max-width: 600px) {
            line-height: 22px;
        }
    }
    
    .underlined {
        font-weight: 500;
        text-decoration: underline;
    }
    .yearEconomyValue {
        font-size: 34px;
        padding: 10px;
        text-decoration: underline;
        font-weight: 700;
        color: ${background.yellow};
        
        @media (max-width: 600px) {
            font-size: 27px;
            white-space: nowrap;
            display: block;
            line-height: 20px;
        }
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;
        text-align: center;
        padding: 2rem;
        margin-bottom: 1rem;
        margin-top: 12px;
    }
`


export const SimulationContainer = styled.div`
    padding: 10px;
    margin: 0 auto;
    

`

export const SimulationSlider = styled(Slider)`
    color: ${background.orange};
    height: 8px;
    max-width: 300px;

    margin: 0 auto;
    
    & .MuiSlider-thumb {
        background-color: ${background.orangeLight};
        height: 16px;
        width: 16px;
    }
    
    & .MuiSlider-rail {
      background-color: ${background.orangeHigh};
      height: 8px;
      opacity: 1;
      border: 1px solid ${background.yellow};
    } 

`;
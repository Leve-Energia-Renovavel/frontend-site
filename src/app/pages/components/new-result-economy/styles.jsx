import styled from "@emotion/styled";
import PercentIcon from '@mui/icons-material/Percent';
import { Slider } from "@mui/material";
import { newBackground } from "../../styles";


export const SimulateContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
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
    background-color: ${newBackground.yellow};

    border-radius: 10px;

    padding: 12px;

    .goodNews{
        display: block;
        font-family: "Graphie";
        font-size: 21px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};
    }
    
    h6 {
        font-family: "Graphie";
        font-size: 17px;
        margin-left: 60px;
        font-weight: 500;
        color: ${newBackground.green};
        
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
    background-color: ${newBackground.orange};
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
        color: ${newBackground.white};
    }

    .couponValue {
        color: ${newBackground.green};
        font-size: 17px;
        line-height: 20px;
        padding: 2px;
        border-radius: 4px;
        font-weight: 700;
        background-color: ${newBackground.yellow};
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
    background-color: ${newBackground.white};

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
    background-color: ${newBackground.orange};

    border: 1px solid ${newBackground.orange};
    border-radius: 15px;

    width: 388px;
    height: 180px;

    .sliderTitle {
        font-family: "Graphie";
        font-size: 14px;
        font-weight: 500;
        color: ${newBackground.white};
        text-align: center;
    }
`
export const TodayEconomyContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    border-radius: 15px;
    
    width: 100%;
    height: auto;

    padding: 1rem;

    h6 {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.orange};
        text-align: center;

        margin-left: 2rem;  //double of value margin to align vertically
    }
`
export const TodayEconomy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;

    .today {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 700;
        color: ${newBackground.orange};
        text-align: start;

        border: 1px solid ${newBackground.orange};
        border-radius: 30px;
        padding: 2px 8px;
    }

    .value {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 700;
        color: ${newBackground.orange};
        text-align: center;

        margin-left: 1rem;
    }
`







export const LeveEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.green};

    border: 1px solid ${newBackground.green};
    border-radius: 15px;


    width: 388px;
    height: auto;
`
export const LeveEconomyContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.yellow};
    border-radius: 15px;

    width: 100%;
    height: auto;

    padding: 1rem;

    h6 {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.green};
        text-align: center;
    }

`
export const LeveEconomy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;

    .value {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 700;
        color: ${newBackground.green};
        text-align: center;

        margin-left: 1rem;
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
        color: ${newBackground.white};
    }
    
    .economyDifference {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${newBackground.yellow};

        white-space: nowrap;
    }

    .underlined { 
        font-weight: 700;
        text-decoration: underline;
    }
`
export const PercentageIcon = styled(PercentIcon)`
    color: ${newBackground.yellow};
    width: 40px;
    height: 40px;

    padding: 3px;
    border: 4px solid ${newBackground.yellow};
    border-radius: 30px;
`


export const SimulateFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${newBackground.green};

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
        color: ${newBackground.white};
        
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
        color: ${newBackground.yellow};
        
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

    .sliderTitle {
        white-space: nowrap;
    }
`

export const SimulationSlider = styled(Slider)`
    color: ${newBackground.yellow};
    height: 8px;
    max-width: 300px;

    margin: 0 auto;
    
    & .MuiSlider-thumb {
        background-color: ${newBackground.yellow};
        height: 12px;
        width: 12px;
    }
    
    & .MuiSlider-rail {
      background-color: ${newBackground.orange};
      height: 8px;
      opacity: 1;
      border: 1px solid ${newBackground.yellow};
    } 

`;
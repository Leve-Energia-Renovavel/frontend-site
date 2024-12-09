import styled from "@emotion/styled";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Button, CircularProgress, Slider, TextField } from "@mui/material";
import { background, notification } from "../../globalStyles";
import CloseIcon from '@mui/icons-material/Close';

export const EconomyResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    border-radius: 20px;
    
    margin: 0 auto;
    margin-top: 16px;

    width: 100%;
    /* max-width: 1366px; */
    max-width: 877px;

    min-height: 450px;
    height: 100%;
    
    @media (max-width: 600px) {
        margin-top: 2px;
        border-radius: 0px;
    }
`

export const EconomyResultTitleContainer = styled.div`

    padding: 1rem;

    min-width: 380px;
    width: 100%;
    max-width: fit-content;

    margin: 0 auto;

    .economyResultTitle {
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 600;
        line-height: 120%; 
        color: ${background.green};

        white-space: nowrap;
    }

    @media (max-width: 600px) {
        text-align: center;

        .economyResultTitle {
            white-space: normal;
            max-width: 330px;
        }
    }
`
export const EconomyResultHeader = styled.div`
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
    
    .levesInYourArea {
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
export const GoodNewsHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
`

export const LeveEconomyDisclaimer = styled.div`

    min-width: 340px;
    width: 100%;
    max-width: 343px;

    margin-bottom: 24px;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 120%; 
        font-style: normal;
        font-weight: 400;
        color: ${background.greyMediumHigh};
    }

    @media (max-width: 600px) {
        flex-wrap: wrap;
        padding: 0px;

        p {
            max-width: 330px;
        }
    }

    @media (max-width: 400px) {
        .leveEconomyDisclaimer {
            right: 20px;
        }
    }
`

export const TodayEconomyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${background.white};

    gap: 1rem;

    min-height: 200px;
    
    padding: 0px 202px 0px 202px;

    @media (max-width: 600px) {
        flex-wrap: wrap;
        padding: 0px;
    }
`

export const TodayEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.orangeTranslucent};
    border: 1px solid ${background.orange};

    position: relative;
    
    border-radius: 8px;

    padding: 16px;

    gap: 8px;

    min-width: 380px;
    /* width: 100%;
    max-width: 790px; */

    width: 388px;
    max-width: 388px;

    height: 180px;

    .todayEconomyTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 400;
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

        /* margin-top: 16px; */
    }

    .lowCostDisclaimer {
        font-family: "Graphie";
        font-size: 13px;
        font-weight: 500;
        color: ${notification.alert};
        text-align: center;
    }

    @media (max-width: 600px) {
        min-width: 340px;
        width: 342px;
        max-width: 342px;
    }
`

export const ArrowDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;
    background-color: ${background.green};

    top: 166px;
    right: 185px;
    
    border-radius: 30px;
    
    width: 100%;
    max-width: 24px;
    
    height: 100%;
    max-height: 24px;
    
    @media (max-width: 600px) {
        right: 160px;
    }
`
export const TodayCostContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    border-bottom: 1px solid ${background.orange};
    /* border-bottom: ${props => props.isEdition ? "3px " : "1px"} solid ${background.orange}; */
    
    margin: 0 auto;

    width: fit-content;
    max-width: 388px;

    .monetary {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 120%;        
        font-weight: 600;
        color: ${background.orange};
    }

    .editErrorTodayCostIcon,.editOkTodayCostIcon, .editTodayCostIcon {
        cursor: pointer;
    }
`

export const TodayCostValue = styled(TextField)`

    ${props => props.isEdition && `background-color: ${background.white}`};

    & fieldset {
        border: none;
    }     

  & .MuiOutlinedInput-root {
    border: none; /* Remove the default border */
    border-radius: 0; /* Remove border radius */
  }

  & input {
    font-family: "Graphie";
    font-size: 34px;
    line-height: 120%; 
    font-weight: 600;
    color: ${background.orange};
    text-align: center;

    padding: 0;

    min-width: 50px;
    width: calc(${props => (props.value?.length || 1)}ch + 20px);
    max-width: 300px;

    &.todayCost {
      text-align: center;
    }

    & .MuiOutlinedInput-root.Mui-focused {
    border-bottom: 5px solid purple; /* Change border on focus */
  }

  }
`

export const LeveEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.greenLight};
    background: linear-gradient(to bottom, ${background.white} 5%, ${background.greenLight} 95%);

    border: 1px solid ${background.green};
    border-radius: 8px;

    padding: 16px;

    min-width: 380px;
    width: 388px;
    max-width: 388px;

    height: auto;

    .leveEconomyTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 400;
        color: ${background.green};
        text-align: center;

        white-space: nowrap;
    }

    @media (max-width: 600px) {
        min-width: 340px;
        width: 342px;
        max-width: 342px;

        .leveEconomyTitle {
            white-space: normal;
        }
    }
`

export const LeveEconomy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 10px;

    .monetary {
        font-family: "Graphie";
        font-size: 18px;
        line-height: 120%;
        font-weight: 600;
        color: ${background.green};
    }

    .leveEconomyValue {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 34px;
        font-weight: 600;
        color: ${background.green};
        text-align: center;
    }
`

export const LeveEconomyContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2px;

    background-color: ${background.green};
    border-radius: 8px;

    gap: 6px;

    padding: 8px;

    width: 100%;
    max-width: 300px;
    margin: 0 auto;

    .discountPercentage {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 120%;
        font-weight: 400;
        color: ${background.white};

        max-width: 170px;
    }
    .highlighted {
        font-weight: 700;
    }

    .discountPercentageValue {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 120%;
        font-weight: 600;
        color: ${background.yellow};

        margin-left: auto;
    }

    @media (max-width: 600px) {
    }
`
export const PercentageIcon = styled(CheckCircleOutlineOutlinedIcon)`
    color: ${background.yellow};
    width: 24px;
    height: 24px;
`

export const OneYearEconomyContainer = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid ${background.orange};

    background-color: ${background.white};

    border-radius: 8px;

    margin: 0 auto;

    min-width: 340px;
    width: 100%;
    max-width: 388px;

    @media (max-width: 600px) {
        min-width: 340px;
        width: 342px;
        max-width: 342px;
    }
`
export const OneYearEconomyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    padding: 16px 8px;

    gap: 16px;

`
export const OneYearEconomyData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    .title {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 120%;
        font-style: normal;
        font-weight: 400;
        color: ${background.black};
    }
    .value {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 120%;
        font-weight: 600;
        color: ${background.green};
        background-color: ${background.greenTranslucent};

        border-radius: 4px;
    }
`

export const OneYearEconomyHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0px 0px;
    background-color: ${background.orange};

    gap: 8px;

    padding: 8px;

    .oneYear {
        font-family: "Graphie";
        font-size: 16px;
        line-height: 120%; 
        font-style: normal;
        font-weight: 400;
        color: ${background.white};
    }

`

export const LeveBenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.greenTranslucent};
    border-radius: 8px;
    
    padding: 16px;
    
    gap: 16px;
    
    margin: 0 auto;
    margin-top: 24px;
    width: 100%;
    max-width: 388px;

    .leveBenefitsTitle {
        font-family: "Graphie";
        font-size: 18px;
        font-weight: 600;
        line-height: 120%; 
        color: ${background.green};
    }

    @media (max-width: 600px) {
        min-width: 340px;
        width: 342px;
        max-width: 342px;
    }
`

export const LeveBenefitsContent = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    max-width: fit-content;

    gap: 16px;
`
export const LeveBenefit = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    .benefit {
        font-family: "Graphie";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: ${background.green};
    }

    @media (max-width: 600px) {
        .benefit {
            white-space: nowrap;
        }
    }
`

export const EconomyResultFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-bottom: 5rem;

    .economyResultSubtitle {
        display: block;
        font-family: "Graphie";
        font-size: 22px;
        font-weight: 600;
        line-height: 120%; 
        color: ${background.green};
        text-align: center;

        margin: 40px auto 0 auto;

        max-width: 342px;
    }

    @media (max-width: 600px) {
        align-items: center;

        .economyResultSubtitle {
            max-width: 342px;
        }
    }

    @media (max-width: 600px) and (max-height: 950px) {
        padding-bottom: 350px;
    }
    @media (max-width: 600px) and (max-height: 750px) {
        padding-bottom: 200px;
    }
    @media (max-width: 600px) and (max-height: 670px) {
        padding-bottom: 150px;
    }

`

export const LoadingCircle = styled(CircularProgress)`
    width: 21px;
    height: 21px;
    color: ${background.yellow};
`
export const ContinueSignupButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: ${background.green};
  color: ${background.white};
  border-radius: 30px;

  height: 54px;

  width: 100%;
  max-width: 342px;

  margin: 0 auto;

  padding: 8px 16px;
  
  span {
    font-family: "Graphie";
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    text-transform: none;
    color: ${background.white};

    white-space: nowrap;
  }

  .loading {
      color: ${background.yellow};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${background.yellow};

    span {
      color: ${background.green};
    }
    
    .icon {
        color: ${background.green};
    }
  }
`
export const SimpleArrowForward = styled(ArrowForwardIcon)`
    width: 21px;
    height: 21px;
    color: ${background.yellow};
`
export const RoundCheckIcon = styled(CheckIcon)`
    width: 16px;
    height: 16px;
    color: ${background.green};
`
export const SimpleCheckIcon = styled(CheckIcon)`
    width: 16px;
    height: 16px;
    color: ${background.orange};
`
export const SimpleCloseIcon = styled(CloseIcon)`
    width: 16px;
    height: 16px;
    color: ${background.orange};
`
export const EditTodayCostIcon = styled(EditIcon)`
    width: 16px;
    height: 16px;
    color: ${background.orange};
`
export const ArrowDownIcon = styled(ArrowDownwardIcon)`
    color: ${background.white};

    width: 100%;
    max-width: 24px;

    height: 100%;
    max-height: 24px;
`
export const SimulationSlider = styled(Slider)`
    color: ${background.orange};
    height: 8px;
    max-width: 299px;

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
      border: 1px solid ${background.orange};
    } 

    /* Change thumb color when selected (active) */
    & .MuiSlider-thumb.Mui-active {
        background-color: ${background.green};
    }

`;
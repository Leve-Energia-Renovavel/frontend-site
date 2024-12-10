import { background, containerPadding } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import { Button } from "@mui/material"

export const NewHomeBenefitsContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    border-top: 2px solid ${background.grey};
    border-bottom: 2px solid ${background.grey};

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    
    padding: 47px 0px;

    .leveHomeBenefitsTitle {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.orange};
    }
    .leveHomeBenefitsSubtitle {
        font-family: "Graphie";
        font-size: 20px;
        line-height: 100%;
        font-weight: 500;
        color: ${background.greyHigh};

        margin-top: 8px;
    }

    @media (max-width: 600px) {
      display: none;
    }
`
export const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 47px;

    gap: 48px;
`
export const BenefitsBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    gap: 22px;

    padding: 33px 23px 36px 23px;

    width: 100%;
    max-width: 550px;

    .benefitTitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.green};
    }
    .benefitSubtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 120%;
        font-weight: 400;
        color: ${background.greyHigh};

        max-width: 455px;
    }

`

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: fit-content;

    margin-top: 61px;

    @media (max-width: 600px) {
      display: none;
  }
`

export const HomeBenefitsCTAButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.white};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;

  max-width: 330px;

  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${background.green};
      color: ${background.white};
      cursor: pointer;
  }
`
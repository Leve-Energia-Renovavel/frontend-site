import { background, defaultBorderRadius, registerContainerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const BenefitsBannerContainer = styled.div`
    max-width: ${registerContainerWidth};
    margin: 0 auto;
    background-color: ${background.grey};

    @media (max-width: 600px) {
        border-radius: 0px 0px ${defaultBorderRadius} ${defaultBorderRadius};
    }
    `
export const BenefitsBannerContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${background.green};
    border-radius: 5px;

    width: 100%;
    max-width: 471px;

    margin: 0 auto;
    margin-bottom: 10px;
    gap: 8px;
    
    padding: 1rem 35px;
    
    .icon {
        color: ${background.yellow};
    }

    @media (max-width: 600px) {
        border-radius: 0px;
    }
    `
export const BenefitsTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3px;

    .title {
        font-family: 'Graphie';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: ${background.white};

        white-space: nowrap;
    }
    .subtitle {
        font-family: 'Graphie';
        font-size: 15px;
        font-weight: 500;
        line-height: 120%;
        color: ${background.yellow};
        
        margin-left: -4px;

        white-space: nowrap;
    }
    `
export const BenefitsValueBaloon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 4px 8px;

    margin-left: auto;

    border-radius: 99px;
    background: linear-gradient(191deg, #337A67 8.65%, #005940 184.33%);

    .value {
        font-family: 'Graphie';
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        color: ${background.yellow};

        white-space: nowrap;
    }

`
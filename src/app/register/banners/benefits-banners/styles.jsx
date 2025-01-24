import { background, defaultBorderRadius, registerContainerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const BenefitsBannerContainer = styled.div`
    max-width: ${registerContainerWidth};
    
    border-radius: ${defaultBorderRadius};
    
    background-color: ${background.green};

    @media (max-width: 600px) {
        border-radius: 0px 0px ${defaultBorderRadius} ${defaultBorderRadius};
    }
    `
export const BenefitsBannerContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: fit-content;
    margin: 0 auto;
    gap: 8px;
    
    padding: 1rem;
    
    .icon {
        color: ${background.yellow};
    }
    `
export const BenefitsTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3px;

    .title {
        font-family: 'Graphie';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: ${background.white};

        white-space: nowrap;
    }
    .subtitle {
        font-family: 'Graphie';
        font-size: 13px;
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

    margin-left: 1rem;

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
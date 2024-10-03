import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

const minHeight = "200px"

export const NewHomeMainBannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${newBackground.white};

    padding: 75px 85px 0px 85px;

    gap: 43px;

    min-height: ${minHeight};
    height: 480px;
    max-height: 589px;
    
    min-width: 1366px;
    width: 100%;
    max-width: 100vw;
    `
export const NewHomeMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.white};
    
    min-height: ${minHeight};
    height: 100%;
    
    max-width: 50vw;

    .homeMainTitle {
        font-family: "Graphie";
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
        text-align: left;
        color: ${newBackground.green};
        
        max-width: 475px;
        
    }
    .highlighted {
        color: ${newBackground.orange};
        font-weight: 600;
    }
    .homeMainSubtitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        color: ${newBackground.greyHigh};

        text-align: justify;

        margin-top: 17px;
        
        max-width: 475px;
    }
    .homeMainDescription {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.green};
        
        margin-top: 48px;

        max-width: 475px;
    }
`
export const NewHomeBannerImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.green};

    min-height: ${minHeight};

    min-width: 200px;
    width: 400px;
    max-width: 50vw;

`

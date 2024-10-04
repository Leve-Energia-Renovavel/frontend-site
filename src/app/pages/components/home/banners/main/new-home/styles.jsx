import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

const maxWidth = "1366px"
const halfWidth = "683px"

export const NewHomeMainBannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    background-color: ${newBackground.white};

    margin: 0 auto;

    padding: 75px 85px 0px 85px;

    gap: 43px;

    height: 480px;
    max-height: 589px;
    
    width: 100%;
    max-width: ${maxWidth};

    @media (max-width: 600px) {
        display: none;
    }
`
export const NewHomeMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${newBackground.white};
    
    height: 100%;
    
    max-width: 485px;

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
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    /* background-position: 80% 30%; */

    margin-top: -30px;
    
    min-width: 550px;
    width: 618px;
    max-width: 618px;

    
    min-height: 360px;
    height: auto;
    
    border-radius: 5px;
`

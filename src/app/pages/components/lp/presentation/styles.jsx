import { newBackground } from "@/app/pages/styles";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${newBackground.white};
    
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto 0 auto;   //margin-top for header
    padding: 0 3rem;
`
export const LandingPageMainBanner = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: stretch;

    .bannerImage { 
        border-radius: 15px;
        width: 590px;
        height: auto;
    }
`
export const LandingPageMainContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
width: 100%;
position: relative; // Ensure relative positioning for absolute positioning inside


h1 { 
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 42px;
    line-height: 45px;
    font-weight: 600;

    max-width: 489px;
}

h2 {
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 21px;
    line-height: 25px;
    font-weight: 600;

    max-width: 380px;
}

.highlighted { 
    background-color: ${newBackground.yellow};
    padding: 0 2px;
    border-radius: 10px;
    font-weight: 600;
}
.underlined {
    text-decoration: underline;
    font-weight: 700;
}


`

export const MoreAboutLeveFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    position: absolute;
    bottom: 0;
    right: -200px; // Align it to the right side if needed
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${newBackground.white};
    }

    .moreAboutLeve {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.white};
    }
    .arrowIcon {
        color: ${newBackground.white};
    }
`

export const MainBannerButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${newBackground.orange};
  color: ${newBackground.yellow};
  border-radius: 30px;

  height: 42px;
  max-width: 248px;
  
  margin: 1rem 0;

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 500;
    text-transform: none;

    margin-left: auto;

  }
  
  &:hover {
    background-color: ${newBackground.yellow};
    color: ${newBackground.orange};
    cursor: pointer;
  }
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }
`
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
    
    @media (max-width: 600px) {
      padding: 0;
    }
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
    
    @media (max-width: 600px) {
      width: 100%;
      height: auto;
      border-radius: 0px;
    }
  }
  
  @media (max-width: 600px) {
      flex-wrap: wrap;
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
    
    @media (max-width: 600px) {
      font-size: 27px;
      line-height: 30px;
      max-width: 315px;

      margin: 0 auto;
    }
}

h2 {
    font-family: "Graphie";
    color: ${newBackground.orange};
    font-size: 21px;
    line-height: 25px;
    font-weight: 600;
    
    max-width: 380px;
    
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
      text-align: center;
      
      margin: 0 auto;

      max-width: 250px;
    }
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
        font-weight: 400;
        color: ${newBackground.white};
    }
    .arrowIcon {
        width: 32px;
        height: 32px;
        color: ${newBackground.white};
    }

    @media (max-width: 600px) {
      .moreAboutLeve {
        display: none;
      }
      .arrowIcon {
        display: none;
      }
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

  @media (max-width: 600px) {
    max-width: 210px;
    margin: 10px auto 41px auto;

    span {
      font-size: 17px;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`

export const SecondSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${newBackground.green};

    border-bottom: 1px solid ${newBackground.orange};
    border-right: 1px solid ${newBackground.orange};
    border-left: 1px solid ${newBackground.orange};

    border-radius: 20px;

    height: auto;

    margin-top: 1rem;
    
    @media (max-width: 600px) {
      height: auto;
      margin: -4rem 0 0 0;
  }
`
export const SecondSectionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;

    margin-top: 32px;
    margin-bottom: 32px;

    h3 {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.white};
    }
    .yellow {
      font-family: "Graphie";
        font-size: 34px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.yellow};
    }

    @media (max-width: 600px) {
      text-align: center;
      flex-wrap: wrap;
      gap: 0px;
      margin-top: 19px;
      margin-bottom: 19px;

      h3 {
        font-size: 17px;
        line-height: 21px;
      }
    }

`
export const SecondSectionContent = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    background-color: ${newBackground.orange};
    
    border-radius: 20px;

    height: 304px;
    
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 600px; 

    .mobileButton { 
      display: none;
    }
    
    @media (max-width: 600px) {
      border-radius: 0px;
      flex-wrap: wrap;
      height: auto;

      .desktopButton { 
        display: none;
      }
      .mobileButton { 
        display: block;
      }
    }


`
export const SecondSectionContentTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 115px;

    h4 {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 38px;
        font-weight: 600;
        color: ${newBackground.white};
    }

    .yellow {
      font-family: "Graphie";
        font-size: 34px;
        line-height: 38px;
        font-weight: 600;
        color: ${newBackground.yellow};
    }



    @media (max-width: 600px) {
      margin: 18px auto;
      gap: 1rem;

      h4 {
        font-size: 27px;
        line-height: 30px;
        text-align: center;
      }

      .arrowDownIcon {
        display: block;
        margin: 0 auto;
      }
    }
`
export const SecondSectionBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    max-width: 653px;   
    
    @media (max-width: 600px) {
      gap: 1rem;
      justify-content: center;
      margin-bottom: 1rem;
    }
`
export const SecondSectionFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${newBackground.white};
    margin-top: -1rem;

    gap: 1rem;
    
    height: 100px;

    h3 {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.orange};
      }
      
      .yellow {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.orange};
        background-color: ${newBackground.yellow};
    }
    
    `
export const SecondSectionFooterButton = styled.div`
    background-color: ${newBackground.orange};
    border-radius: 30px;
    padding: 7px 11px;
    
    span {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 26px;
        font-weight: 600;
        color: ${newBackground.white};
    }
    
    &:hover { 
        cursor: pointer;
        background-color: ${newBackground.yellow};

        span {
            color: ${newBackground.green};
        }
        
    }

`

export const SecondSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${newBackground.white};

    padding: 14px 12px;

    max-width: 200px;
    border-radius: 20px;

    .iconContainer {
        text-align: center;
        margin-left: auto;
        background-color: ${newBackground.yellow};
        border-radius: 60px;
        padding: 15px 18px;

        width: 77px;
    }

    .boxDescription {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 20px;
        font-weight: 500;
        color: ${newBackground.orange};

        margin-top: auto;

        max-width: 174px;
    }

    @media (max-width: 600px) {
      max-width: 155px;
      gap: 12px;
      
      .iconContainer {
        margin: 0 auto;
        width: 70px;
        padding: 12px 10px;

      }

      .boxDescription {
        text-align: center;
        font-size: 12px;
        line-height: 14px;
      }
    }
`

export const ThirdSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: auto;
    text-align: center;
    padding: 2rem;

    margin-top: 80px;

    .ourSolutions {
        font-family: "Graphie";
        font-size: 42px;
        font-weight: 600;
        color: ${newBackground.orange};
    }

    .solutionsDescription {
        margin: 30px auto 50px auto;

        font-family: "Graphie";
        font-size: 21px;
        line-height: 24px;
        font-weight: 500;
        color: ${newBackground.green};
        
        max-width: 1050px;
    }
    
    .highlighted {
        background-color: ${newBackground.yellow};
        padding: 2px;
        border-radius: 8px;
        font-weight: 700;
    }

    @media (max-width: 600px) {
      margin-top: 30px;

      .ourSolutions {
        font-size: 27px;
      }
      .solutionsDescription {
        font-size: 14px;
        line-height: 17px;
      }

    }
`
export const ThirdSectionCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;

    margin-top: 50px;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`

export const ThirdSectionCard = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 1px solid #ccc;
    
    border-radius: 25px;
    width: 280px;
    max-width: 300px;
    
    padding: 2rem;

    .invisible { 
      @media (max-width: 600px) {
      flex-direction: row-reverse;
      }
    }
    
    @media (max-width: 600px) {
      flex-direction: row-reverse;
      width: 327px;
      height: auto;
      padding: 1rem;
    }
`

export const ThirdSectionIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: start;
    }

    .titleIcon {
      width: 65px;
      height: auto;

      object-fit: contain;
      
      @media (max-width: 600px) {
        width: 50px;
        height: auto;
      }
    }
`

export const ThirdSectionTitle = styled.div`

  .cardTitle {
    font-family: "Graphie";
    font-size: 42px;
    font-weight: 600;
    color: ${newBackground.green};
    
    @media (max-width: 600px) {
      font-size: 34px;
    }
  }
`

export const ThirdSectionDescription = styled.div`
  .cardDescription {
    font-family: "Graphie";
    font-size: 17px;
    font-weight: 500;
    color: ${newBackground.green};

    line-height: 17px;
  }
`


export const FourthSectionImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;
    
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`

export const FourthSectionImagesContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    
    transition: filter 0.5s ease; 

    &:hover {
      filter: brightness(0.8);
    }
    
    height: 420px;
    width: 620px;

    border-radius: 20px;
    
    padding: 1rem;
    /* margin-bottom: 5rem; */
    
    @media (max-width: 600px) {
      height: 250px;
      width: 330px;

      
      border-radius: 15px;
    }
    
    h6 {
      ${props => props.invertedBox ? "margin-top: auto" : ""};
      font-family: "Graphie";
      font-size: 27px;
      font-weight: 600;
      color: ${newBackground.white};
      
      @media (max-width: 600px) {
        font-size: 21px;
      }
      
    }

    .arrowIcon {
      font-size: 50px;
      color: ${newBackground.yellow};
      
      &:hover {
        color: ${newBackground.green};
        background-color: ${newBackground.yellow};
        border-radius: 30px;
      }
    }
    .arrowIconCompany {
      margin-top: auto;
      font-size: 50px;
      color: ${newBackground.yellow};
      
      &:hover {
        color: ${newBackground.green};
        background-color: ${newBackground.yellow};
        border-radius: 30px;
      }
    }
`

export const FifthSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 75px 0;
`
export const FifthSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 32px;
    background-color: ${newBackground.yellow};

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-size: 1000px; 
    
    text-align: center;
    
    width: 792px;
    height: auto;

    h6 {
        max-width: 546px;
        margin-top: 52px;

        font-family: "Graphie";
        font-size: 27px;
        line-height: 30px;
        font-weight: 600;
        color: ${newBackground.green};

    }

    @media (max-width: 600px) {
      border-radius: 0px;
      width: 100%;
      max-width: 100vw;
      background-size: 800px; 

      h6 { 
        margin: 35px auto 0 auto;
        font-size: 21px;
        line-height: 23px;
        width: 100%;
      }
    }

`

export const FifthSectionButton = styled(Button)`
  padding: .5rem 1rem;
  background-color: ${newBackground.green};
  color: ${newBackground.yellow};
  border-radius: 30px;

  height: 42px;
  max-width: 248px;
  
  margin: 80px 0;

  span {
    font-family: "Graphie";
    font-size: 20px;
    font-weight: 500;
    text-transform: none;

    margin-left: auto;

  }
  
  &:hover {
    background-color: ${newBackground.orange};
    color: ${newBackground.yellow};
    cursor: pointer;
  }
  
  & .MuiButton-endIcon {
    margin-left: auto;
  }

  @media (max-width: 600px) {
    max-width: 210px;
    margin: 60px 0;

    span {
      font-size: 17px;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`

export const SixthSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  margin: 0 auto;
  
  @media (max-width: 600px) {
    gap: 0px;
    flex-wrap: wrap;
  }
`
export const SixthSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const SixthSectionContentHeader = styled.div`
background-color: ${newBackground.yellow};
border-radius: 15px;
padding: 28px 21px;

max-width: 590px;

.energizeTheWorld {
  font-family: "Graphie";
  font-size: 34px;
  line-height: 38px;
  font-weight: 600;
  color: ${newBackground.orange};
}

  @media (max-width: 600px) {
    margin: 0 1rem;
    z-index: 1;

    .energizeTheWorld {
      text-align: center;
      font-size: 21px;
      line-height: 23px;
    } 
  }
`
export const SixthSectionContentManifest = styled.div`
  text-align: left;
  border-radius: 15px;
  background-color: ${newBackground.orange};
  padding: 37px 29px;

  max-width: 590px;
  
  .manifest {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 25px;
    font-weight: 400;
    color: ${newBackground.white};
    
    margin-bottom: 22px;
  }
  
  @media (max-width: 600px) {
    border-radius: 0px;
    z-index: 0;
    margin: -80px 0 0 0;
    padding: 100px 1rem 30px 1rem;

    .manifest {
      text-align: center;
      font-size: 14px;
      line-height: 17px;
      font-weight: 300;

      max-width: 280px;
      margin: 0 auto 20px auto;
    } 
  }
`
export const SixthSectionBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .image {
    max-width: 590px;
    height: auto;
    margin: 0 auto 20px auto;
  }

  @media (max-width: 600px) {

    .image {
      max-width: 100%;
    }

  }
`
export const SixthSectionBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  @media (max-width: 600px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const SixthSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${newBackground.green};
  
  border-radius: 15px;
  padding: 1rem;
  
  max-width: 180px;
  height: 165px;

  .title { 
    font-family: "Graphie";
    font-size: 21px;
    font-weight: 500;
    color: ${newBackground.yellow};
  }
  
  .description {
    font-family: "Graphie";
    font-size: 15px;
    line-height: 17px;
    font-weight: 400;
    color: ${newBackground.white};
  }

  @media (max-width: 600px) {
    max-width: 280px;
    background: linear-gradient(to top, #ffffff 5%, ${newBackground.yellow} 93%);


    .title {
      font-weight: 700;
      color: ${newBackground.orange};
    }
    .description {
      font-weight: 600;
      color: ${newBackground.orange};
    }
  }
`

export const VideoContainer = styled.div`
  margin: 0 auto;
  background-color: ${newBackground.white};
  padding: 2rem;

  .embededVideo {
    width: 1000px;
    height: 581px;
    border-radius: 15px;

    @media (max-width: 600px) {
      width: 325px;
      height: 220px;
    }
  }

  @media (max-width: 600px) {
      padding: 0;
    }

`

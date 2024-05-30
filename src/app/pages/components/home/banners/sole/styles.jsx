import { fadeInUpAnimation } from "@/app/pages/animations"
import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const HomeThirdSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${newBackground.orange};

    gap: 2rem;

    border-radius: 10px;
    
    height: auto;
    width: 100%;
    
    padding: 0 3rem 0 3rem;

    .rowToBeReversed {
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;
      padding: 3rem 2rem 0 2rem;
      gap: 0;
      border-radius: 0px;
      height: 430px;
      z-index: 0;
    }
`

export const HomeThirdSectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(props) => props.visible && fadeInUpAnimation};

    max-width: 590px;

    text-align: left;
    
    h6 {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 34px;

      max-height: 115px;
      
      @media (max-width: 600px) {
        font-size: 21px;
        line-height: 21px;
      }
    }

    .sectionTitle {
      color: ${newBackground.white};
      font-weight: 200;

    }

    .highlighted {
      font-weight: 500;
    }
`

export const HomeThirdSectionSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => props.visible && fadeInUpAnimation};

    max-width: 300px;
    margin-left: 28px;
    
    h6 {
      font-family: "Graphie";
      font-size: 34px;
      line-height: 34px;
      
      @media (max-width: 600px) {
        margin-left: -10px;
        font-size: 21px;
        line-height: 21px;
      }
    }

    .sectionSubtitle {
          color: ${newBackground.yellow};
          font-weight: 500;

          @media (max-width: 600px) {
            margin-top: 24px;
          }

        }
`

export const HomeThirdSectionSoleContainer = styled.div`
  .sole {
    margin-top: 5rem;
    width:250px;
    height:250px;

    ${(props) => props.visible && fadeInUpAnimation};
    
    @media (max-width: 600px) {
      margin-top: 2rem;
      width: 220px;
      height: 220px;
    }
  }
`


export const InvertedSoleBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${newBackground.orange};

  gap: 1rem;

  border-radius: 20px;
  
  margin: 0 auto;

  width: 100%;
  max-width: 1366px;
  min-height: 300px;
  
  .invertedSoleBannerTitle {
    font-family: "Graphie";
    font-size: 55px;
    line-height: 50px;
    font-weight: 600;
    color: ${newBackground.yellow};
  }

  .invertedSoleBannerSubtitle {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 21px;
    font-weight: 600;
    color: ${newBackground.white};
  }
  .invertedSoleBannerDescription {
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    color: ${newBackground.white};
  }

  .sole {
    position: absolute;
    margin-top: 5rem;
    margin-right: 50rem;
    width:250px;
    height:250px;
    transform: scaleX(-1);

    @media (max-width: 600px) {
      margin-top: 2rem;
      width: 220px;
      height: 220px;
    }
  }
  `

export const InvertedSoleButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  max-width: 329px;
  margin-top: 25px;

  background-color: ${newBackground.green};
  border-radius: 20px;
  padding: 7px 11px;
  
  .whatsappIcon {
    width: 20px;
    height: 20px;
    color: ${newBackground.yellow};
  }
  
  span {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 21px;
    font-weight: 600;
    color: ${newBackground.yellow};
  }
  
  &:hover {
    cursor: pointer;
    background-color: ${newBackground.yellow};
    span {
      color: ${newBackground.green};
    }
    .whatsappIcon {
    color: ${newBackground.green};
  }
    
  }

`

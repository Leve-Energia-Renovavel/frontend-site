import { newBackground, partners } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const LocalizaMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;

    width: 100%;
    max-width: 1200px;

    padding: 3rem 1.5rem 2rem 3rem;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;

    .title {
      max-width: 620px;
      margin-top: 150px;
      text-align: left;

      font-family: "Graphie";
      font-size: 55px;
      line-height: 58px;
      font-weight: 600;
      color: ${newBackground.white};
    }
    .titleHighlighted {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.white};
      border-radius: 10px;
      background-color: ${partners.localiza.lightGreen};
      color: ${partners.localiza.green};
      
    }

    @media (max-width: 900px) {
      padding: 1rem;
      background-position: 90% 10%;
      width: 100vw;
      max-width: 100vw;

      height: 70vh;

      .title {
        max-width: 220px;
        font-family: "Graphie";
        font-size: 27px;
        line-height: 27px;
      }
    }
`

export const ArrowScrollerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto 0px 0px auto;

  gap: 10px;

  .scrollerDescription {
    font-family: "Graphie";
      font-size: 21px;
      line-height: 36px;
      font-weight: 500;
      color: ${newBackground.white};
  }

  .whiteArrow {
    width: 32px;
    height: auto;
  }

  &:hover {
    cursor: pointer;

    .scrollerDescription {
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    .scrollerDescription {
      white-space: nowrap;
      font-size: 17px;
      line-height: 21px;
    }
  }

`


export const PartnerSectionBanner = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  max-width: 1366px;
  margin: 84px auto;
  
  gap: 1rem;
  height: 392px;

  .bannerImage {
    width: 100%;
    max-width: 396px;
    height: auto;
  }


  @media (max-width: 1100px) {
    flex-wrap: wrap-reverse;
    margin: 0;
    gap: 0;
    height: auto;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap-reverse;
    margin: 0;
    gap: 0;
    height: auto;
  }
`
export const PartnerDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${partners.localiza.vividGreen};
  border-radius: 15px;

  padding: 50px;

  width: 100%;
  max-width: 1200px;

  .title {
    font-family: "Graphie";
    font-size: 42px;
    line-height: 45px;
    font-weight: 600;
    color: ${newBackground.white};

    max-width: 670px;
  }

  .highlighted { 
    font-family: "Graphie";
    font-size: 42px;
    line-height: 45px;
    font-weight: 600;
    color: ${partners.localiza.green};
    background-color: ${partners.localiza.lightGreen};
  }

  .descriptionFirst {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 24px;
    font-weight: 500;
    color: ${newBackground.white};

    max-width: 670px;


    margin-top: 34px;
  }
  .descriptionSecond {
    font-family: "Graphie";
    font-size: 21px;
    line-height: 24px;
    font-weight: 500;
    color: ${newBackground.white};

    max-width: 670px;


    margin-top: 20px;
  }


  @media (max-width: 900px) {
    padding: 2rem 1rem;

    .title, .highlighted {
      font-family: "Graphie";
      font-size: 27px;
      line-height: 31px;
    }

    .descriptionFirst {
      font-size: 15px;
      line-height: 21px;
      margin-top: 40px;
    }
    .descriptionSecond {
      font-size: 15px;
      line-height: 21px;
      margin-top: 20px;
    }


  }
`
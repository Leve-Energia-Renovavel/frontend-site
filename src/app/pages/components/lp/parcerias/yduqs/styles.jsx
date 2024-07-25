import { newBackground, partners } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const YduqsMain = styled.div`
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
      max-width: 598px;
      margin-top: 130px;
      text-align: left;

      font-family: "Graphie";
      font-size: 55px;
      line-height: 60px;
      font-weight: 600;
      color: ${newBackground.white};
    }
    .titleHighlighted {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.white};
      border-radius: 10px;
      background-color: ${partners.tribanco.lightBlue};
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
  background-color: ${partners.yduqs.blue};
  
  width: 100%;
  max-width: 1366px;
  margin: 84px auto;
  
  border-radius: 15px;
  gap: 1rem;
  height: 392px;

  .hiddenBannerImage {
    display: none;
  }

  @media (max-width: 1350px) {
      .hiddenBannerImage {
        width: auto;
        height: 100%;
        display: block;
      }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap-reverse;
    margin: 0;
    gap: 0;
    height: auto;
    background: linear-gradient(to bottom, ${partners.yduqs.blue} 40%, ${partners.yduqs.lightBlue});

    .hiddenBannerImage {
        width: 100%;
        max-width: 324px;
        height: 450px;
        display: block;
      }
  }
`

export const PartnerImageContainer = styled.div`
    .bannerImage {
      width: 324px;
      height: auto;
      position: absolute;
      right: 786px;
      top: 732px;
      }

    @media (max-width: 1350px) {
      .bannerImage {
        display: none;
      }
    }
`
export const PartnerSectionContent = styled.div`
  width: 550px;
  background-color: ${partners.yduqs.lightBlue};

  background-image: url(${props => props.image.src});
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: 10% 90%;

  border-radius: 15px;

  @media (max-width: 1350px) {
    display: none;
  }

`
export const PartnerDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  padding-left: 300px;

  width: 100%;
  max-width: 1200px;

  .title {
    font-family: "Graphie";
    font-size: 42px;
    line-height: 45px;
    font-weight: 600;
    color: ${newBackground.white};

    max-width: 450px;

    margin-top: 25px;
  }
  .highlightedSubtitle {
    font-family: "Graphie";
    font-size: 27px;
    line-height: 21px;
    font-weight: 500;
    color: ${newBackground.white};
    width: fit-content;
    background-color: ${partners.yduqs.lightBlue};

    padding: 4px;
    border-radius: 8px;

    margin-top: 18px;

  }
  .description {
    font-family: "Graphie";
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: ${newBackground.white};

    max-width: 520px;


    margin-top: 29px;
  }
  .highlightedDescription {
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    color: ${newBackground.white};

    margin-top: 10px;

  }

  @media (max-width: 900px) {
    padding: 1rem;

    .title {
      font-family: "Graphie";
      font-size: 31px;
      line-height: 31px;

      margin-top: 0px;
    }

    .highlightedSubtitle {
      font-family: "Graphie";
      font-size: 21px;
      line-height: 21px;
      margin-top: 10px;
    }


  }
`
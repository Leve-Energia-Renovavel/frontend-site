import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const LandingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: ${background.white};
    
    max-width: 1920px;
    /* max-width: 1366px; */
    margin: 74px auto 0 auto;   //margin-top for header
    
    @media (max-width: 600px) {
      padding: 0;
    }
`

export const Controll = styled.div`
      padding: 0 3rem;  //margin for company table component

      @media (max-width: 900px) {
      padding: 0;
    }

`
export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    padding: 0 3rem;  //margin for company table component


    padding-bottom: 8px;
    gap: 1rem;
    
    @media (max-width: 900px) {
      flex-wrap: wrap;
      padding: 0;
      height: auto;
    }
`


export const BannerMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;

    width: 100%;
    max-width: 1200px;

    padding: 3rem 1.5rem 2rem 3rem;
    
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 90% 10%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 1%, transparent), url(${props => props.image.src});

    .title {
      max-width: 500px;
      margin-top: 286px;
      text-align: left;

      font-family: "Graphie";
      font-size: 42px;
      line-height: 45px;
      font-weight: 600;
      color: ${background.white};
    }
    .titleHighlighted {
      font-family: "Graphie";
      font-weight: 600;
      color: ${background.yellow};
      border-radius: 4px;
    }

    @media (max-width: 900px) {
      padding: 1rem;
      background-position: 90% 10%;
      width: 100%;
      max-width: 94vw;

      margin: 0 auto;

      height: auto;
      max-height: 70vh;

      
      .title {
        margin-top: 240px;
        max-width: 250px;
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
      line-height: 25px;
      font-weight: 500;
      color: ${background.white};

      max-width: 371px;
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
      white-space: wrap;
      font-size: 17px;
      line-height: 21px;

    }
  }

`
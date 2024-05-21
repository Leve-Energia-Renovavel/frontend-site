import { newBackground, partners } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const PartnershipMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    max-width: 1366px;
    margin: 74px auto;
    padding: 0 3rem;

    position: relative; /* Add this line */

    
    .bannerImage {
      width: 375px;
      height: auto;
      position: absolute;
      right: 786px;
      top: 692px;
    }
`

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    padding-bottom: 8px;
    gap: 1rem;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      
      /* padding: 1rem 1.5rem; */
      padding: 0;

      height: auto;
    }
`
export const PartnerSectionBanner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${partners.tribanco.blue};
  
  width: 100%;
  max-width: 1366px;
  margin: 84px auto;
  
  border-radius: 15px;
  gap: 1rem;
  height: 392px;

`
export const PartnerSectionContent = styled.div`
  width: 550px;
  background: linear-gradient(to bottom, ${partners.tribanco.lightBlue} 50%, ${partners.tribanco.green});
  border-radius: 15px;

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
    background-color: ${partners.tribanco.lightBlue};

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
`

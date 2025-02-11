import { background, containerPadding } from "@/app/pages/globalStyles"
import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const NewHomeBoxesContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    border-top: 2px solid ${background.grey};

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    
    padding: 47px 0px;

    .homeBoxesTitle{
        font-family: "Graphie";
        font-size: 34px;
        line-height: 23px;
        font-weight: 600;
        color: ${background.green};
    }
    
    .homeBoxesSubTitle {
        font-family: "Graphie";
        font-size: 20px;
        line-height: 120%;
        font-weight: 500;
        color: ${background.greyDarker};

        margin-top: 10px;
        margin-left: 6px;
    }
    
    @media (max-width: 600px) {
        display: none;
    }
`

export const NewHomeBoxesContent = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 47px;
    
    margin-top: 42px;
`
export const HomeBoxesUserTypeContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 13px;
`

export const BaseHomeBox = styled.div`
    position: relative;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0) 100%), 
        url(${props => props.bannerImage.src});

    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;
    border-radius: 20px;
    
    min-width: 590px;
    width: 100%;
    max-width: 595px;

    min-height: 392px;
    height: 100%;
    max-height: 395px;

    &:hover {
        cursor: pointer;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        border-radius: 20px; 
        transition: background 0.2s ease-in-out; 
        z-index: 1;
    }

    &:hover::before {
        background: rgba(0, 0, 0, 0.1); 
    }

    & > * {
        position: relative;
        z-index: 2;
    }
`;
export const HomeBoxHome = styled(BaseHomeBox)`
    display: flex;

    .leveHomeBoxForYourHome {
        display: block;
        font-family: "Graphie";
        font-size: 27px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.yellow};

        margin: 23px 0 0 17px;
    }
`;

export const HomeBoxCompany = styled(BaseHomeBox)`
    display: flex;

    .leveHomeBoxForYourCompany {
        display: block;
        font-family: "Graphie";
        font-size: 27px;
        line-height: 100%;
        font-weight: 600;
        color: ${background.yellow};

        margin: 23px 17px 0 auto;
    }
`;
export const BoxesContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 25px;
`
export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: ${background.white};

    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    padding: 22px 29px 35px 29px;

    gap: 1rem;

    width: 100%;
    max-width: 463px;

    height: 100%;
    max-height: 149px;
    
    .boxTitle {
        font-family: "Graphie";
        font-size: 24px;
        line-height: 24px;
        font-weight: 600;
        color: ${background.orange};

        white-space: nowrap;
    }

    .subtitle {
        font-family: "Graphie";
        font-size: 22px;
        line-height: 24px;
        font-weight: 500;
        color: ${background.greyDarker};
    }

    @media (max-width: 800px) {
        min-width: 270px;
        max-width: calc((100% - 1rem) / 2);
    }
`

export const CTAButton = styled(Button)`
  background-color: ${background.green};
  color: ${background.yellow};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;

  max-width: 330px;

  margin-top: 19px;
  margin-bottom: 40px;
  
  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${background.orange};
      color: ${background.white};
      cursor: pointer;
  }
`

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: fit-content;

    margin-top: auto;

    @media (max-width: 600px) {
      display: none;
  }
`

export const HomeBoxesCTAButton = styled(Button)`
  background-color: ${background.green};
  color: ${background.yellow};
  border-radius: 30px;

  height: 52px;

  padding: 15px 53px;

  min-width: 320px;
  width: 100%;
  max-width: 330px;

  span {
    font-family: "Graphie";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
  }

  &:hover {
      background-color: ${background.orange};
      color: ${background.white};
      cursor: pointer;
  }
`
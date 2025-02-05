import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { background, containerWidth } from "../../globalStyles";


const footerFontSize = "16px"

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: ${background.green};
    
    max-width: ${containerWidth};
    margin: 0 auto;
    
    padding: 56px 74px;

    .leveRightsMobile {
        display: none;
    }
    
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 34px 26px;

        gap: 43px;

        .leveRightsMobile {
            display: block;

            font-family: "Graphie";
            font-size: 20px;
            font-weight: 400;
            line-height: 120%;
            color: ${background.white};
        }   
    }
`

export const LegalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    width: 100%;
    max-width: ${containerWidth} / 3;
    
    gap: 42px;

    text-align: left;

    p {
        font-family: "Graphie";
        font-size: ${footerFontSize};
        font-weight: 400;
        line-height: 120%;
        color: ${background.white};
    }

    .leveLogoImage {
        max-width: 162px;
        height: auto;
    }
    
    @media (max-width: 600px) {
        .leveRightsDesktop {
            display: none;
        }
    }
    `
export const CompanyNameAndCNPJ = styled.div`
    display: flex;
    flex-direction: column;

    .highlighted {
        font-weight: 500;
    }
`
export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 100%;
    max-width: fit-content;


    
    @media (max-width: 600px) {
        margin-right: auto;

        .privacyPolicy {
            margin-left: 0px;
         }
    }
    `;
export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .socialIcon, .reclameAquiLogo {
        width: 50px;
        height: 50px;
    }
    
    .reclameAquiLogo {
        border-radius: 30px;

        &:hover {
            background-color: ${background.yellow};
            cursor: pointer;
        }
    }



    .socialIcon {
        color: ${background.green};
        background-color: ${background.white};
        border-radius: 30px;
        padding: 8px;
        
        &:hover {
            color: ${background.yellow};
            cursor: pointer;
        }
    }
    
    @media (max-width: 600px) {
        gap: 30px;
        margin-bottom: 30px;

        .iconButton {
            width: 32px;
            height: 32px;
        }
    }
`

export const ContactContentContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 94px;
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 35px;
    }
`
export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    height: 160px;

    gap: 16px;

    width: 100%;
    max-width: ${containerWidth} / 3;

    .contactUs {
        font-family: "Graphie";
        font-size: ${footerFontSize};
        font-weight: 500;
        line-height: 120%;
        color: ${background.yellow};
    }
    
    .comercialService {
        font-weight: 500;
        color: ${background.white};

    }

    .privacyPolicy {
        font-family: "Graphie";
        font-size: ${footerFontSize};
        font-weight: 400;
        line-height: 120%;
        color: ${background.yellow};
        
        white-space: nowrap;
        margin-top: 78px;
        
        &:hover {
            cursor: pointer;
            text-decoration: underline
        }
    }
    
    @media (max-width: 600px) {
        .contactUs {
            margin-top: 16px;
        }
    }
`;
export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 12px;

    .icon, .phone, .email {
        width: 20px;
        height: 20px;
        color: ${background.white};
    }
    .phone, .email {
        font-family: "Graphie";
        font-size: ${footerFontSize};
        font-weight: 400;
        line-height: 120%;
        color: ${background.white};

        white-space: nowrap;
    }

`;

export const FooterButton = styled(Button)`
  background-color: ${background.orange};
  color: ${background.yellow};
  border-radius: 30px;
  font-size: 17px;
  text-transform: none;
  padding: 0.5rem 1.5rem;

  font-family: "Graphie";
  font-size: ${footerFontSize};
  font-weight: 500;

  
  &:hover {
      background-color: ${background.green};
      color: ${background.yellow};
        cursor: pointer;
  }
`
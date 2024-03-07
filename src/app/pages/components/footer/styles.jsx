import styled from "@emotion/styled"
import { background } from "../../styles"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${background.blueLeve};
    color: ${background.light};
    max-width: 100vw;
    padding: 2rem;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 2rem;
    
    @media (max-width: 1100px) {
        padding: 1rem;
    }
    @media (max-width: 600px) {
        padding: 0rem;
    }

    img { 
        width: 208px;
        height: auto;

        @media (max-width: 1100px) {
        width: 30%;
        height: 30%;
        }
        @media (max-width: 600px) {
        width: 60%;
        height: 60%;
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem;
    max-width: 100vw;
    
    @media (max-width: 1100px) {
        flex-wrap: wrap;
        padding: .5rem;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0rem;
    }
    `;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    max-width: 30vw;
    
    @media (max-width: 1100px) {
        max-width: 100vw;
        padding: 4rem 0;
    }
    @media (max-width: 600px) {
        max-width: 100vw;
        padding: 4rem 0;
    }
    
    p {
        font-family: "Metropolis";
        font-size: 1.2rem;
        
        @media (max-width: 600px) {
            font-size: 1rem;
        }
        
    }
    
    .phoneNumber {
        @media (max-width: 600px) {
            margin-top: 1rem;
        }
        
    }
`;


export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2rem;
    max-width: 30vw;
    
    @media (max-width: 1100px) {
        margin-top: 2rem;
        width: 100vw;
    }
    @media (max-width: 600px) {
        padding: 0rem;
        width: 100vw;
    }

    a {
        text-decoration: none;
        color: ${background.light};
        transition: font-weight 0.3s ease;
        margin-top: 6px;
        line-height: 18px;

        &:hover {
            font-weight: bold;
        }
    }

    .pageLink { 
        @media (max-width: 600px) {
            margin-top: 1rem;
        }
    }

    .pageLinkGenerator {
        font-weight: bold;
        margin-top: 1rem;

        @media (max-width: 600px) {
            margin-top: 1rem;
        }
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 2rem;
    max-width: 28vw;

    @media (max-width: 1100px) {
        padding: 0rem;
        width: 100vw;
    }
    @media (max-width: 600px) {
        padding: 0rem;
        width: 100vw;
    }
    
    h6 {
        margin-top: 2rem;
        font-weight: bold;
        line-height: 1rem;
        
        @media (max-width: 600px) {
            margin-top: 3rem;
        }
    }
    
    .acceptReceivingEmails {
        margin-top: .5rem;
        margin-bottom: .5rem;
        font-size: .8rem;
        
        @media (max-width: 600px) {
            margin-bottom: 2rem;
            width: 80vw;
        }
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem 0rem;
    
    .socialIcon {
        font-size: 2rem;
        
        @media (max-width: 600px) {
            font-size: 3.5rem;
            margin-right: 1rem;
        }
        
    }
`;

export const CallToActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 25vw;
    margin-top: 5rem;

    h6 {
        font-family: "Inter";
        font-weight: 400;
        size: 16px;
        line-height: 18px;
    }

    @media (max-width: 1100px) {
        display: none;
    }
    @media (max-width: 600px) {
        display: none;
    }

    `;

export const RightsContainer = styled.div`
    padding: 2rem;

`;

export const InstagramLogo = styled(InstagramIcon)`
    &:hover {
        cursor: pointer;
        color: ${background.yellowLeve};
    }
`;
export const FacebookLogo = styled(FacebookIcon)`
    &:hover {
        cursor: pointer;
        color: ${background.yellowLeve};
    }
`;
export const LinkedinLogo = styled(LinkedInIcon)`
    &:hover {
        cursor: pointer;
        color: ${background.yellowLeve};
    }
`;
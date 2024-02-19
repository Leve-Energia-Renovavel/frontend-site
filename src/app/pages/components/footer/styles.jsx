import styled from "@emotion/styled"
import { background } from "../../styles"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { keyframes } from "@emotion/react";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${background.primary};
    color: ${background.light};
    max-width: 100vw;
    padding: 2rem;
    
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 2rem;
    
    @media (max-width: 600px) {
        padding: 0rem;
    }

    img { 
        @media (max-width: 600px) {
        width: 60%;
        height: 60%;
    }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2rem;
    
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0rem;
        max-width: 100vw;
    }
    `;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    width: 30vw;
    max-width: 100vw;
    
    @media (max-width: 600px) {
        width: 90vw;
        max-width: 100vw;
        padding: 4rem 0rem;
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
    width: 30vw;
    max-width: 100vw;
    
    @media (max-width: 600px) {
        padding: 0rem;
        width: 90vw;
        max-width: 100vw;
    }

    a {
        text-decoration: none;
        color: ${background.light};
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

        &:hover {
            color: ${background.yellowLeve}
        }

        @media (max-width: 600px) {
            margin-top: 1rem;
        }
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    width: 30vw;
    max-width: 100vw;

    @media (max-width: 600px) {
        padding: 0rem;
        width: 90vw;
        max-width: 100vw;
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
    max-width: 100vw;
    
    @media (max-width: 600px) {
        padding: 1rem 0rem;
        width: 90vw;
        max-width: 100vw;
    }
    
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
    width: 30vw;

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

        filter: drop-shadow(0 0 5px rgba(255, 255, 0, 2)); 

    }
`;
export const FacebookLogo = styled(FacebookIcon)`
    &:hover {
        cursor: pointer;
        color: ${background.yellowLeve};

        filter: drop-shadow(0 0 5px rgba(255, 255, 0, 2)); 

    }
`;
export const LinkedinLogo = styled(LinkedInIcon)`
    &:hover {
        cursor: pointer;
        color: ${background.yellowLeve};

        filter: drop-shadow(0 0 5px rgba(255, 255, 0, 2)); 

    }
`;
import styled from "@emotion/styled"
import { background } from "../../styles"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
    
    @media (max-width: 900px) {
        padding: 0rem;
    }

    img { 
        @media (max-width: 900px) {
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
    
    @media (max-width: 900px) {
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
    width: 30vw;
    
    @media (max-width: 900px) {
        width: 100vw;
        padding: 2rem 0;
    }
    
    p {
        font-family: "Metropolis";
        font-size: 1.2rem;
        
        @media (max-width: 900px) {
            font-size: 1rem;
        }
        
    }
    
    .phoneNumber {
        @media (max-width: 900px) {
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
    
    @media (max-width: 900px) {
        padding: 0rem;
        width: 100vw;
    }

    a {
        text-decoration: none;
        color: ${background.light};
        &:hover {
            font-weight: bold;
        }
    }

    .pageLink { 
        @media (max-width: 900px) {
            margin-top: 1rem;
        }
    }

    .pageLinkGenerator {
        font-weight: bold;
        margin-top: 1rem;

        @media (max-width: 900px) {
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

    @media (max-width: 900px) {
        padding: 0rem;
        width: 100vw;
    }

    h6 {
        margin-top: 2rem;
        font-weight: bold;
        line-height: 1rem;
        
        @media (max-width: 900px) {
            margin-top: 3rem;
        }
    }

    .input {
        width: 20vw;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem 0rem;
    
    @media (max-width: 900px) {
        padding: 1rem 0rem;
    }
    
    .socialIcon {
        font-size: 2rem;
        
        @media (max-width: 900px) {
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

    @media (max-width: 900px) {
        max-width: 100vw;
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
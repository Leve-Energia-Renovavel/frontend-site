import styled from "@emotion/styled"
import { background } from "../../styles"

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
    `

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;
    `;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    width: 30vw;
    p {
        font-size: 1.2rem;
        
    }
    `;


export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    width: 30vw;
    a {
        text-decoration: none;
        color: ${background.light};
        &:hover {
            font-weight: bold;
        }
    }
    `;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    width: 30vw;
    `;



export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1 0rem;
    `;

export const CallToActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 30vw;

    `;

export const RightsContainer = styled.div`
    padding: 2rem;

`;

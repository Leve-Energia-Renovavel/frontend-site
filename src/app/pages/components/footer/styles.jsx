import styled from "@emotion/styled"
import { background } from "../../styles"

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${background.primary};
    color: ${background.light};
    width: 100%;
    padding: 2rem;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    `

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        font-size: 1.2rem;

    }
`;


export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    a {
        text-decoration: none;
        color: ${background.light};
        &:hover {
            font-weight: bold;
        }
    }
`;



export const ContactContainer = styled.div``;
export const SocialMediaContainer = styled.div``;
export const CallToActionContainer = styled.div``;
export const RightsContainer = styled.div``;

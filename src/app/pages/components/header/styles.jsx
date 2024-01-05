import styled from "@emotion/styled"
import { background } from "../../styles"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: ${background.primary};
    opacity: 0.8;
    padding-top: .5rem;
    padding-bottom: .5rem;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;

    .logoImage {
        &:hover {
            cursor: pointer;
        }
    }
    
    /* @media (max-width: 800px) {
        width: 90vw;
    }
    @media (max-width: 400px) {
        width: 100%;
    } */
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
`

export const MenuItem = styled.li`
    a {
        text-decoration: none;
        padding: 1rem;
        color: ${background.light};   

        &:hover {
            font-weight: bold;
        }
    }

`;

export const ButtonContainer = styled.div``;
export const LogoContainer = styled.div``;
export const NavContainer = styled.div``;
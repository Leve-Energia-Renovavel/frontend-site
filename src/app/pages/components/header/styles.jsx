import styled from "@emotion/styled"
import { background } from "../../styles"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    overflow: hidden;
    background-color: rgba(0, 117, 255, 0.9);
    backdrop-filter: blur(2px); /* Add a slight blur effect */
    -webkit-backdrop-filter: blur(2px); /* For Safari */
    padding-top: .5rem;
    padding-bottom: .5rem;

    width: 100%;
    text-align: center;
    font-size: 1.2rem;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

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

export const HeaderHeightComponent = styled.div`
    background-color: ${background.primary};
    background-color: green;
    padding-top: 8vh;  //margin for header

`;
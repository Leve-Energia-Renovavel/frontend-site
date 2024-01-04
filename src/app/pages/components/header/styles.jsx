import styled from "@emotion/styled"
import { background } from "../../styles"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${background.primary};
    width: 100%;
    
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
        color: ${background.light};   
    }

`;
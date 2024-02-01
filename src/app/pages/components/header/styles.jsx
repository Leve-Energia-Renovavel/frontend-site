import styled from "@emotion/styled"
import { background } from "../../styles"
import MenuIcon from '@mui/icons-material/Menu';

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

    width: 100vw;
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

export const ButtonContainer = styled.div`
    /* width: 20vw; */
`;
export const LogoContainer = styled.div``;

export const NavContainer = styled.div``;

export const MobileHeaderContainer = styled.header`
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

    width: 100vw;
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
        @media (max-width: 900px) {
            width: 11rem;
            height: 3.32rem; 
    
        }
    }

    @media (max-width: 900px) {
       justify-content: space-between;
       padding: 1rem 2rem;

    }

`
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background-color: ${background.blueLeve};

  font-size: 2rem;
  margin: 5rem 2rem;
  padding: 2rem;
  
  @media (max-width: 900px) {
      font-size: 1.5rem;
      margin: 1rem;
      padding: 1rem;
    }

  .closeIcon {
    color: ${background.white}; 
    font-size: 5rem;
    margin: 0 auto;
    cursor: pointer;
    
    @media (max-width: 900px) {
        font-size: 4rem;
    }
    
  }
`;


export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UlMobile = styled.ul`
  list-style-type: none;
  `;

export const MenuItemMobile = styled.li`
    margin: 2rem;

    a {
        text-decoration: none;
        padding: 1rem;
        color: ${background.light};   
        cursor: pointer;
        
        @media (max-width: 900px) {
            padding: .25rem;
        }

        &:hover {
            font-weight: bold;
        }
    }

`;

export const MenuBurguer = styled(MenuIcon)`
    color: ${background.white};
    font-size: 2rem;
    cursor: pointer;
`
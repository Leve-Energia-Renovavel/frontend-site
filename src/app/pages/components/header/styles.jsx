import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';
import { background } from "../../styles";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    background-color: ${background.blueLeve};
    backdrop-filter: blur(2px); /* Add a slight blur effect */
    -webkit-backdrop-filter: blur(2px); /* For Safari */
    padding-top: .5rem;
    padding-bottom: .5rem;
    
    height: 90px;
    width: 100vw;
    max-width: 100vw;
    text-align: center;
    font-size: 1.2rem;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    
    @media (max-width: 1900px) {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1rem;
    }
    @media (max-width: 1600px) {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1rem;
    }
    @media (max-width: 1300px) {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1rem;
    }
    @media (max-width: 1200px) {
        padding-top: 0;
        padding-bottom: 0;
        font-size: .8rem;
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
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        padding: 1rem;
        color: ${background.white};  
        transition: font-weight 0.3s ease;
        
        &:hover {
            font-weight: bold;
        }
        
        @media (max-width: 1300px) {
            padding: 0 .5rem;
        }
    }
    
    .helloUser {
        font-weight: bold;

    }

`;
export const HeaderMenuItem = styled.li`
    display: flex;
    align-items: center;

    span {
        text-decoration: none;
        padding: 1rem;
        color: ${background.blueLeve};  
        
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    text-align: center;

    @media (max-width: 1300px) {
        margin: 0;
        padding: 0;
        width: 40vw;
        max-width: 50vw;
    }
    @media (max-width: 1200px) {
        margin: 0;
        padding: 0;
        width: 40vw;
        max-width: 40vw;
    }
    @media (max-width: 1000px) {
        margin: 0;
        padding: 0;
        width: 30vw;
        max-width: 40vw;
    }
`;
export const LogoContainer = styled.div`
    .logoImage {
        width: 200px;
        height: 60px;
        
        &:hover {
            cursor: pointer;
        }
        @media (max-width: 1300px) {
            width: 150px;
            height: auto;
            margin: 0 1rem;
        }

    }
`;

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

    animation: ${fadeInUp} 0.5s ease-out;

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

export const installationFieldStyle = {
    fontFamily: 'Metropolis',
    fontWeight: '600',
    color: '#FFF',
    '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0075FF', // Border color on hover
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: '#0075FF', // Avoid the blue background on focus
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#0075FF', // Border color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#0075FF', // Border color on hover
    },
    '.MuiSvgIcon-root ': {
        fill: "white !important",
    },
}
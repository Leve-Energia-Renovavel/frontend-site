import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

import DownloadIcon from '@mui/icons-material/Download';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';



export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem 4rem;
  background-color: ${background.light};
  
  position: absolute;
  top: 90vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;
  
  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100vw;
    
    position: static; 
    top: auto;
    left: auto; 
    transform: none; 
    z-index: auto; 

    padding: 2rem 1rem;

  }

  h1 {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${background.primary}
  }
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Contract = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem;
    
    @media (max-width: 600px) {
      flex-direction: column;
      margin: 1rem;
    }
`;

export const ContractLeftContent = styled.div`
    display: flex;
    flex-direction: column;

    .contractName{ 
      font-weight: bold;
      font-size: 24px;
      
      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    .signButton {
      cursor: pointer;

    }
`;
export const ContractRightContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    color: ${background.blueLeve};

    @media (max-width: 600px) {
        margin: 0 auto;
      }

    h6 {
      font-size: 1.2rem;
    }
    h6 {
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
`;

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
    
    @media (max-width: 600px) {
      flex-direction: column;
    }

`;


export const RegisterFormProgressContainer = styled.div`
 display: flex;
 flex-direction: row; 
 align-items: center; 
 padding: 1rem 0;

 h2{ 
  font-weight: bold; 
  color: ${background.yellowLeve};
  margin-right: 1rem;
 }

 .progressBar {
    height: .75rem;
    width: 100%;
    border-radius: 5px;

    .MuiLinearProgress-colorPrimary {
      background-color: ${background.greyLeve};
    }

    .MuiLinearProgress-barColorPrimary {
      background-color: ${background.yellowLeve};
    }
 }
`
export const Download = styled(DownloadIcon)`
  cursor: pointer;
  font-size: 30px;
  margin: 0 .5rem;
  `;
export const People = styled(PeopleIcon)`
cursor: pointer;
font-size: 30;
margin: 0 .5rem;
`;
export const Search = styled(SearchIcon)`
cursor: pointer;
  font-size: 30;
   margin: 0 .5rem;
`;
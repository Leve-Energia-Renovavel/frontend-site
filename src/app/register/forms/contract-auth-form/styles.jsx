import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${background.light};
  
  position: absolute;
  top: 107vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  
  width: 60vw;

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

    h1 {
      font-family: "Metropolis";
      color: ${background.textLeve};
      display: block; 
      margin: .5rem auto;
    }
    
    h6 {
      display: block; 
      color: ${background.textLeve};
      margin: .5rem auto;
    }

    .bold{ 
      font-family: "Metropolis";
      font-weight: bold;
    }

    .highlighted { 
      color: ${background.primary};
      text-decoration: underline;
      cursor: pointer;
    }
`;


export const AuthBoxes = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center; 
    justify-content: center;
`;
export const ButtonContainer = styled.div`
    margin: 0 auto;
`;
export const ResendTokenContainer = styled.div`
      display: flex;
      flex-direction: row;
      margin: 3rem auto 0 auto;
      align-items: baseline;
      color: ${background.primary};
      text-decoration: underline; 
      cursor: pointer;

      h6 {
        font-family: "Metropolis";
        color: ${background.primary};
      }
      .arrowIcon {
        font-size: 15px;
        margin-left: 2px;
      }
      `;

export const TermsAndPolicyContainer = styled.div`
        margin: 0 auto;
        max-width: 40%; 
        text-align: center; 
        color: ${background.greyLeve};
        margin: 2rem auto;

        h6 { 
          font-family: "Metropolis";
          
        }
        `;

export const SafeEnvironmentFooter = styled.div`
      display: flex; 
      flex-direction: column;
      justify-content: center; 
      color: ${background.grey}; 
      text-align: center;

      .lockIcon {
        margin: 0 auto;
      }
`;


export const alertStyles = {
  fontFamily: "Metropolis",
  fontSize: '1.5rem',
  backgroundColor: 'lightgreen',
  borderRadius: 5,
  padding: '1rem',
  alignItems: 'center',
}

export const verifiedIconStyles = {
  display: 'block',
  margin: '0 auto',
  color: background.textLeve
}
export const boxesStyles = {
  width: '5rem',
  height: '5rem',
  marginRight: '0.5rem',
  fontSize: '2rem',
  textAlign: 'center',
}
export const finishButtonStyles = { maxWidth: '10vw' }
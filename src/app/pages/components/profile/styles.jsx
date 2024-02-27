import styled from "@emotion/styled";
import { background } from "../../styles";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 2rem;

    h1 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.5rem;
        color: ${background.blueLeve};
        font-weight: 700;
    }

`
export const ProfileMainContent = styled.div`
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 80vw;
    max-width: 100vw;
`
export const ProfileChangePasswordContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 80vw;
    max-width: 100vw;
    
    .changePasswordInput {
        margin: 0 1rem;
        width: 30vw;
        max-width: 50vw;
    }
`
export const ProfileSecondaryEmailContent = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 80vw;
    max-width: 100vw;

    .secondaryEmailInput {
        margin: 0 1rem 0 0;
        width: 30vw;
        max-width: 50vw;
    }
`
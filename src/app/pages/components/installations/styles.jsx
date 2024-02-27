import styled from "@emotion/styled";
import { background } from "../../styles";
import HomeIcon from '@mui/icons-material/Home';

export const InstallationsMainContainer = styled.div`
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

export const InstallationsMainContent = styled.div`
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 80vw;
    max-width: 100vw;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
        font-family: "Metropolis", sans-serif;
        font-size: 1.2rem;
        color: ${background.grey};
        font-weight: 700;
        
        margin-left: 4px;
    }
`

export const HomeIconStyled = styled(HomeIcon)`
    color: ${background.grey};
    font-size: 1.5rem;
    
    `
export const MainInstallationInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    h3 {
        margin: 6px 0;
        font-size: 1.5rem;
        color: ${background.blueLeve};
    }
    .mainAddress {
        color: ${background.blueLeve};
        font-size: 2rem;

    }
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    padding: 0;
    margin-left: auto;

    width: 35vw;
    max-width: 40vw;
`

export const NewInstallationContent = styled.div`
    background-color: ${background.light};
    border: 1px solid ${background.blueLeve};
    border-radius: 4px;
    
    padding: 2rem;
    margin: 1rem auto;
  
    width: 80vw;
    max-width: 100vw;
`
export const NewInstallationButtonContainer = styled.div`
display: flex;
`
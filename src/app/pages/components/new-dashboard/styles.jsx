import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const NewDashboardContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 74px;


    padding: 3rem 5rem; //check for this later
    height: 100vh;  ////remove later

    background-color: ${newBackground.grey};

    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto;

`
export const NewDashboardSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};
    
    gap: 1rem;

    max-width: 320px;
`

export const NewDashboardProfile = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 15px;

    padding: 14px;

    .cpf {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        margin: 0 auto;
        color: ${newBackground.orange};
    }
`
export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;

    .profileIcon {
        color: ${newBackground.orange};
    }
    
    .username  {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 24px;
        font-weight: 500;
        color: ${newBackground.green};
        margin-right: auto;
    }
    
    .goToProfile {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.orange};
        text-decoration: underline;

        &:hover {
            cursor: pointer;
            font-weight: 600;
        }
    }
`


export const NewDashboardInstallation = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    gap: 10px;

    padding: 14px;

    border-radius: 15px;
`

export const InstallationHeader = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 1rem;   

    .installationIcon {
        width: 21px;
        height: auto;
        color: ${newBackground.orange};
    }
    
    .installationTitle {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 24px;
        font-weight: 500;
        color: ${newBackground.green};
    }
`
export const InstallationDetails = styled.div`
    .installationDetails {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 400;
        color: ${newBackground.orange};  
        
        margin-left: 34px;
    }
    
    `
export const InstallationFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 4px;
    width: fit-content;

    .addInstallationIcon {
        width: 15px;
        height: auto;
        color: ${newBackground.orange};
    }
    .addInstallation {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        color: ${newBackground.orange};
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${newBackground.orange};
    }
`
export const NewDashboardMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 15px;

    padding: 14px;
`
export const MenuOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 8px;
    margin-top: 4px;
    border-radius: 10px;

    .icon {
        width: 24px;
        height: auto;
        color: ${newBackground.orange};
        ${props => props.highlighted ? `color:${newBackground.yellow}` : ""};
    }
    .option {
        display: block;
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};
    }

    &:hover { 
        cursor: pointer;
        background-color: ${newBackground.grey};
        .option {
            text-decoration: underline;
        }
        
        .icon { 
            color: ${newBackground.orange};
        }
    }

    ${props => props.highlighted ? `background-color:${newBackground.orange}; &:hover { background-color: ${newBackground.yellow}; cursor: pointer; .option { text-decoration: underline; } .icon { color: ${newBackground.green}}}` : ""};

`
import { newBackground } from "@/app/pages/styles"
import styled from "@emotion/styled"
import { Box, Select } from "@mui/material"

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
        margin-left: 40px;
        color: ${newBackground.greyDark};

        margin-top: 8px;
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
        line-height: 26px;
        font-weight: 600;
        color: ${newBackground.green};
        margin-right: auto;
    }
    
    .goToProfile {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.green};
        
        &:hover {
            cursor: pointer;
            font-weight: 600;
            text-decoration: underline;
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
`
export const InstallationDetails = styled.div`
    .installationDetails {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 400;
        color: ${newBackground.greyDark};  
        
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
        color: ${newBackground.green};
    }
    .addInstallation {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${newBackground.green};
    }
`


export const NewDashboardMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    border-radius: 15px;

    padding: 14px;

    .loggout {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.orange};
        
        margin: 10px 0 0 auto;
        
        &:hover {
            cursor: pointer;
            font-weight: 800;
            text-decoration: underline;
        }
    }
`
export const MenuOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 8px;
    margin-top: 4px;
    border-radius: 10px;
    ${props => props.highlighted ? `background-color:${newBackground.orange}` : ""};
    ${props => props.selected ? `background-color:${newBackground.grey}` : ""};
    
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

    .memberGetMember {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.white};
    }

    .couponValue {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.yellow};
        text-decoration: underline;

        white-space: nowrap;
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

    ${props => props.highlighted ? `background-color:${newBackground.orange}; padding: 10px 12px; align-items: start; &:hover { background-color: ${newBackground.yellow}; cursor: pointer; .option { text-decoration: underline; } .memberGetMember { color: ${newBackground.green} } .icon, .couponValue { color: ${newBackground.green}; font-weight: 900; }}` : ""};

`

export const BoxInstallation = styled(Box)`
    min-width: 90px;
    width: auto;
    max-width: 120px;

`
export const SelectInstallation = styled(Select)`

    .home {
        font-family: "Graphie";
        font-weight: 600;
        font-size: 20px;
        color: ${newBackground.green};
    }

    &.MuiOutlinedInput-root {
        .MuiSelect-select {
            padding: 0 2px !important; // Remove padding
        }
        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: transparent; // Border color on hover
        }
        .MuiSelect-select:focus {
            background-color: transparent; // Avoid the blue background on focus
        }
        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: transparent !important; // Border color when focused
        }
    }

    .Mui-focused {
        border-color: purple; // Border color: ;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color: ;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color on hover
    }
    .MuiSvgIcon-root {
        fill: ${newBackground.orange} !important;
    }
`


export const installationFieldStyle = {
    fontFamily: 'Graphie',
    fontWeight: '800',
    fontSize: 20,
    padding: '0px', // Adjust the padding as needed
    color: newBackground.orange,
    '& .MuiOutlinedInput-root': {
        '&.MuiSelect-select MuiSelect-outlined .MuiInputBase-input .MuiOutlinedInput-input .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '0 !important', // Remove padding
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: newBackground.white, // Border color on hover
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: newBackground.white, // Avoid the blue background on focus
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: newBackground.orange, // Border color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: newBackground.white, // Border color on hover
    },
    '.MuiSvgIcon-root ': {
        fill: `${newBackground.orange} !important`,
    },
}
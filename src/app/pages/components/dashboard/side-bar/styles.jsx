import { background } from "@/app/pages/globalStyles"
import styled from "@emotion/styled"
import { Box, MenuItem, Select } from "@mui/material"

export const NewDashboardProfile = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 15px;

    padding: 14px;

    ${props => props.isMobileContent && "display:none;"}

    .cpf {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        margin-left: 40px;
        color: ${background.greyDark};

        margin-top: 8px;
    }

    .loadingCpf {
        display: inline-block;
        font-size: 21px;
        width: 90px;
    }

    @media (max-width: 900px) {
        ${props => props.isMobileContent && "display:block;"}
    }
`
export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;

    .profileIcon {
        color: ${background.orange};
    }
    
    .username  {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 26px;
        font-weight: 600;
        color: ${background.green};
        margin-right: auto;
        
        white-space: nowrap;
    }

    .loadingUsername {
        display: inline-block;
        font-size: 21px;
        width: 100px;
    }

    
    .goToProfile {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.green};

        white-space: nowrap;
        
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
    background-color: ${background.white};
    gap: 10px;

    padding: 14px;

    border-radius: 15px;

    ${props => props.isMobileContent && "display:none;"}

    @media (max-width: 900px) {
        ${props => props.isMobileContent && "display:block;"}
    }

`

export const InstallationHeader = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 1rem;   

    .installationIcon {
        width: 21px;
        height: auto;
        color: ${background.orange};
    }
`
export const InstallationDetails = styled.div`
    .installationDetails {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 400;
        color: ${background.greyDark};  
        
        margin-left: 34px;
    }

    .loadingAddress {
        width: 220px;
        margin-left: 35px;
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
        color: ${background.green};
    }
    .addInstallation {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${background.green};
    }
`


export const NewDashboardMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    border-radius: 15px;

    padding: 14px;

    .loggout {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 27px;
        font-weight: 500;
        color: ${background.orange};

        ${props => !props.isSideBar && "margin: 3rem 10rem 0rem 10rem;"}
        ${props => props.isSideBar && "display: none;"}
        
        text-align: start;
        
        &:hover {
            cursor: pointer;
            font-weight: 800;
            text-decoration: underline;
        }
    }
    
    @media (max-width: 900px) {
        .loggout {
            font-size: 21px;
            line-height: 27px;
            margin: 1rem auto;
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
    ${props => props.highlighted ? `background-color:${background.orange}` : ""};
    ${props => props.selected ? `background-color:${background.grey}` : ""};

    width: 100%;
    max-width: 300px;
    
    .icon {
        width: 24px;
        height: auto;
        color: ${background.orange};
        ${props => props.highlighted ? `color:${background.yellow}` : ""};
    }
    .option {
        display: block;
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};

        white-space: nowrap;
    }

    .memberGetMember {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.white};
    }

    .couponValue {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.yellow};
        text-decoration: underline;

        white-space: nowrap;
    }

    &:hover { 
        cursor: pointer;
        background-color: ${background.grey};
        .option {
            text-decoration: underline;
        }
        
        .icon { 
            color: ${background.orange};
        }
    }

    ${props => props.highlighted ? `background-color:${background.orange}; padding: 10px 12px; align-items: start; &:hover { background-color: ${background.yellow}; cursor: pointer; .option { text-decoration: underline; } .memberGetMember { color: ${background.green} } .icon, .couponValue { color: ${background.green}; font-weight: 900; }}` : ""};


    @media (max-width: 900px) {
        max-width: 100%;
    }
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
        font-size: 21px;
        line-height: 24px;
        color: ${background.green};
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
        fill: ${background.green} !important;
    }
`

export const InstallationItem = styled(MenuItem)`
    padding: 4px;

    font-family: "Graphie";
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: ${background.orange};
`


export const installationFieldStyle = {
    fontFamily: 'Graphie',
    fontWeight: '800',
    fontSize: 20,
    padding: '0px', // Adjust the padding as needed
    color: background.orange,
    '& .MuiOutlinedInput-root': {
        '&.MuiSelect-select MuiSelect-outlined .MuiInputBase-input .MuiOutlinedInput-input .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '0 !important', // Remove padding
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: background.white, // Border color on hover
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: background.white, // Avoid the blue background on focus
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: background.orange, // Border color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: background.white, // Border color on hover
    },
    '.MuiSvgIcon-root ': {
        fill: `${background.orange} !important`,
    },
}
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";
import { newBackground } from "../../styles";

export const NewInstallationsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
    `
export const NewInstallationsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .mainInstallation {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }

`
export const SelectOrCreateNewInstallation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
`

export const NewInvoicesSelectButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-height: 42px;

    background-color: transparent;
    border: 2px solid ${newBackground.green};
    padding: 12px 8px;

    border-radius: 8px;
`
export const NewInstallationAddButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-height: 42px;

    gap: 4px;

    background-color: ${newBackground.orange};
    padding: 12px 8px;
    
    border-radius: 8px;
    
    span{ 
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.white};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${newBackground.green};
    }
`


export const BoxInstallation = styled(Box)`
    min-width: 210px;
    width: fit-content;
`
export const SelectInstallation = styled(Select)`

    .defaultInstallation {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
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
        border-color: ${newBackground.green}; // Border color: ;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color: ;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color on hover
    }
    .MuiSvgIcon-root {
        fill: ${newBackground.green} !important;
    }
`




export const KeyArrowDownIcon = styled(KeyboardArrowDownIcon)`
`

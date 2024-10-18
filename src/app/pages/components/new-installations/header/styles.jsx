import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, MenuItem, Select } from "@mui/material";

export const NewInstallationsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    border: 2px solid ${background.green};
    padding: 12px 8px;

    border-radius: 8px;
`
export const NewInstallationAddButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-height: 42px;

    gap: 4px;

    background-color: ${background.orange};
    padding: 12px 8px;
    
    border-radius: 8px;
    
    span{ 
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.white};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${background.green};
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
        border-color: ${background.green}; // Border color: ;
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




export const KeyArrowDownIcon = styled(KeyboardArrowDownIcon)`
`
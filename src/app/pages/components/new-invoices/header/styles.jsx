import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";


export const NewInvoicesHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }

`
export const NewInvoicesSelectInstallation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;

    .installationIcon {
        color: ${newBackground.white};
        max-width: 18px;
        margin-right: 4px;
    }

    .selectInstallation {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.green};
    }
`
export const NewInvoicesSelectButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${newBackground.orange};
    padding: 12px 8px;

    border-radius: 8px;
`


export const InstallationIcon = styled(InventoryIcon)`
`
export const KeyArrowDownIcon = styled(KeyboardArrowDownIcon)`
`

export const BoxInstallation = styled(Box)`
    min-width: 170px;
    width: 100%;
    max-width: 176px;
`
export const SelectInstallation = styled(Select)`
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: bold;
    color: ${newBackground.white};

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
        border-color: wheat; // Border color: ;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color: ;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: transparent; // Border color on hover
    }
    .MuiSvgIcon-root {
        fill: ${newBackground.white} !important;
    }
`
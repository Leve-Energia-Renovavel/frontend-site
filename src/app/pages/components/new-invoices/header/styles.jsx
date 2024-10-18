import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Alert, Box, MenuItem, Select } from "@mui/material";


export const NewInvoicesHeader = styled.div`
    display: flex;
    flex-direction: column;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${background.orange};

        margin-right: auto;
    }

`
export const NewInvoicesSelectInstallation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    margin: 1rem 0 0 0;

    gap: 10px;

    .installationIcon {
        color: ${background.white};
        max-width: 16px;
        margin-right: 4px;
        margin-bottom: 5px;
    }

    .selectInstallation {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${background.green};
    }

    .defaultInstallation {
        font-weight: 600;
    }

    @media (max-width: 900px) {
        justify-content: center;
    }

`
export const NewInvoicesSelectButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${background.green};
    padding: 12px 8px;
    
    border-radius: 8px;

    @media (max-width: 900px) {
        width: 230px;
    }
`
export const NewInvoicesSelectDueDateButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: transparent;
    border: 2px solid ${background.orange};
    padding: 12px 8px;

    border-radius: 8px;

    .dueDateOption {
        color: ${background.orange};
    }

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
export const BoxInstallationDueDate = styled(Box)`
    min-width: 120px;
    width: 100%;
    max-width: 126px;

`
export const SelectInstallation = styled(Select)`
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: bold;
    color: ${background.white};


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
        fill: ${background.white} !important;
    }
`

export const InstallationItem = styled(MenuItem)`
    padding: 4px;

    margin-right: 20px;
    margin-top: 10px;

    font-family: "Graphie";
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: ${background.orange};
`

export const SelectDueDateChoose = styled(Select)`
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: bold;
    color: ${background.white};

    width: 210px;

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
        fill: ${background.orange} !important;
    }


`

export const StyledMenuItem = styled(MenuItem)`
  padding: 10px;
  
  span {
    font-family: "Graphie";
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    color: ${background.orange};
}

&:hover {
    background-color: ${background.grey};

    span {
        font-weight: 700;
    }
  }
`;


export const WarningBox = styled(Alert)`
    display: flex;
    align-items: center;

    margin: 1rem 0;

    width: 100%;
    font-family: "Graphie";
    font-size: 14px;
    line-height: 17px;

    border-radius: 15px;


    .underlined {
      text-decoration: underline;
    }
    
    .highlighted {
      font-weight: bold;
    }

`
import styled from "@emotion/styled";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { background } from "../../styles";

export const NewProfileContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${background.orange};
    }
`
export const NewProfileContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    gap: 10px;

    border-radius: 20px;
    padding: 1rem;

`
export const NewProfileTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 6px;
`
export const NewProfileTitleHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .profileIcon {
        color: ${background.orange};
    }
    .formTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};
    }
`
export const NewProfileEditHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    .editTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.orange};
    }
    .cancelEditTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.greyDark};
    }

    &:hover {
        cursor: pointer;

        .editTitle, .cancelEditTitle{
            text-decoration: underline;
        }

    }
`

export const EditIcon = styled(BorderColorOutlinedIcon)`
    color: ${background.orange};
    width: 18px;
    height: auto;
    
    &:hover {
        cursor: pointer;
    }
`

export const CancelEditIcon = styled(CloseIcon)`
    color: ${background.greyDark};
    width: 18px;
    height: auto;
    
    &:hover {
        cursor: pointer;
    }
`





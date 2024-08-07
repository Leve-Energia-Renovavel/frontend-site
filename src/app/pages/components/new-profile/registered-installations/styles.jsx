import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export const RegisteredInstallationsMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    
    gap: 1rem;

    .title {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
    
    @media (max-width: 900px) {
        .title {
            font-size: 23px;
            line-height: 27px;
        }
    }
`
export const RegisteredInstallationsContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 1rem;
    
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   

`

export const AddIcon = styled(AddCircleRoundedIcon)`
    color: ${newBackground.green};
`
export const NewInstallationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;

    padding: 2rem;

    border: 1px dashed ${newBackground.green};

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.greenLight};

    }

    .addNewInstallationButton {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};

        text-align: center;
    }

    @media (max-width: 900px) {
        display: none;
    }
`

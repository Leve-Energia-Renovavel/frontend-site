import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${newBackground.white};
    
    border-radius: 20px;

    width: 100%;
    height: 100%;

    max-width: 792px;
    max-height: 383px;
    
    box-shadow: 24px;

    padding: 60px 55px;


    @media (max-width: var(--medium)) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
        transform: none;

        overflow: auto;

        padding: 1rem 1rem;
    }
`

export const ModalHeader = styled.div`
    text-align: center;

    margin-bottom: 45px;

    .title { 
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 10px;
`
export const ModalTitleIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .personIcon, .installationIcon, .renewIcon {
        color: ${newBackground.orange};
    }

    .installationIcon {
        width: 20px;
        height: auto;
    }

    .personIcon {
        width: 25px;
        height: auto;
    }
`
export const ModalOption = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    gap: 10px;
    border-radius: 10px;
    border: 1px solid ${newBackground.green};

    padding: 1rem;

    width: 100%;
    max-width: 354px;

    height: 100%;
    max-height: 207px;
    height: 207px;

    .optionTitle {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        color: ${newBackground.green};

        max-width: 280px;
    }
    .optionDescription {
        font-family: "Graphie";
        font-size: 15px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.greyDark};

        max-width: 280px;
    }

    .bold, .underlined, .highlighted {
        font-family: "Graphie";
        font-size: 15px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.greyDark};
    }

    .underlined {
        text-decoration: underline;
    }
    
    .highlighted {
        text-decoration: underline;
    }
    
    .bold {
        font-weight: 600;
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.grey};
    }
    `
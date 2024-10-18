import { background } from "@/app/pages/styles";
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
    background-color: ${background.white};
    
    border-radius: 20px;

    width: 100%;
    height: auto;

    max-width: 1196px;
    
    box-shadow: 24px;

    padding: 39px 55px;

    outline: none;

    .modalTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${background.orange};
    }

    .modalDescription {
            font-family: "Graphie";
            font-size: 17px;
            line-height: 20px;
            font-weight: 600;
            color: ${background.green};

            margin-top: 29px;

            text-align: center;
    }


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

export const HistoryDetailsContainer = styled.div`
    width: 100%;
    max-width: 482px;

    margin-top: 40px;
    
    padding: 12px;
    
    border-radius: 10px;
    border: 1px solid ${background.green};
    
    `
export const FactoryDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 27px;

    padding: 10px 28px;
    
    border-radius: 10px;
    border: 1px solid ${background.green};

    .factoryName {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        color: ${background.green};

        margin: 0 auto;
        margin-bottom: 33px;
    }
`
export const FactoryDetailsContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
`

export const FactoryInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    padding: 10px;

    width: 100%;
    max-width: 220px;

    gap: 10px;

    .iconHeight {
        height: 100%;
        max-width: 27px;
        width: auto;
    }
    .iconWidth {
        width: 100%;
        max-width: 40px;
        height: auto;
    }

    .infoTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 18px;
        font-weight: 600;
        color: ${background.green};

        max-width: 190px;
    }
    .infoValue {
        font-family: "Graphie";
        font-size: 19px;
        line-height: 21px;
        font-weight: 700;
        color: ${background.green};
        background-color: ${background.yellow};

        width: fit-content;
    }


    @media (max-width: 900px) {
        justify-content: center;
        max-width: 145px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }

    @media (min-width: 425px) and (max-width: 700px) {
        justify-content: center;
        max-width: 180px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }

    @media (min-width:  350px) and (max-width: 410px) {
        justify-content: center;
        max-width: 145px;

        .iconHeight, .iconWidth {
            margin: 0 auto;
        }

        .infoTitle, .infoValue {
            text-align: center;
        }

        .infoValue { 
            border-radius: 8px;
        }
    }


`


export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;

    margin-top: 1rem;
`
export const OptionsButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px;

    border: 1px solid ${background.orange};
    border-radius: 6px;

    background-color: ${props => props.isChurn ? background.orange : background.white};
    
    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${props => props.isChurn ? background.white : background.orange};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.isChurn ? background.white : background.green};
        border-color: ${props => props.isChurn ? background.orange : background.green};
        
        span {
            color: ${props => props.isChurn ? background.orange : background.white};
        }
        
    }

`

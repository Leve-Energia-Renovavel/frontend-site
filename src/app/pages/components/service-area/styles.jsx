
import styled from "@emotion/styled";
import { background } from "../../globalStyles";

export const ServiceAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    min-height: 600px;

    max-width: 1366px;
    margin: 74px auto; 
    padding: 0 3rem;

    @media (max-width: 600px) {
      padding: 0 1rem;
    }
`
export const ServiceAreaContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;

    margin: 0 auto; 
    padding: 1rem;

    .title {
        font-family: "Graphie";
        font-size: 34px;
        line-height: 37px;
        font-weight: 600;
        color: ${background.orange};

        margin-top: 1rem;
    }

    .headerContainer {
        margin: 2rem 0;

        .MuiOutlinedInput-root {
            border-color: ${background.white};
        }

        .MuiInputLabel-root {
            color: ${background.orange};
        }
        .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 500;
        color: ${background.orange};
        }

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: ${background.orange};
        }
    }


`
export const ServiceAreaHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .stateSelect {
        width: 300px;
    }
    
    .countyTextField {
        width: 400px;
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;

        .stateSelect {
            width: 300px;
        }
        .countyTextField {
            width: 300px;
        }
    }
`
export const AreaContent = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
    .card {
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        border: 1px solid ${background.grey};

        padding: 2rem;
    }

    .stateTitle {
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 600;
        color: ${background.orange};

        margin-bottom: 2rem;
    }

    .areaNotFound {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 24px;
        font-weight: 500;
        color: ${background.green};
    }

    .backButtonContainer {
        text-align: center;
    }

    .counties {
        text-align: justify;
    }

`
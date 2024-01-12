import styled from "@emotion/styled"
import { background } from "../../styles"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${background.light};
    max-width: 100vw;

    margin-top: 8vh;    //margin for economy form
    padding: 2rem;

`
export const AboutTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${background.light};

    h1 {
        font-size: 2rem;
    }
    
    .highlightedTitle {
        color: ${background.primary};
        font-size: 1rem;

    }

    .highlighted {
        color: ${background.primary};
    }

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const AboutDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    max-width: 25vw;

    .subtitle1 {
        display: block;
    }
    .subtitle2 {
        display: block;
        margin-top: 1.5rem;
    }

    .bold {
        font-weight: bold;
    }

`
import styled from "@emotion/styled";
import { background, newBackground } from "../../styles";

export const LoadingContainer = styled.div`
    background-color: ${newBackground.orange};
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    h1 {
        font-family: "Graphie", sans-serif, system-ui, -apple-system;
        color: ${newBackground.yellow};
        font-style: bold;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 2.625rem;
    }

    .logoLeve {
        width: 20%;
        height: auto;
    }
    .circularProgress {
        color: ${newBackground.yellow};
    }
`
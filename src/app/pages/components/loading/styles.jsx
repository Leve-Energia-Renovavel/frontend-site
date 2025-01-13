import styled from "@emotion/styled";
import { background } from "../../globalStyles";

export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    overflow: hidden;

    background-color: transparent;
    backdrop-filter: blur(25px);

    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    width: 100vw;
    height: 100vh;

    h1 {
        font-family: "Graphie", sans-serif, system-ui, -apple-system;
        color: ${background.orange};
        font-style: bold;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
    }

    .logoLeve {
        width: 20%;
        height: auto;
    }
    .circularProgress {
        color: ${background.orange};
    }
`
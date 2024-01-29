import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const BannerContainer = styled.div`
    background-color: ${background.blueLeve};
    height: 140vh;
    max-width: 100vw;
    padding: 9rem 13.5rem;
`

export const ContentContainer = styled.div`
    display: "flex";
    flex-direction: "column";

    h1 {
        font-family: "Metropolis", sans-serif, system-ui, -apple-system;
        font-weight: 700;
        color: ${background.yellowLeve};
        font-size: 2.625rem;
        line-height: 2rem;
    }
    
    .subtitle {
        color: ${background.light};
        font-size: 1.125rem;
        max-width: 50vw;
        margin-top: 1rem;
    }
    .boldSubtitle {
        color: ${background.light};
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 1rem;
    }

`
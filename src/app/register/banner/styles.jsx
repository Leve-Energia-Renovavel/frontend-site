import styled from "@emotion/styled"
import { background } from "@/app/pages/styles"

export const BannerContainer = styled.div`
    background-color: ${background.primary};
    height: 80vh;
    max-width: 100vw;
    padding: 10rem 15rem;
    
`

export const ContentContainer = styled.div`
    display: "flex";
    flex-direction: "column";

    h1 {
        font-family: -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;
        font-style: bold;
        font-weight: 700;
        color: ${background.secondary};
        font-size: 3.5rem;
        line-height: 3.2rem;
    }

    .subtitle {
        color: ${background.light};
        max-width: 50vw;
        margin-top: 1.2rem;
    }
    .boldSubtitle {
        color: ${background.light};
        font-weight: bold;
        margin-top: 2rem;
    }

`
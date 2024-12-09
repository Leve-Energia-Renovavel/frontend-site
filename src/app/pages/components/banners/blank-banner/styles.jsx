import styled from "@emotion/styled";
import { background } from "@/app/pages/globalStyles";

export const BlankContainer = styled.div`
    color: ${background.white};
    max-width: 100dvw;
    height: 25dvh;
    
    @media (max-width: 900px) {
        height: 5dvh;
    }
`
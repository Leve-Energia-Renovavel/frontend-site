import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const TribancoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto;
    padding: 0 3rem;
    
    @media (max-width: 600px) {
      padding: 0;
    }
`
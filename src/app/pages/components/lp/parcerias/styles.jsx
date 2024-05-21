import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const PartnershipMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};
    
    max-width: 1366px;
    margin: 74px auto;
    padding: 0 3rem;

    position: relative;
`

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    padding-bottom: 8px;
    gap: 1rem;
    
    @media (max-width: 600px) {
      margin-top: 60px;
      flex-wrap: wrap;
      
      /* padding: 1rem 1.5rem; */
      padding: 0;

      height: auto;
    }
`


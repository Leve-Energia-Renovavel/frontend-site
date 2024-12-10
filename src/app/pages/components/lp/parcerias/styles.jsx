import { background, containerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const PartnershipMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};
    
    max-width: ${containerWidth};
    margin: 80px auto 0 auto;
    padding: 0 3rem;

    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
      margin-top: 74px;
      padding: 0 1rem;
    }
`

export const MainContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    padding-top: 1rem;
    padding-bottom: 8px;
    gap: 1rem;
    
    @media (max-width: 900px) {
      flex-wrap: wrap;
      padding: 0;
      height: auto;
    }
`


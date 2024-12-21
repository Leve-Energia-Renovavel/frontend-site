
import styled from "@emotion/styled";
import { containerWidth, headerMargin } from "../pages/globalStyles";

export const RoutingContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: ${containerWidth};
    
    margin: ${headerMargin} auto 0 auto;
    
    min-height: fit-content;
    height: 100%;
    
    @media (max-width: 600px) {
      padding: 0;
    }
    `
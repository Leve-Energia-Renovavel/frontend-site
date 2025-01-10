
import styled from "@emotion/styled";
import { headerMargin, registerContainerWidth } from "../pages/globalStyles";

export const RoutingContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: ${registerContainerWidth};
    
    margin: ${headerMargin} auto 0 auto;
    
    min-height: fit-content;
    height: 100%;

    
    @media (max-width: 600px) {
      padding: 0;
    }
    `
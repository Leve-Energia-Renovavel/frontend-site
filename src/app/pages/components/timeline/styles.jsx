import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
      opacity: 0;
      transform: translateY(20px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0);
    }
    `;
export const TimelineContentContainer = styled.div`
    border-radius:4px;
    padding: 2rem;
    width: 30vw;
    max-width: 40vw;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.3);
    
    animation: ${fadeInUp} 0.5s ease-out;
    
    margin-left: 4rem;
    `
export const TimelineContentButtonContainer = styled.div`
    padding: 1rem 1rem 1rem 0;
    `
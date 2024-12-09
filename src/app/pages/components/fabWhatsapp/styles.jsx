
import styled from "@emotion/styled";
import { fadeInUp } from "../../globalAnimations";

export const FABContainer = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #25d366;
  cursor: pointer;

  border-radius: 50%;
  padding: 4px;
  
  animation: ${fadeInUp} 0.5s ease-out;
  transition: background-color .5s ease-out;
  
  &:hover {
    background-color: #00fd5d;
  }
  
   /* Consistently place it at the bottom-right corner */
  bottom: 30px;
  right: 20px;
  
  &:hover {
    background-color: #00fd5d;
  }
  
  @media (max-width: 600px) {
    padding: 12px;
  }
  `

export const WhatsappLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  text-decoration: none;

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }

  .icon { 
    color: white;
    font-size: 38px;
  }

`
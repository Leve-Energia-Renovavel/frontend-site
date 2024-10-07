
import styled from "@emotion/styled";

export const FABContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 180px;
  z-index: 1000;
  cursor: pointer;
  background-color: #25d366;

  border-radius: 50%;
  padding: 4px;
  
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #00fd5d;
  }
  
  @media (max-width: 600px) {
    padding: 12px;
    bottom: 34%;
    right: 5%;
  }
  @media (max-width: 395px) {
    padding: 12px;
    bottom: 240px;
    right: 20px;
  }
  @media (max-width: 380px) {
    padding: 12px;
    bottom: 8%;
    right: 5%;
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
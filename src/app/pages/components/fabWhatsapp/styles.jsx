
import styled from "@emotion/styled"
import { background } from "../../styles"

export const FABContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`

export const WhatsappLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #25d366; /* WhatsApp color */
  color: white;
  font-size: 5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
      background-color: #00fd5d; /* Darker WhatsApp color on hover */

  }
`
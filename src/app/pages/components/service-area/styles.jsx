
import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const ServiceAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    max-width: 1366px;
    margin: 74px auto 0 auto; 
    padding: 0 3rem;

    @media (max-width: 600px) {
      padding: 0;
    }
`
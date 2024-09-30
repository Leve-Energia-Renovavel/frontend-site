
import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;

    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto 0 auto;   //margin-top for header
    padding: 0 3rem;

    min-height: 1000px;

    @media (max-width: 600px) {
      padding: 0;
    }
`
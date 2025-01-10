
import styled from "@emotion/styled";
import { containerWidth } from "../../globalStyles";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${containerWidth};
    margin: 74px auto 0 auto;   //margin-top for header

    min-height: 1000px;
    height: 100%;

    @media (max-width: 600px) {
      padding: 0;
    }
`
import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const NewInstallationsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .pageTitle {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
`
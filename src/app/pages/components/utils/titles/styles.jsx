import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";


export const DefaultTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4px;

    .icon {
        color: ${newBackground.orange};
    }
    .title {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${newBackground.green};
    }
`
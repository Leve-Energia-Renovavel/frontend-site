import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { newBackground } from "../../styles";

export const MobileNewHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    background-color: ${newBackground.white};

    width: 100vw;
    height: 74px;
    padding: 0 30px;
    text-align: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`
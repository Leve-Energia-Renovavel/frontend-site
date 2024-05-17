import styled from "@emotion/styled";
import { newBackground } from "../../styles";

export const NewDashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: ${newBackground.grey};

    padding: 46px 85px;

    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto;

`
export const NewDashboardSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};
    
    gap: 1rem;

    max-width: 287px;
`
export const NewDashboardContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;

    width: 100%;
    max-width: 900px;

    margin-left: 100px;
`
export const NewDashboardMainContent = styled.div`
    display: flex;
    flex-direction: row;
`
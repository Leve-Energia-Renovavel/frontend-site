import styled from "@emotion/styled";
import { background } from "../../styles";

export const NewDashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: ${background.grey};

    padding: 46px 85px;
    
    min-height: 1000px;
    /* max-width: 1920px; */
    max-width: 1366px;
    margin: 74px auto;
    
    @media (max-width: 900px) {
        min-height: 600px;
        padding: 1rem 1rem 3rem 1rem;
    }
    @media (max-width: 700px) {
        min-height: 600px;
        padding: 1rem 10px 3rem 10px;
    }
`
export const NewDashboardSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.grey};
    
    gap: 1rem;

    min-width: 287px;
    max-width: 287px;

    @media (max-width: 1300px) {
        display: none;
    }
`
export const NewDashboardContent = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 900px;

    margin-left: 100px;
    
    gap: 60px;

    @media (max-width: 1400px) {
        margin-left: 2rem;
    }
    @media (max-width: 900px) {
        margin: 0 auto;
        gap: 25px;
    }
    @media (max-width: 600px) {
        margin: 0 auto;
        gap: 16px;
    }
`
export const NewDashboardMainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    gap: 1rem;
    
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`
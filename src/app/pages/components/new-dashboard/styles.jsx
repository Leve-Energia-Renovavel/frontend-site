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
    
    @media (max-width: 900px) {
        padding: 1rem;
    }
    @media (max-width: 700px) {
        padding: 10px;
    }
`
export const NewDashboardSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.grey};
    
    gap: 1rem;

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
        gap: 30px;
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
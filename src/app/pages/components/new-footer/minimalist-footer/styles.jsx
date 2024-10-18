import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.white};

    padding: 1rem 2rem;

    min-height: 170px;

    width: 100%;
    max-width: 1500px;

    margin: 0 auto;
`
export const FooterMainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`
export const FooterMainInfo = styled.div`
    display: flex;
    flex-direction: row;
    
    .logoLeve {
        width: 100%;
        height: auto;
    }
    
    @media (max-width: 900px) {
        flex-wrap: wrap;
        justify-content: center;
    }
   
`
export const PrivacyPolicyAndHelp = styled.div`
    display: flex;
    flex-direction: row;

    gap: 8px;

    margin-left: 1rem;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: ${background.orange};
        
        &:hover {
            cursor: pointer;
            font-weight: 700;
            text-decoration: underline;
        }
    }

    @media (max-width: 900px) {
        margin: 1rem 0;
    }
`
export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 10px;
    
    .socialIcon {
        width: 30px;
        height: 30px;
        color: ${background.orange};
    }
    
    @media (max-width: 900px) {
        margin: 0 auto;
    }
`
export const FooterRightsReserved = styled.div`
    margin-left: auto;

    margin-top: 30px;

    p {
        font-family: "Graphie";
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        color: ${background.orange};
    }
    
    @media (max-width: 900px) {

        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 50px;

        text-align: center;

        p {
            font-size: 8px;
        }
    }
`
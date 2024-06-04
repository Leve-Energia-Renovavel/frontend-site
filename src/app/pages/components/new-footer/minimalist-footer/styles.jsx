import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${newBackground.white};

    padding: 1rem 2rem;

    min-height: 170px;
`
export const FooterMainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const FooterMainInfo = styled.div`
    display: flex;
    flex-direction: row;

    .logoLeve {
        width: 100%;
        height: auto;

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
        color: ${newBackground.orange};
        
        &:hover {
            cursor: pointer;
            font-weight: 700;
            text-decoration: underline;
        }
    }
`
export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 10px;

    .socialIcon {
        width: 30px;
        height: 30px;
        color: ${newBackground.orange};
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
        color: ${newBackground.orange};
    }
`
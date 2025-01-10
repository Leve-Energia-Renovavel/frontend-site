import { background, containerPadding, containerWidth } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${background.white};
    ${props => props.isPartner ? "" : `justify-content: ${props.isLandingPage ? 'center' : 'space-between'};`};
    
    border-radius: 0 0 10px 10px;

    width:100%;
    max-width: ${containerWidth};
    margin: 0 auto;

    height: 74px;
    padding: 0 ${containerPadding};
    
    position: fixed;
    top: 0;
    left: 0; 
    right: 0; 
    z-index: 1000;
    
    .profile {
        width: 45px;
        height: 45px;

        padding: 8px;

        border-radius: 30px;
        color: ${props => props.isOpen ? background.yellow : background.orange};
        background-color: ${props => props.isOpen ? background.orange : background.yellow};
        
        cursor: pointer;

        margin-left: auto;
    }

    .logoLeve {
        width: 200px; 
        height: 33px;
        cursor: pointer;
    }

    @media (max-width: 1100px) {
        padding: 0 30px;
    }
    @media (max-width: 600px) {
        width: 100vw;
        max-width: 100vw;
        margin: 0;

        .logoLeve {
            width: 155px; 
            height: 33px;
            cursor: pointer;
        }
    }
`


export const PartnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding-left: 1rem;

    .partnershipIcon {
        color: ${background.orange};
        font-weight: 700;
        font-size: 15px;
        text-align: center;
        background: linear-gradient(to bottom, #ffffff 6%, ${background.yellow} 94%);
        border: 2px solid ${background.orange};
        border-radius: 30px;
        padding: 3px 6px;
    }

    .partnerLogo {
        width: 154px;
        height: auto;
    }

    .martinsLogo {
        width: 74px;
        height: 54px;
    }
    .timLogo {
        width: 121px;
        height: 32px;
    }
    
    @media (max-width: 900px) {
        .partnerLogo {
        width: 120px;
        height: auto;
        }
    }
`

export const ProfileIcon = styled(PersonOutlineOutlinedIcon)`
`
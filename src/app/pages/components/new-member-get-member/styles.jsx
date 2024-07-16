import styled from "@emotion/styled";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { newBackground } from "../../styles";

export const MemberGetMemberContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    
    gap: 1rem;

    .title {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
`

export const MemberGetMemberContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${newBackground.green};
    border-radius: 20px;

    padding: 1rem;

    height: 180px;
    
    gap: 100px;

    `

export const MemberGetMemberTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    span {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.white};
        
        max-width: 362px;
    }
    
    .share {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.white};

    }
    
    .highlighted {
        text-decoration: underline;
        color: ${newBackground.yellow};
    }
`
export const MemberGetMemberCodeBox = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${newBackground.white};
    border-radius: 20px;
    
    padding: 10px;
    width: 100%;
    max-width: 310px;
    
    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.orange};

        text-align: center;
    }
    `
export const CodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 12px;

    .memberGetMemberCode {
        font-family: "Graphie";
        font-size: 27px;
        line-height: 32px;
        font-weight: 700;
        color: ${newBackground.orange};
    }
`
export const CodeButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 1px solid ${newBackground.orange};
    background-color: ${newBackground.white};
    
    border-radius: 8px;

    height: 40px;
    width: 90px;
    
    padding: 8px 11px;

    gap: 4px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${newBackground.orange};
        
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orange};
        span, .copyIcon {
            color: ${newBackground.white};
        }
    }

`

export const ShareContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`
export const ShareButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${props => props.share ? newBackground.orange : newBackground.green};
    border-radius: 8px;
    
    padding: 8px 11px;
    
    gap: 4px;

    span {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${newBackground.white};

        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${props => props.share ? newBackground.orangeFocused : newBackground.greenSoft};
    }

`

export const MessageIcon = styled(EmailIcon)`
    color: ${newBackground.white};
`
export const WhatsIcon = styled(WhatsAppIcon)`
    color: ${newBackground.white};  
`
export const CopyIcon = styled(ContentCopyIcon)`
    color: ${newBackground.orange};  
`
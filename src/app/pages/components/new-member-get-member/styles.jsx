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
    
    @media (max-width: 900px) {
        flex-direction: column;
        height: fit-content;
        gap: 1rem;
    }
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



export const IndicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    max-width: 500px;

    padding: 1rem 0;

    .indicationTitle {
        font-family: "Graphie";
        font-size: 21px;
        line-height: 27px;
        font-weight: 600;
        color: ${newBackground.orange};
    }
    
    .indicatorEmailInput {
        background-color: ${newBackground.white};
        border-radius: 10px;
        height: 42px;
        margin-bottom: 8px;

      border: 1px solid ${newBackground.orange};

      & .MuiInputLabel-shrink {
        /* Styles for the focused label */
        /* line-height: 2.4375em;  */
        line-height: 3em; 
      }

      .MuiOutlinedInput-input {
        // styles for the user input text
        font-family: "Graphie";
        font-size: 17px;
        height: 0.4375em;
        padding: 20px 14px;
        font-weight: 700;
        color: ${newBackground.orange};
        }

        & label {
          font-family: "Graphie";
          font-weight: 500;
          font-size: 14px;
          color:  ${newBackground.orange};
        }

        & .MuiFormLabel-root-MuiInputLabel-root {
          line-height: 2.4375em;


        }
        
        & .MuiOutlinedInput-root {
          & fieldset {
            height: 42px;
            border-radius: 10px;
            border-color: ${newBackground.white};
          }
        } 

        input {
          all: inset;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: all 1000s ease-in-out 0s;
        }

    }
`

export const IndicationButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;

    gap: 10px;
`

export const IndicateButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${newBackground.orange};
    border-radius: 8px;
    
    padding: 8px 11px;
    
    gap: 4px;

    span {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.white};

        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.orangeFocused};

        span {
            color: ${newBackground.orange};
        }
    }

`
export const CancelButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${newBackground.greyDark};
    border-radius: 8px;
    
    padding: 8px 11px;
    
    gap: 4px;

    span {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${newBackground.white};

        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        background-color: ${newBackground.grey};

        span {
            color: ${newBackground.orange};
        }
    }

`
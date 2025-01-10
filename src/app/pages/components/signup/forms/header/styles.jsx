import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export const SignupFormHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    .formHeaderTitle { 
        font-family: "Graphie";
        font-size: 27px;
        font-weight: 700;
        color: ${background.orange};

        white-space: nowrap;
    }
    
    .formHeaderSubtitle {
        font-family: "Graphie";
        font-size: 17px;
        font-weight: 600;
        color: ${background.orange};

        white-space: nowrap;
    }
`

export const SignupFormHeaderHelpContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
`

export const SignupFormHeaderHelpContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 5px;

    &:hover {
        cursor: pointer;
            h6 {
                color: ${background.orange};
            }
            .helpIcon {
                color: ${background.orange};
            }
        }

    p {
        font-family: "Graphie";
        font-size: 12px;
        font-weight: 700;
        color: ${background.green};
    }
`

export const HelpIcon = styled(HelpOutlineIcon)`
    color: ${background.green};
    width: 20px;
    height: 20px;
`
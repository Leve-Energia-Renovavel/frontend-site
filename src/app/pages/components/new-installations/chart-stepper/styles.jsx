import { newBackground } from "@/app/pages/styles";
import styled from "@emotion/styled";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px auto;
`

export const Dot = styled(FiberManualRecordIcon)`
    color: ${props => props.selected ? newBackground.green : newBackground.greyDark};
    width: 10px;
    height: auto;

    
    &:hover {
        color: ${newBackground.orange};
        cursor: pointer;
    }
`
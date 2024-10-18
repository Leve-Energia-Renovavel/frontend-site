import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px auto;
`

export const Dot = styled(FiberManualRecordIcon)`
    color: ${props => props.selected ? background.green : background.greyDark};
    width: 10px;
    height: auto;

    
    &:hover {
        color: ${background.orange};
        cursor: pointer;
    }
`
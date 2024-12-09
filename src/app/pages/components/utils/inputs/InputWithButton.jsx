import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { background } from '../../../globalStyles';
import styled from '@emotion/styled';

const StyledInput = styled(TextField)`
    padding: 0 0 0 1rem;
    appearance: none;
    background-color: ${background.light};
    border: 1px border ${background.lightBorder};
    border-radius: 8px;
    
    &.MuiOutlinedInput-root {
        padding-right: 0,
    }
    
    @media (max-width: 600px) {
        border-radius: 3px;
        width: 80vw;
        padding: 0;
    }
`
const StyledAdornment = styled(InputAdornment)`
    color: ${background.blueLeve};
    background-color: ${background.yellowLeve};
    padding: 27.5px 14px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    
    @media (max-width: 600px) {
        padding: 20px 14px;
    }

    &:hover {
        cursor: pointer;
        background-color: ${background.secondaryLight};
    }

`
export default function InputWithButton(props) {
    return (
        <StyledInput
            placeholder={props.placeholder}
            variant="standard"
            InputProps={{
                disableUnderline: true,
                endAdornment: (
                    <StyledAdornment position='end'>
                        <ArrowForwardIosIcon />
                    </StyledAdornment>
                )
            }}
        />

    );
};
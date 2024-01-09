import React from 'react';
import { Button } from '@mui/material';
import { background } from '../../../styles';

export default function DefaultButton(props) {

    const colorForVariants = {
        "contained": background.primary,
        "outlined": background.secondary,
    }
    const backgroundColorForVariants = {
        "contained": background.secondary,
        "outlined": background.primary,
    }
    const backgroundHoverColor = {
        "contained": background.light,
        "outlined": background.secondary,
    }


    return (
        <Button disableElevation={true} variant={props.variant} sx={{
            width: props.width ? props.width : null,
            textTransform: 'none',
            fontSize: 18,
            color: colorForVariants[props.variant],
            borderColor: colorForVariants[props.variant],
            backgroundColor: backgroundColorForVariants[props.variant],
            paddingY: 1,
            paddingX: 4,
            height: '3rem',
            borderRadius: '12px',
            cursor: 'pointer',
            margin: 2,
            "&:hover": {
                backgroundColor: backgroundHoverColor[props.variant],
                color: props.variant == "outlined" ? background.primary : null,
            }
        }}>{props.text}</Button>
    );
};

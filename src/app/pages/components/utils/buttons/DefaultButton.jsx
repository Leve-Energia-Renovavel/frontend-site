import React from 'react';
import { Button } from '@mui/material';
import { background } from '../../../styles';

export default function DefaultButton({ onClick, isSubmit, ...props }) {

    const colorForVariants = {
        "contained": background.primary,
        "outlined": background.secondary,
        "outlined-inverse": background.light,
    }
    const backgroundColorForVariants = {
        "contained": background.secondary,
        "outlined": background.primary,
        "outlined-inverse": background.primary,
    }
    const backgroundHoverColor = {
        "contained": background.light,
        "outlined": background.secondary,
        "outlined-inverse": background.light,
    }

    const hoverColor = {
        "contained": background.primary,
        "outlined": background.primary,
        "outlined-inverse": background.primary,

    }


    return (
        <Button
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
            disableElevation={true}
            variant={props.variant} sx={{
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
                    color: hoverColor[props.variant],
                    border: `1px solid ${hoverColor[props.variant]}`,
                }
            }}>{props.text}</Button>
    );
};

import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { background } from '../../../styles';

export default function InputWithButton(props) {
    return (
        <TextField
            placeholder={props.placeholder}
            variant="standard"
            sx={{
                padding: '0 0 0 1rem',
                appearance: 'none',
                backgroundColor: background.light,
                border: `1px border ${background.lightBorder}`,
                borderRadius: '8px',
                '& .MuiOutlinedInput-root': {
                    paddingRight: 0,
                },
            }}
            InputProps={{
                disableUnderline: true,
                endAdornment: (
                    <InputAdornment
                        sx={{
                            color: background.primary,
                            backgroundColor: background.secondary,
                            padding: '27.5px 14px',
                            borderTopRightRadius: '8px',
                            borderBottomRightRadius: '8px',
                            "&:hover": {
                                cursor: 'pointer',
                                backgroundColor: background.secondaryLight,
                            }
                        }}
                        position={props.position}
                    >
                        <ArrowForwardIosIcon />
                    </InputAdornment>
                ),
            }}
        />

    );
};
import React from 'react';
import { HeaderButtonStyle as Button } from './styles';

export default function HeaderButton(props) {
    return (
        <Button>
            <span>{props.text}</span>
        </Button >
    );
}
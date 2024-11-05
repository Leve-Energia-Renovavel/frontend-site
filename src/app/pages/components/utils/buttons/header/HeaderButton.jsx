import React from 'react';
import { HeaderButtonStyle as Button } from './styles';

export default function HeaderButton(props) {
    return (
        <Button onClick={props.onClick}>
            <span>{props.text}</span>
        </Button >
    );
}
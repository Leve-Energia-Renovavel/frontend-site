import React from 'react'
import { DefaultTitleContainer } from './styles'

export default function DefaultTitle({ icon, title }) {
    return (
        <DefaultTitleContainer>
            {icon}
            <h6 className='title'>{title}</h6>
        </DefaultTitleContainer>
    )
}
import React from 'react'
import { ErrorMessage } from '../styles/GlobalStyle';

export default function TextError(props) {
    return (
        <ErrorMessage>{props.children}</ErrorMessage>
    )
}
import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from './TextError'

function Textarea(props) {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    )
}

export default Textarea
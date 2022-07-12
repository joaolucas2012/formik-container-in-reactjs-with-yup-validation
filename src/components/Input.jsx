import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from "./TextError";

function Input(props) {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    )
}

export default Input
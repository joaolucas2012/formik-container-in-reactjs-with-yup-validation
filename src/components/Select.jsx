import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field as='select' id={name} name={name} {...rest} >
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    )
}

export default Select
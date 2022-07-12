import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from './TextError'

function RadioButtons(props) {
    const { label, name, options, ...rest } = props
    return (
        <FormControl>
            <Label>{label}</Label>
            <Field name={name} >
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </FormControl>
    )
}

export default RadioButtons
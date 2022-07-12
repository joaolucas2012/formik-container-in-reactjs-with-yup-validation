import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from './TextError'

function CheckboxGroup(props) {
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
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={Boolean(field.value.includes(option.value))}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    )
}

export default CheckboxGroup
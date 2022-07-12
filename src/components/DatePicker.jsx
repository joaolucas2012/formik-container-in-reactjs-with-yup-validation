import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import { FormControl, Label } from '../styles/GlobalStyle'
import TextError from './TextError'

function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <FormControl>
            <Label htmlFor={name}>{label}</Label>
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field
                    return (
                        <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    )
}

export default DatePicker
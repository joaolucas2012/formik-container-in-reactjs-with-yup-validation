import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';

export function LoginForm() {
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })
    const navigate = useNavigate()
    const onSubmit = values => {
        console.log('Form data', values)
        navigate('/registration')
    }
    return (
        <Centralizer>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form>
                            <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                            />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    }
                }
            </Formik>
        </Centralizer>
    )
}
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormComponents/FormikControl';
import { Centralizer } from '../components/Centralizer';

export function RegistrationForm() {
    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' },
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
    })

    const navigate = useNavigate()

    const onSubmit = values => {
        console.log('Form data', values)
        navigate('/enrollment')
    }

    return (
        <Centralizer>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form>
                            <h3>Register on our website!</h3>
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
                            <FormikControl
                                control='input'
                                type='password'
                                label='Confirm password'
                                name='confirmPassword'
                            />
                            <FormikControl
                                control='radio'
                                label='Mode of contact'
                                name='modeOfContact'
                                options={options}
                            />
                            <FormikControl
                                control='input'
                                type='text'
                                label='Phone number'
                                name='phone'
                            />
                            <button type='submit' className='button' disabled={!formik.isValid}>
                                Submit
                            </button>
                        </Form>
                    }
                }
            </Formik>
        </Centralizer>
    )
}
import React, {useRef, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import {isInTheView} from '../../utils'

import './form-block.scss'

const FormBlock = () => {
    const buttonRef = useRef(null)

    const [appeared, setAppeared] = useState(false)

    const ref = useRef(null)

    window.addEventListener('scroll', () => {
        if (isInTheView(ref)) {
            setAppeared(true)
        }
    })

    return (
        <div className={`form-block`}>
            <div className={`form-wrapper ${appeared && 'appeared'}`} ref={ref}>
                <Formik
                    initialValues={{ name: '', contact: '', description: '' }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={values => {
                        const errors = {}
                        if (!values.contact) {
                            errors.contact = 'Заполните, пожалуйста, это поле'
                            const inputs= document.getElementsByTagName('input')
                            inputs[1].focus()
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, setValues, resetForm }) => {
                        console.log('submit', values)
 
                        setValues({ name: '', contact: '', description: '' }, false)

                        setSubmitting(false)

                        //buttonRef.current.focus()

                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className={`field`}>Имя</div>
                            <Field type="text" name="name" />
                            <div className='name-with-error'>
                                <div className={`field`}>Как с Вами связаться? Укажите e-mail, телефон или мессенджер</div>
                                <ErrorMessage name="contact" component="div" className='error' />
                            </div>
                            <Field type="text" name="contact" />
                            <div className={`field`}>Сообщение</div>
                            <Field name="description" as='textarea' />
                            <button type="submit" disabled={isSubmitting} ref={buttonRef}>
                                Отправить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default FormBlock
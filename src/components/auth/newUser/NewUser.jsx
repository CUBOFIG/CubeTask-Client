import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, NewUserValidation } from './NewUserSchema'
import authContext from 'container/authContext/authContext'
import { toast } from 'react-toastify'

const NewUser = props => {

  const { message, authenticated, registerUser } = useContext(authContext)

  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }
    if (message) {
      toast(message.msg, { type: message.category })
    }
  }, [message, authenticated, props.history])

  const onSubmit = ({ name, email, password, repassword }) => {
    // console.log(`${email}-${password}-${name}-${repassword}`)

    registerUser({ name, email, password })
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign In</h1>
        <Formik validationSchema={NewUserValidation} initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div className="campo-form">
              <label>Name</label>
              <div className="field">
                <Field type="text" name="name" placeholder="Rodrigo Guzman Rolon" />
                <ErrorMessage name="name" className="error_message" component="span" />
              </div>
            </div>
            <div className="campo-form">
              <label>Email</label>
              <div className="field">
                <Field type="email" name="email" placeholder="example@email.com" />
                <ErrorMessage name="email" className="error_message" component="span" />
              </div>
            </div>
            <div className="campo-form">
              <label>Password</label>
              <div className="field">
                <Field type="password" name="password" placeholder="password123..." />
                <ErrorMessage name="password" className="error_message" component="span" />
              </div>
            </div>
            <div className="campo-form">
              <label>Confirm Password</label>
              <div className="field">
                <Field type="password" name="repassword" placeholder="password123..." />
                <ErrorMessage name="repassword" className="error_message" component="span" />
              </div>
            </div>
            <div className="campo-form">
              <button type="submit" className="btn btn-primario btn-block" >
                Sign In
              </button>
            </div>
          </Form>
        </Formik>
        <Link to={`/`} className="enlace-cuenta">Log In</Link>
      </div>
    </div >
  )
}

export default NewUser

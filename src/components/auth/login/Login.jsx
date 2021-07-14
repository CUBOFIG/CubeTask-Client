import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, LoginValidation } from './LoginSchema'
import authContext from 'container/authContext/authContext'
import { toast } from 'react-toastify'

const Login = props => {

  const { logIn, message, authenticated } = useContext(authContext)

  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects')
    }
    if (message) {
      toast(message.msg, { type: message.category })
    }
  }, [message, authenticated, props.history]);

  const onSubmit = ({ email, password }) => {
    logIn({ email, password });
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <Formik validationSchema={LoginValidation} initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
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
              <button type="submit" className="btn btn-primario btn-block" >
                Login
              </button>
            </div>
          </Form>
        </Formik>
        <Link to={`/new-user`} className="enlace-cuenta">Sign in</Link>
      </div>
    </div >
  )
}

export default Login

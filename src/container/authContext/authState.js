import React, { useReducer } from "react"
import authContext from "./authContext"
import authReducer from "./authReducer"
import clientAxios from 'config/axios'
import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCESSFUL,
  LOGIN_ERROR,
  SIGN_OFF
} from "types"
import tokenAuth from 'config/tokenAuth'

const AuthState = props => {

  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
    load: true,
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async data => {
    try {
      const answer = await clientAxios.post("/api/users", data);

      dispatch({
        type: REGISTER_SUCCESSFUL,
        payload: answer.data
      })

      userAuthenticated();

    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "error"
      }

      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      })
    }
  }

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      tokenAuth(token);
    }

    try {
      const answer = await clientAxios.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: answer.data.user
      })
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR
      })
    }
  }

  const logIn = async data => {
    try {
      const answer = await clientAxios.post('/api/auth', data);

      dispatch({
        type: LOGIN_SUCESSFUL,
        payload: answer.data
      })

      userAuthenticated();

    } catch (error) {
      // console.log(error.response.data.msg)
      const alert = {
        msg: error.response.data.msg,
        category: "error"
      }

      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      })
    }
  }

  const logOut = () => {
    dispatch({
      type: SIGN_OFF
    })
  }

  const values = {
    token: state.token,
    authenticated: state.authenticated,
    user: state.user,
    message: state.message,
    load: state.load,
    registerUser,
    userAuthenticated,
    logIn,
    logOut
  }

  return (
    <authContext.Provider value={values}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;

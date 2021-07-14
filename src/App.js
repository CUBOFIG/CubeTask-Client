import React from 'react'
import Router from './router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import tokenAuth from 'config/tokenAuth.js'
import 'react-toastify/dist/ReactToastify.css'

const token = localStorage.getItem('token');

if (token) {
  tokenAuth(token)
}

const App = () => {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;

import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from 'container/authContext/authContext'

const PrivateRoutes = ({ component: Component, ...props }) => {

  const { authenticated, userAuthenticated, load } = useContext(authContext);

  useEffect(() => {
    userAuthenticated();
    //eslint-disable-next-line
  }, [])

  return (
    <Route {...props} render={props => !authenticated && !load
      ? (
        <Redirect to="/" />
      )
      : (
        <Component {...props} />
      )} />
  )
}

export default PrivateRoutes;

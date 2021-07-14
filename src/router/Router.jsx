import React from 'react'
import Login from '../components/auth/login/Login'
import NewUser from '../components/auth/newUser/NewUser'
import Projects from '../components/projects/Projects'
import { Route, Switch } from 'react-router-dom'
import PrivateRoutes from 'routes/PrivateRoutes'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/new-user" component={NewUser} />
      <PrivateRoutes exact path="/projects" component={Projects} />
    </Switch>
  )
}

export default Router

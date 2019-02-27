import React from 'react'
import { Switch } from 'react-router-dom'


import RedirectRoute from './RedirectRoute'

// Pages Components
import Conversations from 'components/pages/Conversations'
import Login from 'components/pages/Login'


const RootRouter = ({ user }) => (
  <Switch>
    <RedirectRoute
      path="/login"
      component={Login}
      condition={!!!user}
      redirect="/"
    />
    <RedirectRoute
      path="/conversations"
      component={Conversations}
      condition={!!user}
      redirect="/login"
    />
    <RedirectRoute
      path="/"
      component={Conversations}
      condition={!!user}
      redirect="/login"
    />
  </Switch>
)

export default RootRouter

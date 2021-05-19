import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { routesMap } from "../../utils/routesMap";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const { LOGIN } = routesMap

  return (
    <Route>
      {
        () => props.isLoggedIn ? <Component {...props} /> : <Redirect to={LOGIN} />
      }
    </Route>
  )}

export default ProtectedRoute

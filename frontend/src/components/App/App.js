import React, { useState } from 'react'
import './App.sass'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import UserPage from '../UserPage/UserPage';
import { routesMap } from '../../utils/routesMap'
import api from '../../utils/Api'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { LOGIN, REGISTER, USER, MAIN, NOT_FOUND } = routesMap

  const handleRegister = (data) => {
    console.log('REG REG REG')
    console.log(data)
    // api.register().catch(err => console.log(err))
  }

  const handleLogin = (data) => {
    console.log('LOG LOG LOG')
    console.log(data)
    // api.login().catch(err => console.log(err))
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path={MAIN}>
          {
            isLoggedIn
              ? <Redirect to={USER} />
              : <Redirect to={LOGIN} />
          }
        </Route>
        <Route path={REGISTER} >
          <Register onSubmit={handleRegister} />
        </Route>
        <Route path={LOGIN}>
          <Login onSubmit={handleLogin} />
        </Route>
        <Route path={USER}>
          <UserPage />
        </Route>
        <Route path={NOT_FOUND}>
          <NotFoundPage />
        </Route>
        <Redirect to={NOT_FOUND} />
      </Switch>
    </div>
  );
}

export default App

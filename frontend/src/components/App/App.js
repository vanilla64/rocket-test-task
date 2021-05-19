import React, { useEffect, useState } from 'react'
import './App.sass'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { setToken, getToken, removeToken } from '../../utils/token'
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import UserPage from '../UserPage/UserPage';
import { routesMap } from '../../utils/routesMap'
import api from '../../utils/Api'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { LOGIN, REGISTER, USER, MAIN, NOT_FOUND } = routesMap
  const history = useHistory()
  const token = getToken()

  useEffect(() => {
    if (!token) return
    
    setIsLoggedIn(true)
    history.push(USER)
  }, [isLoggedIn])

  const handleRegister = (data) => {
    api.register(data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const handleLogin = (data) => {
    api.login(data)
      .then(res => {
        setToken(res.token)
        setIsLoggedIn(true)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path={MAIN}>
          
            isLoggedIn
              ? <Redirect to={USER} />
              : <Redirect to={LOGIN} />
          
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
        {/* <UserPage /> */}
        <Route path={NOT_FOUND}>
          <NotFoundPage />
        </Route>
        <Redirect to={NOT_FOUND} />
      </Switch>
    </div>
  );
}

export default App

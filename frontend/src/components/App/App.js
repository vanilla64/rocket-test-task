import React, { useEffect, useState } from 'react'
import './App.sass'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import {setToken, getToken, removeToken} from '../../utils/token'
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import UserPage from '../UserPage/UserPage';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { routesMap } from '../../utils/routesMap'
import api from '../../utils/Api'
import UserContext from "../../context/UserContext"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({});
  const { LOGIN, REGISTER, USER, MAIN, NOT_FOUND } = routesMap
  const history = useHistory()
  const token = getToken()

  useEffect(() => {
    if (!token) return

    api.checkToken(token)
      .then(res => {
        setUser(res)
        setIsLoggedIn(true)
        history.push(USER)
      })
      .catch(err => console.log(err))
  }, [])

  const handleRegister = (data) => {
    api.register(data)
      .then(res => history.push(LOGIN))
      .catch(err => console.log(err))
  }

  const handleLogin = (data) => {
    api.login(data)
      .then(res => {
        setToken(res.token)

        api.checkToken(res.token)
          .then(user => {
            setUser(user)
            setIsLoggedIn(true)
            history.push(USER)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  const handleUserExit = () => {
    history.push(LOGIN)
    setIsLoggedIn(false)
    setUser({})
    removeToken()
  }

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <Switch>
          <Route exact path={MAIN}>
            {
              isLoggedIn
                ? <Redirect to={USER}/>
                : <Redirect to={LOGIN}/>
            }
          </Route>
          <Route path={REGISTER} >
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path={LOGIN}>
            <Login onSubmit={handleLogin} />
          </Route>
          <ProtectedRoute
            path={USER}
            onExitClick={handleUserExit}
            isLoggedIn={isLoggedIn}
            component={UserPage}
          />
          <Route path={NOT_FOUND}>
            <NotFoundPage />
          </Route>
          <Redirect to={NOT_FOUND} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App

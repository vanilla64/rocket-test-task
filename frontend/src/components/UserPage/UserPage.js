import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import './UserPage.sass'
import { routesMap } from '../../utils/routesMap'
import UserContext from "../../context/UserContext";
import adminImg from '../../images/admin-pic.jpeg'
import userImg from '../../images/user-pic.webp'

function UserPage({ onExitClick }) {
  const { USER } =routesMap
  const user = useContext(UserContext)
  const { name, lastName, email, isAdmin } = user

  const handleExitClick = () => {
    onExitClick()
  }

  return (
    <Route path={USER}>
      <section className="user-page">
        <img className="user-page__img" src={isAdmin ? adminImg : userImg} alt="Аватар" />
        <h1 className="user-page__title">{ name + ' ' + lastName }</h1>
        <p className="user-page__mail">{ email }</p>
        <p className="user-page__text">{ isAdmin ? 'Admin' : 'Simple user'}</p>
        <button onClick={handleExitClick} className="user-page__btn">Exit</button>
      </section>
    </Route>
  )
}

export default UserPage

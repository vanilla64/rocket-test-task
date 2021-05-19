import React from 'react'
import { Route } from 'react-router'
import './UserPage.sass'
import { routesMap } from '../../utils/routesMap'

function UserPage(props) {
  const { USER } =routesMap

  return (
    <Route path={USER}>
      <section className="user-page">
        <img className="user-page__img" />
        <h1 className="user-page__title">User Name</h1>
        <p className="user-page__mail">mail@ex.com</p>
      </section>
    </Route>
  )
}

export default UserPage

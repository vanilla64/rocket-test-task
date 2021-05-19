import React from 'react'
import './UserPage.sass'

function UserPage(props) {
  return (
    <section className="user-page">
      <img className="user-page__img" />
      <h1 className="user-page__title">User Name</h1>
      <p className="user-page__mail">mail@ex.com</p>
    </section>
  )
}

export default UserPage

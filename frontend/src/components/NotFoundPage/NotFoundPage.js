import React from 'react'
import './NotFoundPage.sass'
import { Link } from "react-router-dom";
import { routesMap } from "../../utils/routesMap";

function NotFoundPage(props) {
  const { MAIN } = routesMap

  return (
    <section className="not-found">
      <h1 className="not-found__title">Not Found || 404</h1>
      <Link to={MAIN} className="not-found__link">Back</Link>
    </section>
  )
}

export default NotFoundPage

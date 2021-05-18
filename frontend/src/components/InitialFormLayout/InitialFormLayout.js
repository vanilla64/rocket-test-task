import React from 'react'
import './InitialFormLayout.sass'

function InitialFormLayout(props) {
  const { title, children } = props

  return (
    <section className="initialLayout">
      <div className="initialLayout__container">
        <h2 className="initialLayout__title">{ title }</h2>
        { children }
      </div>
    </section>
  );
}

export default InitialFormLayout


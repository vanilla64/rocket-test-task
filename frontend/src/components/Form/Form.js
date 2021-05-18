import React from 'react'
import './Form.sass'

function Form({ children, btnText, onSubmit }) {

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      { children }
      <button className="form__btn">{ btnText }</button>
    </form>
  )
}

export default Form

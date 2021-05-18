import React, { useState } from 'react'
import InitialFormLayout from "../InitialFormLayout/InitialFormLayout";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { routesMap } from "../../utils/routesMap";

function Login({ onSubmit }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const { REGISTER } = routesMap

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setValues((prev) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = (evt) => {
    onSubmit()
  }

  return (
    <InitialFormLayout title="Login">
      <Form onSubmit={handleSubmit} btnText="Login">
        <label className="form__label">
          <input
            id="email-input" type="email" name="email"
            className="form__input"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </label>
        <label className="form__label">
          <input
            id="password-input" type="password" name="password"
            className="form__input"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
      </Form>
      <p className="form__text">
        or <Link to={REGISTER} className="form__link">Register</Link>
      </p>
    </InitialFormLayout>
  )
}

export default Login

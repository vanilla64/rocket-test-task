import React, { useState } from 'react';
import Form from "../Form/Form";
import InitialFormLayout from "../InitialFormLayout/InitialFormLayout";
import { Link } from "react-router-dom";
import { routesMap } from "../../utils/routesMap";

function Register({ onSubmit }) {
  const [values, setValues] = useState({})
  const { LOGIN } = routesMap

  const handleChange = (evt) => {
    const { name, value } = evt.target
    if (name === 'isAdmin') return setValues((prev) => { return { ...prev, [name]: evt.target.checked } })
    setValues((prev) => { return { ...prev, [name]: value } })

    console.log(values)
  }

  return (
    <InitialFormLayout title="Register">
      <Form onSubmit={onSubmit} btnText="Register">
        <label className="form__label">
          <input
            id="name-input" type="text" name="name"
            className="form__input"
            placeholder="Name"
            required
          />
        </label>
        <label className="form__label">
          <input
            id="lastName-input" type="text" name="lastName"
            className="form__input"
            placeholder="Last Name"
            required
          />
        </label>
        <label className="form__label">
          <input
            id="email-input" type="email" name="email"
            className="form__input"
            placeholder="Email"
            required
          />
        </label>
        <label className="form__label">
          <input
            id="password-input" type="password" name="password"
            className="form__input"
            placeholder="Password"
            required
          />
        </label>
        <label htmlFor="isAdmin" className="form__label form__label_type_checkbox">
          <input
            onChange={handleChange}
            className="form__input form__input_type_checkbox"
            type="checkbox" name="isAdmin" id="isAdmin"/>
          <div className="form__visible-checkbox" />
          <p className="form__text">Set Admin</p>
        </label>
      </Form>
      <p className="form__text">
        or <Link to={LOGIN} className="form__link">Login</Link>
      </p>
    </InitialFormLayout>
  )
}

export default Register

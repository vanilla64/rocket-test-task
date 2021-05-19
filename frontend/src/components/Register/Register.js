import React, { useState } from 'react';
import Form from "../Form/Form";
import InitialFormLayout from "../InitialFormLayout/InitialFormLayout";
import { Link } from "react-router-dom";
import { routesMap } from "../../utils/routesMap";

function Register({ onSubmit }) {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    isAdmin: false,
  })
  const { LOGIN } = routesMap

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setValues((prev) => { return { ...prev, [name]: value } })

    console.log(values)
  }

  const handleCheckboxChange = (evt) => {
    const { name, checked } = evt.target
    setValues((prev) => { return { ...prev, [name]: checked } })
  }

  const handleSubmit = () => {
    onSubmit(values)
  }

  return (
    <InitialFormLayout title="Register">
      <Form onSubmit={handleSubmit} btnText="Register">
        <label className="form__label">
          <input
            id="name-input" type="text" name="name"
            className="form__input"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </label>
        <label className="form__label">
          <input
            id="lastName-input" type="text" name="lastName"
            className="form__input"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </label>
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
        <label htmlFor="isAdmin" className="form__label form__label_type_checkbox">
          <input
            onChange={handleCheckboxChange}
            value={values.isAdmin}
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

import { BASE_URL } from './constants';
import { routesMap } from "./routesMap";

const { REGISTER, LOGIN } = routesMap

class Api {
  constructor(url) {
    this._url = url
  }

  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  register = (data) => {
    const { name, lastName, email, password, isAdmin } = data

    return fetch(`${this._url}${REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, lastName, email, password, isAdmin
      })
    })
    .then(res => this._initialRequest(res))
  }

  login = (data) => {
    const { email, password } = data

    return fetch(`${this._url}${LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(res => this._initialRequest(res))
  }
}

const api = new Api(BASE_URL)

export default api

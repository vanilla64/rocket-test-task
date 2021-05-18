import { BASE_URL } from './constants';
import { routesMap } from "./routesMap";

const { LOGIN } = routesMap

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

  register = () => {
    return fetch(this._url, {method: 'POST'})
      .then(res => this._initialRequest(res))
  }

  login = () => {
    return fetch(`${this._url}${LOGIN}`, {method: 'POST'})
      .then(res => this._initialRequest(res))
  }
}

const api = new Api(BASE_URL)

export default api

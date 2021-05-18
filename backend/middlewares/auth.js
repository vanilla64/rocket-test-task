const jwt = require('jsonwebtoken')

const AuthError = require('../utils/errors/AuthError')
const { needAuthMsg, wrongTokenMsg } = require('../utils/errors/errorMessages')

const { JWT_SECRET } = require('../utils/constants')

module.exports.auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization || !authorization.startsWith('Bearer ')) throw new AuthError(needAuthMsg)

    const token = authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, JWT_SECRET)

    req.user = payload
  } catch (err) {
    if (err.name === 'JsonWebTokenError') return next(new AuthError(wrongTokenMsg))
    next(err)
  }
  return next()
}

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const AuthError = require('../utils/errors/AuthError')
const BadRequestError = require('../utils/errors/BadRequestError')
const ConflictError = require('../utils/errors/ConflictError')

const { emailExistMsg, validationErrorMsg, wrongPassOrEmailMsg } = require('../utils/errors/errorMessages')
const { JWT_SECRET } = require('../utils/constants')

module.exports.createUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password, isAdmin } = req.body
    const existedEmail = await User.findOne({ email });

    if (existedEmail) throw new ConflictError(emailExistMsg);

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ name, lastName, email, password: hashedPassword, isAdmin })
    res.send({
      _id: newUser._id,
      name: newUser.name,
      lastName: newUser.lastName,
      isAdmin: newUser.isAdmin
    })
  } catch (err) {
    if (err.name === 'ValidationError') return next(new BadRequestError(validationErrorMsg))

    next(err)}
}

module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')
    if (!user) throw new AuthError(wrongPassOrEmailMsg)

    const matchedPassword = await bcrypt.compare(password, user.password)
    if(!matchedPassword) throw new AuthError(wrongPassOrEmailMsg)

    const token = jwt.sign(
      { _id: user._id },
      JWT_SECRET
    )

    res.send(token)

  } catch (err) {
    next(err)
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
    res.send({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (err) {
    next(err)
  }
}

// {
//   "name": "Name",
//   "lastName": "Last Name",
//   "email": "q1qqwe@vvxvqv.ru",
//   "password": "qwerty123",
//   "isAdmin": true
// }

const userRouter = require('express').Router()
const { createUser, loginUser } = require('../controllers/users')

userRouter.post('/register', createUser)
userRouter.post('/login', loginUser)

module.exports = userRouter

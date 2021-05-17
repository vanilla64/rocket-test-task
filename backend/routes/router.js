const router = require('express').Router()
// const userRouter = require('./userRouter')
const { notFoundPageMsg } = require('../utils/errors/errorMessages')

const { createUser, loginUser } = require('../controllers/users')
const { auth } = require('../middlewares/auth')

router.post('/register', createUser)
router.post('/login', loginUser)

// router.use(userRouter)
router.use(auth)

router.get('/test', (req, res) => {
  res.send({msg: req.user._id})
})

router.use('*', (req, res) => {
  res.send({ message: notFoundPageMsg })
});

module.exports = router

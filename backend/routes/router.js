const router = require('express').Router()
const { notFoundPageMsg } = require('../utils/errors/errorMessages')

const { createUser, loginUser, getUser } = require('../controllers/users')
const { auth } = require('../middlewares/auth')

router.post('/register', createUser)
router.post('/login', loginUser)

router.use(auth)

router.get('/user', getUser)

router.get('/test', (req, res) => {
  res.send({msg: req.user._id}) // user ID
})

router.use('*', (req, res) => {
  res.send({ message: notFoundPageMsg })
});

module.exports = router

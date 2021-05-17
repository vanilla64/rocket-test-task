const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => isEmail(email, { allow_utf8_local_part: false })
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  __v: {
    type: Number,
    select: false,
  },
})

module.exports = model('user', userSchema)

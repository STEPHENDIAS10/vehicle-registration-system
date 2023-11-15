const mongoose = require('mongoose');

const { USER } = require('../constants/roles');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: USER,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model('Users', UserSchema);

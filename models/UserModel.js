const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: {type: String, required: true},
  password: {type: String, required: true},
  isActive: {type: Boolean, default: true}
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel

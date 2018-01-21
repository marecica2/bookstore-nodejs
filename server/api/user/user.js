const mongoose = require('mongoose');

const User = new mongoose.Schema({
  // "_id": new ObjectID(), // will be added automatically
  name: String,
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  userStatus: String,
  // comments: [{ ref: 'Comment' }]
});

User.methods.findById = function (cb) {
  return this.model('User').find({ _id: this._id }, cb);
};

const Model = mongoose.model('User', User);
module.exports = Model;

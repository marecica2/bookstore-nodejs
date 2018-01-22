const mongoose = require('mongoose');


/**
 * A class representing user.
 * @typedef User
 * @property {string} name the car's license plate number
 * @property {string} username username/login
 * @property {string} firstName first name
 * @property {string} lastName last name
 * @property {string} email email
 * @property {string} password secret
 * @property {string} phone phone
 * @property {string} userStatus status
 */
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

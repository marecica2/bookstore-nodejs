import logger from '../../config/logger';
import User from './user';

const Deferred = require('deferred');

class UserService {
  /**
   * returns all users
   * @returns {Promise<User[]>} list of users
   */
  all() {
    logger.info(`${this.constructor.name}.all()`);
    return User.find();
  }

  byId(id) {
    return User.find({ _id: id });
  }

  /**
   *
   * @param {User} user
   * @returns {Promise}
   */
  create(user) {
    logger.info(user);
    const usr = new User(user);
    return usr.save();
  }

  update(id, user) {
    return User.update({ _id: id }, { $set: user });
  }

  /**
   * Deletes a user
   * @param id of the user to delete
   * @returns {Promise<boolean>} resolved to boolean indicating successful deletion
   */
  remove(id) {
    const deferred = new Deferred();
    logger.info(`deleting user id ${id}`);
    User.findOneAndRemove({ _id: id })
      .then(res => {
        if (res) {
          deferred.resolve(true);
        } else {
          deferred.resolve(false);
        }
      }).catch(err => this.handleError(err, deferred));
    return deferred.promise;
  }

  handleError(err, deferred) {
    logger.error(err.stack);
    deferred.reject({ error: err, stacktrace: err.stack });
  }
}

export default new UserService();

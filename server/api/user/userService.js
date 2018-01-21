import logger from '../../config/logger';
import User from './user';

class UserService {
  all() {
    logger.info(`${this.constructor.name}.all()`);
    return User.find()
      .catch(err => logger.error(err));
  }

  byId(id) {
    return User.find({ _id: id })
      .catch(err => logger.error(err));
  }

  create(user) {
    logger.info(user);
    const usr = new User(user);
    return usr.save()
      .catch(err => logger.error(err));
  }

  update(id, user) {
    return User.update({ _id: id }, { $set: user })
      .catch(err => logger.error(err));
  }

  remove(id) {
    return User.remove({ _id: id })
      .catch(err => logger.error(err));
  }
}

export default new UserService();

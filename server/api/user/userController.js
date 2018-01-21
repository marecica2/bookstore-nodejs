import UserService from './userService';
import logger from '../../config/logger';
import greetings from '../../../shared/greetings';

export class Controller {
  all(req, res) {
    UserService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    logger.info('get by id');
    UserService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    logger.info('create');
    UserService
      .create(req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r._id}`)
        .json(r));
  }

  update(req, res) {
    logger.info('update');
    UserService
      .update(req.params.id, req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r._id}`)
        .json(r));
  }

  remove(req, res) {
    logger.info('delete');
    UserService
      .delete(req.params.id)
      .then(r => res
        .status(201)
        .json(r));
  }
}
export default new Controller();

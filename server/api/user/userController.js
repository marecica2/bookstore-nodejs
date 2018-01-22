import UserService from './userService';
import logger from '../../config/logger';
// import greetings from '../../../shared/greetings';

/**
 * User Controller
 */
export class Controller {
  all(req, res) {
    UserService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    UserService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    UserService
      .create(req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r._id}`)
        .json(r));
  }

  update(req, res) {
    UserService
      .update(req.params.id, req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r._id}`)
        .json(r));
  }

  remove(req, res) {
    UserService
      .remove(req.params.id)
      .then(success => {
        if (success) {
          return res.status(204).send();
        }
        return res.status(404).send();
      }).catch(err => {
        logger.error(req);
        res.status(400).json(err);
      });
  }
}

export default new Controller();

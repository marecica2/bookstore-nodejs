import UserService from '../../services/user.service';
import l from '../../../common/logger';
import greetings from '../../../../shared/greetings';

export class Controller {
  all(req, res) {
    l.info('sasas');
    l.info(greetings.sayHelloInEnglish());
    l.info(greetings.sayHelloInSpanish());
    UserService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    l.info('sasas');
    UserService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    l.info('sasas');
    UserService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r.id}`)
        .json(r));
  }

  update(req, res) {
    l.info('sasas');
    UserService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/users/${r.id}`)
        .json(r));
  }
}
export default new Controller();

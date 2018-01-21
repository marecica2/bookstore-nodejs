import * as express from 'express';
import controller from './userController';

export default express
  .Router()
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .post('/', controller.create)
  .put('/:id', controller.update)
  .delete('/:id', controller.remove);

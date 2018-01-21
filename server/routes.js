import usersRouter from './api/user/userRouter';

export default function routes(app) {
  app.use('/api/v1/users', usersRouter);
}

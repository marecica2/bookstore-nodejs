import './common/env';
import Server from './common/server';
import mongo from './common/mongo';
import routes from './routes';

mongo();

export default new Server()
  .router(routes)
  .listen(process.env.PORT);

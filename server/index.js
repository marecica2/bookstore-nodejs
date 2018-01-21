import './config/env';
import Server from './config/server';
import mongo from './config/mongo';
import routes from './routes';

mongo();

export default new Server()
  .router(routes)
  .listen(process.env.PORT);

import './common/env';
import Server from './common/server';

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.18.0.2:27017/ConnectionTest');
require('./api/model/team');


import routes from './routes';

export default new Server()
  .router(routes)
  .listen(process.env.PORT);

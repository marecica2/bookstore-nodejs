import logger from './logger';

const mongoose = require('mongoose');

// load the models
require('../api/user/user');

/**
 * Initializes mongo database
 */
export default function () {
  // set up promises instead of callbacks
  mongoose.Promise = Promise;

  // connect to mongo
  mongoose.connect(process.env.MONGO_URL);

  mongoose.connection.on('connected', () => {
    logger.info(`Mongoose default connection open to ' + ${process.env.MONGO_URL}`);
  });
  mongoose.connection.on('error', err => {
    logger.info(`Mongoose default connection error: ${err}`);
  });
  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection disconnected');
  });
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
}

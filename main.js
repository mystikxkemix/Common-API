const config = require('./config/main.json');
const logger = require('./tools/logger');

const express = require('express');
const routes = require('./routes');
const app = express();

logger.info('Starting.....', 'global');

routes.init(app);
app.listen(config.port, () => logger.info(`Start listening on port ${config.port}!`, 'global'));

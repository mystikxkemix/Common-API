const logger = require('./tools/logger');

const express = require('express');
const routes = require('./routes');
const app = express();

var commonback = {
    init: function(routes, config){
        routes.init(app);
    },

    startListening: function(port){
        return new Promise(function(resolve){
            app.listen(config.port, function(){
                logger.info(`Start listening on port ${port}!`, 'global');
                resolve();
            });
        })

    }
};

module.exports = {
    init: function(routes, config){
        logger.info('Starting.....', 'global');
        commonback.init(routes, config);
        commonback.startListening(config.port);
    }
}

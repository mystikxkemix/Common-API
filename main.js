const express = require('express');

const logger = require('./tools/logger');
const builder = require('./tools/builder');

var commonback = {
    configChecker: function(){
        if(!this.config){
            logger.error('No Config was given.');
            return false;
        }

        if(!this.config.port){
            logger.error('No port was given.');
            return false;
        }

        if(!this.config.routes){
            logger.error('No route was given.');
            return false;
        }

        return true;
    },

    setPreRouters: function(routers){
        if(!this['config']) this.config = {};
        this.config.preRouters = routers;
        logger.debug('Set Pre Routers: \n' + JSON.stringify(this.config.preRouters, null, 4));
    },

    setRoutes: function(routes){
        if(!this['config']) this.config = {};
        this.config.routes = routes;
        logger.debug('Set Routers: \n' + JSON.stringify(this.config.preRouters, null, 4));
    },

    setPostRouters: function(routers){
        if(!this['config']) this.config = {};
        this.config.postRouters = routers;
        logger.debug('Set Post Routers: \n' + JSON.stringify(this.config.preRouters, null, 4));
    },

    setPort: function(port){
        if(!this['config']) this.config = {};
        this.config.port = port;
        logger.debug(`Set listening port on ${port}`);
    },

    setLogLevel: function(level){
        if(!this['config']) this.config = {};
        this.config.logLevel = logLevel;
        logger.debug('Set Log level: \n' + JSON.stringify(this.config.preRouters, null, 4));
    },

    build: function(){
        if(!!this.app) return;
        if(!this.configChecker()) return;

        this.app = express();
        logger.debug('Start building');
        builder.build(this.app, this.config);
        logger.debug('End building');
    },

    start: function() {
        if(!this.app) return;
        var self = this;
        this.app.listen(this.config.port, function(){
            logger.info(`Start listening on port ${self.config.port}!`);
        });
    }
};

module.exports = {
    setPreRouters: function(routers){
        commonback.setPreRouters(routers);
    },

    setRoutes: function(routes){
        commonback.setRoutes(routes);
    },

    setPostRouters: function(routers){
        commonback.setPostRouters(routers);
    },

    setPort: function(port){
        commonback.setPort(port);
    },

    setLogLevel: function(level){
        commonback.setLogLevel(level);
    },

    start: function(){
        commonback.build();
        // commonback.start();
    }
}

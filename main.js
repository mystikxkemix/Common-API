const express = require('express');

const logger = require('./tools/logger');
const builder = require('./tools/builder');

var commonback = {
    setPreRouters: function(routers){
        if(!this['config']) this.config = {};
        this.config.preRouters = routers;
    },

    setRoutes: function(routes){
        if(!this['config']) this.config = {};
        this.config.routes = routes;
    },

    setPostRouters: function(routers){
        if(!this['config']) this.config = {};
        this.config.postRouters = routers;
    },

    setPort: function(port){
        if(!this['config']) this.config = {};
        this.config.port = port;
    },

    setLogLevel: function(level){
        if(!this['config']) this.config = {};
        this.config.logLevel = logLevel;
    },

    build: function(){
        this.app = express();
        builder.build(this.app, this.config);
    },

    start: function() {

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
        commonback.start();
    }
}

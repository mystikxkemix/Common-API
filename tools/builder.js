const logger = require('./logger');

var builder = {
    build: function(app, config){
        if(config.preRouters) builder.setRouters(app, config.preRouters);
        if(config.routes) builder.setRoutes(app, config.routes);
        if(config.postRouters) builder.setRouters(app, config.postRouters);
    },

    setRouters: function(app, routers){
        for(var method in routers){
            if(!app[method]){
                logger.warning("Could not find method: " + method);
                continue;
            }

            var mthRoutes = routers[method];
            for(var route in mthRoutes){
                var routeArray = mthRoutes[route];

                if(!Array.isArray(routeArray)){
                    routeArray = [routeArray];
                }

                for(var i = 0; i < routeArray.length; i++){
                    logger.debug('Set routers ' + (i+1) + ' for \nmethod: ' + method + '\nroute: '+ route);
                    app[method](route, routeArray[i]);
                }
            }
        }
    },

    setRoutes: function(app, routes){

    }
}

module.exports = {
    build: function(app, config){
        builder.build(app, config);
    }
}

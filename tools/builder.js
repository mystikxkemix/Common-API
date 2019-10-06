const logger = require('./logger');

var builder = {
    build: function(app, config){
        if(config.preRouters) builder.setRouters(app, config.preRouters);
        if(config.routes) builder.setRoutes(app, config.wrapper, config.routes);
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
                    logger.debug('Set routers ' + (i+1) + ' for \n> method: ' + method + '\n> route: '+ route);
                    app[method](route, routeArray[i]);
                }
            }
        }
    },

    setRoutes: function(app, wrapper, routes){
        for(var method in routes){
            if(!app[method]){
                logger.warning("Could not find method: " + method);
                continue;
            }

            var mthRoute = routes[method];
            for(var routePath in mthRoute){
                var route = mthRoute[routePath];

                if(Array.isArray(route)){
                    logger.warning("No array for route '" + routePath + "' of method '" + method + "'");
                    continue;
                }

                if(wrapper){
                    app[method](routePath, function(req, res, next){
                        wrapper(req, res, next, route);
                    });
                } else {
                    app[method](routePath, route);
                }
            }
        }
    }
}

module.exports = {
    build: function(app, config){
        builder.build(app, config);
    }
}

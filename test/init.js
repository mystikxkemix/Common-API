const commonapi = require('../main.js');

var preRouters = {
    'all': {
        '/':
            function (req, res, next) {
                console.log('Accessing to API ...');
                next(); // pass control to the next handler
            }

    },
    'toto':{}
};

var routes = {
    'all': {
        '/': function(req, res, next){
            console.log('route :');
            console.log(req);
            next();
        }
    }
};

var postRouters = {
    'all': {
        '/':[
            function (req, res, next) {
                res.send('hello world');
            }
        ]
    }
};

var wrapper = function(req, res, next, route){
    route(req, res)
        .then(function(result){
            console.log('Success : ' + result);
            next();
        })
        .catch(function(err){
            console.log(err);
            next();
        });
}

commonapi.setPreRouters(preRouters);
commonapi.setRoutes(routes);
commonapi.setPostRouters(postRouters);
// commonapi.setRouteWrapper(wrapper);
commonapi.setPort(3000);
commonapi.start();

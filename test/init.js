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
        '/': function(req, res){
            console.log('route : \n' + JSON.stringify(req, null, 4));
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

console.log(preRouters);

commonapi.setPreRouters(preRouters);
commonapi.setRoutes(routes);
commonapi.setPostRouters(postRouters);
commonapi.setPort(3000);
commonapi.start();

# Express Common API

# Usage

```
const commonApi = require('express-commonapi');
```

## Listening port

```
commonapi.setPort("3000");
```

## Pre Routers
```
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

commonapi.setPreRouters(preRouters);
```
`toto` will be ignored because its not a htpp method.
the route object can be a function or a function array.

## Routes
```
var routes = {
    'all': {
        '/': function(req, res){
            console.log('route : \n' + JSON.stringify(req, null, 4));
        }
    }
};

commonapi.setRoutes(routes);
```

## Post Routers
```
var postRouters = {
    'all': {
        '/':[
            function (req, res, next) {
                res.send('hello world');
            }
        ]
    }
};

commonapi.setPostRouters(preRouters);
```
the route object can be a function or a function array.

## To start the api
```
commonapi.start();
```


## Complete usage

```
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

var wrapper = function(req, res, next, route){
    route(req, res)
        .then(function(result){
            next(result)
        })
        .catch(function(err){
            console.log(err);
        });
}

commonapi.setPreRouters(preRouters);
commonapi.setRoutes(routes);
commonapi.setPostRouters(postRouters);
commonapi.setRouteWrapper(wrapper);
commonapi.setPort(3000);
commonapi.start();
```

const chalk = require('chalk');

const bm = function(message, context, _chalk){
    context = context || 'Common-API';

    var date = new Date();

    var msg = '[' + Date.now() + '] - ';
    msg += `[${context}]:\n${message}`;
    msg +=  '\n-------------------------------------\n';

    return _chalk(msg);
};

const logger = {
    debug: function(message, context){
        console.log(bm(message, context, chalk.greenBright));
    },
    error: function(message, context){
        console.log(bm(message, context, chalk.white.bgRed.bold));
    },
    warning: function(message, context){
        console.log(bm(message, context, chalk.yellow));
    },
    info: function(message, context){
        console.log(bm(message, context, chalk.blueBright));
    }
}

module.exports = {
    debug: function(message, context){
        logger.debug(message, context);
    },
    error: function(message, context){
        logger.error(message, context);
    },
    warning: function(message, context){
        logger.warning(message, context);
    },
    info: function(message, context){
        logger.info(message, context);
    }
}

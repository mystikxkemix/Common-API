const chalk = require('chalk')

const logger = {
    debug: function(message, context){
        console.log(chalk.blue(`[${context}]: ${message}`));
    },
    error: function(message, context){
        console.log(chalk.white.bgRed.bold(`[${context}]: ${message}`));
    },
    warning: function(message, context){
        console.log(chalk.blue(`[${context}]: ${message}`));
    },
    info: function(message, context){
        console.log(chalk.gray(`[${context}]: ${message}`));
    },
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

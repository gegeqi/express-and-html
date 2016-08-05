'use strict';
let Router = require('./Router.js');
let repl = require('repl');
let help = require('./help');
let router = new Router('init');

help(input => console.log(input));

repl.start({
    prompt: '>',
    eval: (cmd, context, filename, callback) => {
        let outputAndExit = function (input) {
            callback(null, input);
        };
        router.run(cmd.trim(), outputAndExit);
    }
});





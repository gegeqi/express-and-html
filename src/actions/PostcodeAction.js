let agent = require('superagent');
let help = require('../help.js');

class PostcodeAction {
    doAction(cmd,output,currentState) {
        switch (cmd) {
            case 'q':
                currentState.value = 'init';
                help(output);
                break;
            default:
                agent
                    .get('localhost:3000/zipcode')
                    .query({code:cmd})
                    .end(function (error, response) {
                       console.log( cmd + ' => ' + response.text);
                        //output( cmd + ' => ' + response.text);
                        output('please input postcode or input q to quit:');
                    });
                //output('please input postcode or input q to quit:');
                break;
        }
    }
}
module.exports = PostcodeAction;


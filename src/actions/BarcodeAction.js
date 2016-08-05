let agent = require('superagent');
let help = require('../help.js');

class BarcodeAction{
    doAction(cmd, output, currentState) {
        switch (cmd) {
            case 'q':
                currentState.value = 'init';
                help(output);
                break;
            default:
                agent.
                    get('localhost:3000/barcode')
                    .query({code:cmd})
                    .end(function (error,response) {
                        console.log(cmd + ' => ' + response.text);
                        output('please input barcode or input q to quit:');
                    });
                //output('please input barcode or input q to quit:');
                break;
        }
    }
}
module.exports = BarcodeAction;


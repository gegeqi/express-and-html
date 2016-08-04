/**
 * Created by wanggenwang on 16-8-1.
 */
//let BarcodeTransformer = require('../core/BarcodeTransformer.js');
let agent = require('superagent');

class BarcodeAction{
    constructor(){
        this.name='barcode';
        this.help=`
Please input barcode
or input q to quit:`.trim();
    };
    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
                break;
            default:
                //console.log(cmd + ' => ' +(new BarcodeTransformer).barcodeToZIP(cmd));
                //return 'barcode';
                agent.
                    get('localhost:3000/barcode')
                    .query({code:cmd})
                    .end(function (error,response) {
                        console.log(cmd + ' => ' + response.text);
                    });
                return 'barcode';
        }
    }
}
module.exports = BarcodeAction;


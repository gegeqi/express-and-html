/**
 * Created by wanggenwang on 16-8-1.
 */
//let ZIPTransformer = require('../core/ZIPTransformer.js');
let agent = require('superagent');

class PostcodeAction {
    constructor() {
        this.name = 'postcode';
        this.help = `
Please input postcode
or input q to quit:`.trim();
    };

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
                break;
            default:
                agent
                    .get('localhost:3000/zipcode')
                    .query({code:cmd})
                    .end(function (error, response) {
                        console.log( cmd + ' => ' + response.text);
                    });
                return 'postcode';
        }
    }
}
module.exports = PostcodeAction;


'use strict';
let BarcodeAction = require('./actions/BarcodeAction.js');
let InitAction = require('./actions/InitAction.js');
let PostcodeAction = require('./actions/PostcodeAction.js');

class Router {
    constructor(initalState) {
        this.currentState = {
            value: initalState
        };
    }
    run(cmd, outputAndExit) {
        switch (this.currentState.value) {
            case 'postcode':
                (new PostcodeAction).doAction(cmd, outputAndExit, this.currentState);
                break;
            case 'barcode':
                (new BarcodeAction).doAction(cmd, outputAndExit, this.currentState);
                break;
            case 'init':
                (new InitAction).doAction(cmd, outputAndExit, this.currentState);
                break;
            default:
                outputAndExit('Unknown current state.');
                break;
        }
    }
}

module.exports = Router;

/*
class Router {
    constructor(actions){
        this.currentAction={
            value:'init'
        };
        this.action=actions;
    }
    handle(cmd) {
        let router = this.action.find(c => c.name === this.currentAction);
        router.doAction(cmd);
        //this.currentAction = router.doAction(cmd);
    }
    start() {
        return this.action.find(v => v.name === this.currentAction);
    }
}
module.exports = Router;
*/


/**
 * Created by wanggenwang on 16-8-2.
 */
let InitAction = require('../../src/actions/InitAction.js');

describe("case 1",function () {
    let init = new InitAction();
    fit("case 1",function () {
        let cmd = '1';
        let output = jasmine.createSpy('syp');
        let currentState = jasmine.createSpy('spy');
        init.doAction(cmd, output, currentState);
        expect(output).toHaveBeenCalledWith('please input postcode or input q to quit:')
    });
});

describe("case 2",function () {
    let init = new InitAction();
    fit("case 2",function () {
        let cmd = '2';
        let output = jasmine.createSpy('syp');
        let currentState = jasmine.createSpy('spy');
        init.doAction(cmd, output, currentState);
        expect(output).toHaveBeenCalledWith('please input barcode or input q to quit:')
    });
});

describe("case q",function () {
    let init = new InitAction();
    fit("q",function () {
        let cmd = 'q';
        spyOn(process,'exit');
        init.doAction(cmd);
        expect(process.exit).toHaveBeenCalledWith();
    });
});

describe("default",function () {
    let init = new InitAction();
    fit("default",function () {
        let cmd = 'xixi';
        let output = jasmine.createSpy('spy');
        let currentState = jasmine.createSpy('spy');
        init.doAction(cmd,output,currentState);
        expect(output).toHaveBeenCalledWith('Input error');
    });
});

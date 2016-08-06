/**
 * Created by wanggenwang on 16-8-2.
 */
let postcodeAction = require('../../src/actions/PostcodeAction.js');

describe("postcodeDoaction",function () {
    let postcode =new  postcodeAction();
    fit("postcodeAction",function () {
        let cmd = 'q';
        let output = jasmine.createSpy("spy");
        let currentState= jasmine.createSpy("spy");
        postcode.doAction(cmd,output,currentState);
        expect(output).toHaveBeenCalledWith(`
Welcome
1 - postcode
2 - barcode
3 - quit`.trim());
    });
})

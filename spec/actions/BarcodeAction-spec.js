/**
 * Created by wanggenwang on 16-8-1.
 */
"use strict";
let barcodeAction = require('../../src/actions/BarcodeAction.js');

describe("barcodeDoaction",function () {
    let barcode =new  barcodeAction();
    fit("barcodeAction",function () {
        let cmd = 'q';
        let output = jasmine.createSpy("spy");
        let currentState= jasmine.createSpy("spy");
        barcode.doAction(cmd,output,currentState);
        expect(output).toHaveBeenCalledWith(`
Welcome
1 - postcode
2 - barcode
3 - quit`.trim());
    });
})







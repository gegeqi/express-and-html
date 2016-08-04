/**
 * Created by wanggenwang on 16-8-3.
 */
let express = require('express');
let app = express();

let ZIPTransformer = require('./core/ZIPTransformer.js');
let BarcodeTransformer =require('./core/BarcodeTransformer.js');

app.get('/zipcode?', function (req, res) {
    res.send((new ZIPTransformer).ZIPToBarcode(req.query.code));
});
app.get('/barcode?', function (req, res) {
    res.send((new BarcodeTransformer).barcodeToZIP(req.query.code));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
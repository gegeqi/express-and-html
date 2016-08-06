/**
 * Created by wanggenwang on 16-8-3.
 */
let cors = require('cors')
let express = require('express');
let app = express();
app.use(cors());

let ZIPTransformer = require('./core/ZIPTransformer.js');
let BarcodeTransformer =require('./core/BarcodeTransformer.js');

//app.use(express.static(__dirname + '/'));

app.get('/zipcode?', function (req, res) {
console.log(req.query.code)
    //let aaa=(new ZIPTransformer).ZIPToBarcode(req.query.code)
    res.send({zipcode:(new ZIPTransformer).ZIPToBarcode(req.query.code)});

});
app.get('/barcode?', function (req, res) {
    res.send({barcode:(new BarcodeTransformer).barcodeToZIP(req.query.code)});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
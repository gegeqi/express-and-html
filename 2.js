/**
 * Created by wanggenwang on 16-8-4.
 */
function callback() {
    console.log("Callback called! Num: ");
}

function fn(callback){
    console.log('hello.');
    callback();　
}

fn(callback);
　





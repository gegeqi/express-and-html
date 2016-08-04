/**
 * Created by wanggenwang on 16-8-4.
 */
function fn(arg1, arg2, callback){
    var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(num);　　//传递结果
}

fn(10, 20, function(num) {
    console.log("Callback called! Num: " + num);
});
　
/*
function sum(num) {
    console.log("Callback called! Num: " + num);
}
*/


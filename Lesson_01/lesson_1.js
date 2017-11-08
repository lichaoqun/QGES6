/**
 * Created by lichaoqun on 2017/11/7.
 */
console.log(1111);
var a = 12;
function  f(){
    console.log(a);
}
f();

var config = (function(){
    var config = [];
    config.push(1);
    config.push(2);
    config.push(3);
    return config;
}());

console.log(config);

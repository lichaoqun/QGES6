/**
 * Created by lichaoqun on 2017/11/7.
 */
function  asyncFun(a, b, cb){
    setTimeout(function(){
        cb(a + b);
    }, 2000);
}

asyncFun(1, 2, function (result ) {
    console.log(result);
});

console.log(4);




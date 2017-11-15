/**
 * Created by lichaoqun on 2017/11/7.
 * 异步方法 Promise的用法
 */
//function  asyncFun(a, b, cb){
//    setTimeout(function(){
//        cb(a + b);
//    }, 900);
//}
//
//asyncFun(1, 2, function (result ) {
//    console.log(result);
//});
//
//console.log(4);




function  asyncFuc(a, b){
    return new Promise(function(resolve, reject){

        //if(typeof a != 'number' || typeof  b != 'number'){
        //    reject(new Error('this is no number....'));
        //}
        if(typeof a != 'number' || typeof  b != 'number'){
            reject('this is no number....');
        }

        setTimeout(function () {
            console.log(a, b);
            resolve(a + b);
        }, 2000);
    });
}

    asyncFuc(1, 2)
        .then(function(result){
        if(result > 2){
            return asyncFuc(result, 2);
        }

    }, function(error){
            console.log(error);
        })

        .then(function(result){
        if(result>4){
            console.log('ok');
        }
    }, function(error){
            console.log(error);
        });


/**
 * Created by lichaoqun on 2017/11/10.
 */
// ==============================promise=============================
let state = 1;
function  step1(resolve, reject){
    console.log('1-1.开始-洗菜做饭');
    if (state == 1){
        resolve('洗菜做饭-完成');
    }else{
        reject('洗菜做饭-出错');
    }
}

function  step2(resolve, reject){
    console.log('2-1.开始-坐下吃饭');
    //state = 0;
    if (state == 1){
        resolve('坐下吃饭-完成');
    }else{
        reject('坐下吃饭-出错');
    }
}

function  step3(resolve, reject){
    console.log('3-1.开始-收拾桌子');
    if (state == 1){
        resolve('收拾桌子-完成');
    }else{
        reject('收拾桌子-出错');
    }
}

new Promise(step1)
    .then(function(result){
    console.log(`----------- | - ${result}`);
    return new Promise(step2);
})
    .then(function (result) {
    console.log(`----------- | - ${result}`);
    return new Promise(step3);
})
    .then(function(result){
    console.log(`----------- | - ${result}`);
});

console.log('主线程的结束打印');

/**
 * Created by lichaoqun on 2017/11/13.
 */
//=============================== 006 Generator函数的认识 ==========================
// - 初识  Generator函数
function  *fn(){
    console.log('hello');
    return '666';
}

fn();// 什么都不会打印

fn().next();// hello

let it = fn();
it.next(); // hello

let result = it.next();
console.log(result);// { value: undefined, done: true } value: 表示返回的结果值 done: 表示函数是否执行完毕


// - it1.next() 的值的由来和使用
function  *fn1(){
    console.log('hello---1');
    return '666---1';
}
let it1 = fn1();
let result1 = it1.next();
console.log(result1);// hello---1    { value: '666---1', done: true }


// - 使用yield 分段返回值
function  *fn2(){
    yield  1;
    yield  2;
    yield  3;
    yield  4;
    yield  5;
    yield  6;
    return 7;
}

let it2 = fn2();
console.log(it2.next());// { value: 1, done: false }
console.log(it2.next());// { value: 2, done: false }
console.log(it2.next());// { value: 3, done: false }
console.log(it2.next());// { value: 4, done: false }
console.log(it2.next());// { value: 5, done: false }
console.log(it2.next());// { value: 6, done: false }
console.log(it2.next());// { value: 7, done: true }
console.log(it2.next());// { value: undefined, done: true }

// - 用 for...of 打印
let it3 = fn2();
for(let v of it3){
    console.log(v);
}
/*
* 1
* 2
* 3
* 4
* 5
* 6
* */

// - yield 值和赋值
function  *fn4(_name){
    let name = yield _name;// yield 默认始终返回 undefined

    return name;
}

let it4 = fn4('leo4');
console.log(it4.next('hehe')); //  value: 'leo4', done: false }
console.log(it4.next('hehehe')); //  { value: 'hehehe', done: true }

// - 修复  yield 返回 undefined 的问题 只能通过 next() 方式赋值;
//console.log(it4.next('liang')); //  { value: 'liang', done: true }

// - yield 只能在 Generator函数 内部使用 其他函数不可以使用
//function  fn5(){
//    yield 'leo';
//    return 'liang';
//}
//
//fn5(); // SyntaxError: Unexpected string

// - 在表达式中使用 yield 需要把 yield 用括号包上
function  *fn6(){
    console.log('my QQ :' + (yield 1));
}

let fnIt6 = fn6();
console.log(fnIt6.next());// { value: 1, done: false }
fnIt6.next('121'); // my QQ :121


function  foo(a, b){
    console.log(a, b);
}

function* fn7() {
    foo(yield 'a', yield 'b'); // OK
    let input = yield; // OK
    console.log(input);
}

let fnIt7 = fn7();
console.log(fnIt7.next());// { value: 'a', done: false }
console.log(fnIt7.next('b'));// { value: 'b', done: false }
console.log(fnIt7.next('a'));//b a     { value: undefined, done: false }
fnIt7.next('test');//test

// - Generator函数和 Promise 的混合使用
function ayncFunc(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(3);
            resolve(`my name is ${name}`);
        });
    });
}

function *fn8(){
    console.log(2);
    console.log(yield ayncFunc('QG'));
}

let gf = fn8();
function  exec(gf, value){
    let resulet = gf.next(value);
    console.log(`--------++--------${resulet.value}--------++--------`);
    if (!resulet.done){
        if (resulet.value instanceof  Promise){
            resulet.value.then(function(v){
                console.log(`----------==------${v}--------==--------`);
                console.log(4);
                exec(gf, v);
            });
        }else{
            console.log(`--------**--------${value}--------**--------`);
            exec(gf, value);
        }
    }
}

exec(gf);
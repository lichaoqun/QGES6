/**
 * Created by QG on 2017/11/9.
 */
 //===============解构赋值===============
let [a0 ,b0,c0] = [1, 2, 4];
console.log(a0, b0, c0);// 1 2 4

let [a1, [b1, c1], d1] = [1, [2], 5];
console.log(a1, b1, c1, d1);// 1 2 undefined 5

let [a2 = true] = [];
console.log(a2); // true

let [a3, b3 = 'jishupang'] = ['jsp'];
console.log(a3, b3);// jsp jishupang

let {a4, b4} = {a4: 'a4', b4 :'b4'};
console.log(a4, b4);

let a5;
({a5} = {a5 : 'a5'});
console.log(a5);

const [a6,b6, c6, d6, e6, f6] = 'QG is Smoking';
console.log(a6, b6, c6, d6, e6, f6);
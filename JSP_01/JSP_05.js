/**
 * Created by lichaoqun on 2017/11/10.
 */
// =========================Symbol类型============================
let a = String();
let b = Number();
let c = Boolean();
let d = Array();
let e = Object();
let f = Symbol();
console.log(typeof  a, typeof  b, typeof  c, typeof d, typeof  e, typeof f);// string number boolean object object symbol

let jsPang = Symbol('技术胖');
console.log(jsPang); // Symbol(技术胖) Symbol 类型
console.log(jsPang.toString());// Symbol(技术胖) 字符串类型

// - 在对象中构建 key
let jspang1 = Symbol("jsp");
let obj1 = {[jspang1] : '技术胖'};
console.log(obj1);  // { [Symbol(jsp)]: '技术胖' }
console.log(obj1[jspang1]); // 技术胖
obj1[jspang1] = 'web';
console.log(obj1[jspang1]); // web

// - 遍历对象 用 for..in...
let obj3 = {name : 'jspang', skill :  'web'};
for(let item in obj3){
    console.log(item);// name skill
    console.log(obj3[item]); // jspang web
}

// - 使用 Symbol 保护对象. 用 for...in 遍历不到 age 属性 但是直接打印 obj4 是可以看到这个属性的 实现了保护的作用
let obj4 = {name4 : 'jspang4', skill4 :  'web4'};
let age4 = Symbol('age4');
obj4[age4] = 104;
console.log(obj4); //{ name4: 'jspang4', skill4: 'web4', [Symbol()]: 104 }
for(let item4 in obj4){
    console.log(item4);// name skill
    console.log(obj4[item4]); // jspang web
}
// 下边的方法可以查看 object的Symbol 保护的对象 返回的是个数组 需要一下方式查看
//let key = Object.getOwnPropertySymbols(obj4)[0];
//console.log(Object[key]);
console.log(Object.getOwnPropertySymbols(obj4));// [ Symbol(age4) ]



/**
 * Created by lichaoqun on 2017/11/10.
 */
// ================================对象=================================
// - 对象赋值
let name = 'jspang';
let skill = 'web';
let obj  = {name, skill};

console.log(obj);// { name: 'jspang', skill: 'web' }

// - key 值的构建 使用自定义的待定的 key 字符串
let key1 = 'skill';
let obj1 = {
    [key1]  : 'web'
}

console.log(obj1);// { skill: 'web' }

// - 自定义对象里边的方法
let obj2 = {
    add : (a, b)=>{
        return a + b;
    }
}

console.log(obj2.add(2, 6));//  8

// - is()方法 可以做对象比较 // 三个等号 叫做同值相等  is 叫做严格相等
let obj3 = {name : 'jspang', num : +0};
let obj4 = {name : 'jspang', num : -0};
console.log(obj3.num === obj4.num);// true
console.log(Object.is(obj3.num, obj4.num));// false
console.log(`NaN === NaN ${NaN === NaN}, Object.is(NaN, NaN) ${Object.is(NaN, NaN)}`);// NaN === NaN false, Object.is(NaN, NaN) true

// - assign 合并对象 obj5 就是被合并后的对象
let obj5 = { a : 'jspang'}
let obj6 = { b : 'jspang'}
let obj7 = { c : 'web 技术'}
let obj8 = Object.assign(obj5, obj6, obj7);
console.log(obj5, obj6, obj7,obj8);// { a: 'jspang', b: 'jspang', c: 'web 技术' } { b: 'jspang' } { c: 'web 技术' } { a: 'jspang', b: 'jspang', c: 'web 技术' }


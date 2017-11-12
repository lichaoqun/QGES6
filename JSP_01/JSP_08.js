/**
 * Created by lichaoqun on 2017/11/10.
 */
// ======================== proxy 代理(增强对象和方法) =====================
let obj01= {
    add:function(value){
        return value + 100;
    },
    name : 'I am JSPang'
}
console.log(obj01.add(100)); // 200
console.log(obj01.name); // I am JSPang

// - proxy
let pro = new Proxy({
    add:function(value){
        return value + 100;
    },
    name : 'I am Proxy'
},{
    // get set apply 等
    get:function(target, key, property){
        console.log('come in Get');
        console.log(target, key);
        return target[key];
        return 'adadfasfsa';
    },

    set:function(target, key, value, receiver){
        console.log('come in Set');
        console.log(target, key, value, receiver);
        // target : 当前的对象           { add: [Function: add], name: 'I am Proxy' }
        // 改变的属性名                   'name'
        // 改变后的属性值                  '11'
        // 改变钱的属性                   { add: [Function: add], name: 'I am Proxy' }
         target[key] = value;
         target[key] = value + 'adfsff';
    },

});

console.log(pro.add(2));
/*
 * come in Get
 * { add: [Function: add], name: 'I am Proxy' } 'add'
 * 102
 * */

console.log(pro.name);
/*
 * come in Get
 * { add: [Function: add], name: 'I am Proxy' } 'name'
 * I am Proxy
 * */

pro.name = '11';
/*
* come in Set
* { add: [Function: add], name: 'I am Proxy' } 'name'
* */

//let tagrget = function(){
//    return 'I am JSPang';
//}
let tagrget = function (a, b) {
    return  a + b;
}
let handler = {
    apply(target, ctx, args){;
        console.log('do apply');
        // target   :     [Function: tagrget]
        // ctx      :    undefined
        // args     :   [ 4, 6 ]
        console.log(target, ctx, args);
        return Reflect.apply(...arguments);
    }
}

let pro1 = new Proxy(tagrget, handler);
console.log(pro1(4, 6));// do apply     [Function: tagrget] undefined [ 4, 6 ]


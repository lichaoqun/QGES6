/**
 * Created by lichaoqun on 2017/11/14.
 */
//============================ ES6 上使用属性 ======================
var obj = {
    getName(firstName, lastName){
        return {firstName ,lastName}
    },

    set name(name){
        this.name = name;
    },

    get name(){
        return this.name;
    },
}

// - es5
var ok = 'ok';
obj['myid' + ok] = '007';
obj['age' + ok] = 22;

//============================ ES6 上使用属性 ======================
var obj = {

    ['myid' + ok] : '007',
    ['age' + ok] : 22,

    getName(firstName, lastName){
        return {firstName ,lastName}
    },

    set name(name){
        this.name = name;
    },

    get name(){
        return this.name;
    },
}

// - es6
var ok = 'ok';
obj['myid' + ok] = '007';
obj['age' + ok] = 22;


//================================= ES6属性的遍历 =================================
class  A{

    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    constructor(){
         this.name = 'QG';
         this.game = 'lol';
    }

    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    getName(){
    }

    set favoriteA(favorite){

    }

    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    [Symbol('A')](){

    }
}

class  B extends A{
    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    constructor(){
        super();
        this.age = 22;
    }
    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    getAge(){

    }

    set favoriteB(favorite){

    }

    //通过 class语法糖的方式在里边添加的方法是不可枚举的
    [Symbol('B')](){

    }
}

// - 通过 prototype.funcName 这种方法定义的函数 是可以枚举的 但是通过 class语法糖的方式在里边添加的方法是不可枚举的
B.prototype.getClass = ()=>{

}

var b1 = new B;
console.log('========');

// - Object.keys 能够得到自身和原型的可枚举的属性
// - 得不到 Symbol 属性
console.log(Object.keys(b1));// [ 'name', 'game', 'age' ]

// - Object.getOwnPropertyNames 能够得到自身的属性(可枚举和不可枚举),但得不到原型链上的属性
// - 得不到 Symbol 属性
console.log(Object.getOwnPropertyNames(B.prototype));// [ 'constructor', 'getAge', 'favoriteB', 'getClass' ]

// - 可以得到自身的 Symbols 属性(可枚举和不可枚举), ,但得不到原型链上的Symbols 属性
console.log(Object.getOwnPropertySymbols(B.prototype));// [ Symbol(B) ]

// - for ... in 循环 可以得到自身和原型链的属性
for(let key in b1){
    console.log(key);
}// name, game, age, getClass

/*
 * { value: [Function],
 * writable: true,
 * enumerable: true,
 * configurable: true }
*  enumerable : 是不是可枚举的属性
* */
console.log(Object.getOwnPropertyDescriptor(B.prototype, 'getClass'));

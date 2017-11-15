/**
 * Created by lichaoqun on 2017/11/7.
 * ES6 定义一个类和继承一个类的方法
 */

class User{
    constructor(name, age){
        this.name = name;
        this.age  = age;
        this.firstAge = age;
    }

    // - 静态方法中的 this 指的是这个类而不是这个实例 静态方法可以被子类继承
    static getClassName(){
        return 'User';
    }

    changeName(name){
        this.name = name;
    }

    changeAge(age){
    this.age = age;
    }

    get info(){
        return ' name : ' + this.name + ' | ' + ' age : ' + this.age + ' | ' + ' firstAge : ' + this.firstAge;
    }

    set opAge(age){
        this.age = age;
    }

    test(){
        return 'test___0001';
    }
}


// - extends 声明一个类继承自另外一个类
class Manager extends User{
    constructor(name, age, password){
        super(name, age);
        this.password = password;
    }
    changepassword(pwd){
        this.password = pwd;
    }

    get info(){
        return super.info + ' | ' + ' pwd : ' + this.password;
    }
}

console.log(typeof Manager, typeof  User);// function function

// - 方法返回指定对象的原型
console.log(Object.getPrototypeOf(Manager) === User, Object.getPrototypeOf(User) === Manager, Object.getPrototypeOf(Manager) === Manager, Object.getPrototypeOf(User) === User); // ture, false, false, false

console.log('============================');

var user = new User('leo', 22);
user.opAge = 100;
console.log( user, user.info, user.test(), User.getClassName());// User { name: 'leo', age: 100, firstAge: 22 } ' name : leo |  age : 100 |  firstAge : 22' 'test___0001' 'User'
console.log(Object.getOwnPropertyNames(User.prototype));
/*
* [ 'constructor',
 'changeName',
 'changeAge',
 'info',
 'opAge',
 'test' ]
* */


console.log('============================');

var manager = new Manager(11, 22, 44);

// - 动态的给类添加方法
Object.assign(Manager.prototype, {
    func1(){},
    func2(){}
});

manager.changepassword(12345);
console.log(manager, manager.info, manager.test(), Manager.getClassName());// Manager { name: 11, age: 22, firstAge: 22, password: 12345 } ' name : 11 |  age : 22 |  firstAge : 22 |  pwd : 12345' 'test___0001' 'User'

// - 打印所有的方法(只能打印对象方法 不能打印类方法)
console.log(Object.getOwnPropertyNames(Manager.prototype)); // [ 'constructor', 'changepassword', 'info', 'func1', 'func2' ]

console.log('============================');

// - 用于判断一个变量是否某个对象的实例
console.log(new User() instanceof Manager, new Manager() instanceof User, new User() instanceof User, new Manager() instanceof Manager);// false true true true
/**
 *  typeof用以获取一个变量或者表达式的类型，typeof一般只能返回如下几个结果：number,boolean,string,function（函数）,object（NULL,数组，对象）,undefined。
 *  instanceof用于判断一个变量是否某个对象的实例
 *  Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值)
 */


// - 为原型添加方法
// =========================第一部分====================
var p1 = new User(2,3);
var p2 = new User(3,2);

p1.__proto__.printName = function () { return 'Oops' };

console.log(p1.printName());// "Oops"
console.log(p2.printName());// "Oops"

var p3 = new Manager(4,2);
console.log(p3.printName());// "Oops"

// =========================第二部分====================
var p1 = new Manager(2,3);
var p2 = new Manager(3,2);

p1.__proto__.printName = function () { return 'Oops' };

console.log(p1.printName());// "Oops"
console.log(p2.printName());// "Oops"

var p3 = new User(4,2);
console.log(p3.printName());// "Oops"


// ================ 第二部分的代码会报错 ==================
// 因为 Manager 继承自 User 所以 为User 的原型添加方法就是为 User添加方法 Manager 是可以使用的
// 而为 Manager 的原型添加方法 就相当于为 Manager 添加方法 也就是说这个方法是子类的 User是父类是不可以使用的

// - class 使用表达式
// - 定义一个类 并携带着这个类的内部实现 这里的 Person 是个类
const Pereson = class QG {
    getClassName() {
        return QG.name;
    }
}

let inst = new Pereson();
console.log(inst.getClassName()); // Me

// - 使用 class 表达式可以立即执行这个 class 的初始化方法
let person = new class{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}('QG 是我');
person.sayName();

// - name属性
class Point {}
console.log(Point.name); // "Point"

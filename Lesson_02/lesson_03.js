/**
 * Created by lichaoqun on 2017/11/7.
 * ES6 定义一个类和继承一个类的方法
 */

//function  User(name, age){
//    this.name = name;
//    this.age = age;
//}
class User{
    constructor(name, age){
        this.name = name;
        this.age  = age;
    }

//    User.getClassName = function(){
//    return 'User';
//}
    static getClassName(){
        return 'User';
    }

    //Object.prototype.changeName = function(name){
    //this.name = name;

    changeName(name){
        this.name = name;
}

//    Object.prototype.changeAge = function(age){
//    this.age = age;
//}

    changeAge(age){
    this.age = age;
}

//    Object.defineProperty(User.prototype, 'info', {
//    get(){
//        return 'name:' + this.name + '|' + 'age:' + this.age;
//    }
//});

    get info(){
        return ' name : ' + this.name + ' | ' + ' age : ' + this.age;
    }

    test(){
        return 'test___0001';
    }
}



class Manager extends User{
    constructor(name, age, password){
        super.constructor(name, age);
        this.password = password;
    }
    changepassword(pwd){
        this.password = pwd;
    }

    get info(){
        return super.info + ' | ' + ' pwd : ' + this.password;
    }
}

console.log(typeof Manager, typeof  User);

console.log('============================');

var user = new User('leo', 22);
console.log( user, user.info, user.test(), User.getClassName);
console.log(Object.getOwnPropertyNames(User.prototype));


console.log('============================');

var manager = new Manager(11, 22, 44)
manager.changepassword(12345);
console.log(manager, manager.info, manager.test(), Manager.getClassName);
console.log(Object.getOwnPropertyNames(Manager.prototype));



//function  Manager(name, age, password){
//    User.call(this, name, age);
//    this.password = password;
//}
//
//// - 继承静态方法
//Manager._proto_ = User;
//
//// - 集成 prototype 方法
//Manager.prototype = User.prototype;
//
//// - 添加新的方法
//Manager.prototype.changePassword = function (pwd) {
//    this.password = pwd;
//}
//
//
//var manager = new Manager('leo', 22, '123');
//manager.changePassword(456);
//manager.changeName('QG');
//console.log(manager.info);
//console.log(manager);
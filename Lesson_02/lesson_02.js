/**
 * Created by lichaoqun on 2017/11/7.
 *  ES5 的定义一个类的方法
 */
function  User(name, age){
    this.name = name;
    this.age = age;
}

User.getClassName = function(){
    return 'User';
}

Object.prototype.changeName = function(name){
    this.name = name;
}

Object.prototype.changeAge = function(age){
    this.age = age;
}

Object.defineProperty(User.prototype, 'info', {
    get(){
    return 'name:' + this.name + '|' + 'age:' + this.age;
}
});



var user = new User('leo', 22);
console.log(user);


function  Manager(name, age, password){
    User.call(this, name, age);
    this.password = password;
}

// - 继承静态方法
Manager._proto_ = User;

// - 集成 prototype 方法
Manager.prototype = User.prototype;

// - 添加新的方法
Manager.prototype.changePassword = function (pwd) {
    this.password = pwd;
}


var manager = new Manager('leo', 22, '123');
manager.changePassword(456);
manager.changeName('QG');
console.log(manager.info);
console.log(manager);


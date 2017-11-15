/**
 * Created by lichaoqun on 2017/11/8.
 */
//====================Symbol=============
// - 一般的 Symbol 的使用 下边的两个都可以使用
//let getName = 'name';
let getName = Symbol('name');
let obj = {
    [getName](){
        return 'QG';
    }
}

//console.log(obj[getName]());
//let User = require('./Lesson_06_module');
//let u1 = new User();
//u1.print();
//
//u1[getName]();

// - 重写类的 Symbol.iterator 方法
class  UserGroup{

    constructor(users){
        /**
     * users:{'leo' : '1104239293', 'QG' : '193745' }
     * */
        this.users = users;
    }

    [Symbol.iterator](){

        let i = 0;
        const names = Object.keys(this.users);
        const length = names.length;
        let self = this;
        return {
            next : ()=>{
                let name = names[i++];
                let qq = this.users[name];
                return {value : {name, qq},done:i > length}
            }
        }
    }
}

let group = new UserGroup({'leo' : '2434243234', 'QG' : '4312424', 'XC' : '4213424324', 'leo1' : '2434243234', 'QG1' : '4312424', 'XC1' : '4213424324'});
let u = group[Symbol.iterator]();
console.log(u.next());
console.log(u.next());
console.log(u.next());
console.log(u.next());
console.log(u.next());
console.log(u.next());
console.log(u.next());

console.log('==========================================');

// - 方法二重写对象的[Symbol.iterator]方法
let iteratorFun = function (){
    let i = 0;
    const names = Object.keys(this);
    const length = names.length;
    let self = this;
    return {
        next : function(){
            let name = names[i++];
            let qq = self[name];
            return {value : {name, qq},done:i > length}
        }
    }
}

var obj2 = {'leo3' : '2434243234', 'QG3' : '4312424', 'XC3' : '4213424324', 'leo4' : '2434243234', 'QG4' : '4312424', 'XC4' : '4213424324'};
obj2[Symbol.iterator] = iteratorFun ;
let objIterator = obj2[Symbol.iterator]();
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());

console.log('==========================================');


// - 可迭代对象的  [Symbol.iterator] 方法
var jsonArr = {
    '0' : '第零个元素',
    '1' : '第一个元素',
    '2' : '第二个元素',
    '3' : '第三个元素',
    length : 4
}

jsonArr[Symbol.iterator] = [][Symbol.iterator];
let jsonIterator = jsonArr[Symbol.iterator]();
console.log(jsonIterator.next());
console.log(jsonIterator.next());
console.log(jsonIterator.next());
console.log(jsonIterator.next());
console.log(jsonIterator.next());

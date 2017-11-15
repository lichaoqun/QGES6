/**
 * Created by lichaoqun on 2017/11/15.
 */
//========================== import 和 export ============================
// - 一个一个导出
export var name = 'QG';
export class User{
    constructor(name){
        this.name = name;
    }
}
export  function  changeName (_name){
    name = _name;
}

// - 一起导出
var name1 = 'QG';
class User1{
    constructor(name){
        this.name = name;
    }
}
function  changeName1 (_name){
    name = _name;
}
export {name1, User1, changeName1};

// - 修改名称导出
export  default function changeName2(_name) {
    name = _name;
}

var game = 'LOL';
export {game as myGame};

// - 附着在对象上导出
export var age = 10;
export function  changeAge(_age){
    age = _age;
}
export  class User3{
    constructor(name){
        this.name = name;
    }

    changeAge(age){
        this.age = age;
    }
}

// - 导出默认的变量 并且通过 default 导出的是不可以改变值的 其他的导出是可以改变值的
var age2 = 222;
export default age2;
setTimeout(function(){
    age2 = 555
});

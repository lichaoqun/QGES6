/**
 * Created by QG on 2017/11/11.
 */
// ===========================class========================
class Coder{

    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    name(val) {
        this.val = val;
        console.log(this.val);
    }

    skillFunc(skill){
        this.skill = skill;
        console.log(this.skill);

    }

    add(){
        return this.a + this.b;
    }
}

let jspang = new Coder(1, 4);
jspang.name('jspang');// jspang

jspang.skillFunc('hehe');// hehe
console.log(jspang.add()); // 5

//- 类的继承
class Htmler extends Coder{

}

let pang = new Htmler(4, 6);
console.log(pang.add());// 10
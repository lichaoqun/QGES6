/**
 * Created by QG on 2017/11/12.
 */

let getName = Symbol('getName');
class  User{
    [getName](){
        return '---|QG|---';
    }

    print(){
        console.log(this[getName]());
    }
};

module.export = User;
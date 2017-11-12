/**
 * Created by lichaoqun on 2017/11/8.
 */
//====================Symbol=============
// - 一般的 Symbol 的使用
let getName = Symbol('name');
let obj = {
    [getName](){
        return 'QG';
    }
}

console.log(obj[getName]());

// - 
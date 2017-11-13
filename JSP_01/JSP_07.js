/**
 * Created by lichaoqun on 2017/11/10.
 */
// ============================= map ============================
// - 定义一个对象
let json = {
    name : 'jspang',
    skill:  'web'
};
console.log(json); // { name: 'jspang', skill: 'web' }

// - 定义一个map
var map = new Map();
map.set(json, 'am');
console.log(map); // Map { { name: 'jspang', skill: 'web' } => 'am' }

map.set('am', json);
console.log(map);
/*
* Map {
* { name: 'jspang', skill: 'web' } => 'am',
* 'am' => { name: 'jspang', skill: 'web' } }
* */

// - map 查询
console.log(map.get(json)); // am
console.log(map.get('am')); // { name: 'jspang', skill: 'web' }

// - 查询大小
console.log(map.size); // 2

// - 判断是否存在 这个 key
console.log(map.has('am')); // true

// 循环 --- 1
for (let item of map.entries()){
    console.log(item);
}
/*
* [ { name: 'jspang', skill: 'web' }, 'am' ]
* [ 'am', { name: 'jspang', skill: 'web' } ]
* */

// 循环 --- 2
for (let [key, value] of map.entries()){
    console.log(`key : ${key}, value :${value}`);
}
/*
* key : [object Object], value :am
* key : am, value :[object Object]
* */

// 循环 --- 3
for(let item of map){
    console.log(`item : ${item}`);
}

/*
* item :  [ { name: 'jspang', skill: 'web' }, 'am' ]
* item : [ 'am', { name: 'jspang', skill: 'web' } ]
* */

// 循环 --- 4
map.forEach((value, key) =>{
    console.log(`key : ${key}, value :${value}`);
})
/*
* key : [object Object], value :am
* key : am, value :[object Object]
* */

// - map 删除(根据key 删除)
map.delete(json);
console.log(map); // Map { 'am' => { name: 'jspang', skill: 'web' } }

map.clear();
console.log(map); // Map {}
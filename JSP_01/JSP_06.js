/**
 * Created by lichaoqun on 2017/11/10.
 */
//==========================Set===========================

// Set  这个 Set 的初始化方法中只能放数组
let setArr = new Set([1, 10, 1, 3]);
console.log(setArr);// Set { 1, 10, 3 }

// - 增加
setArr.add(11);
setArr.add(1);
console.log(setArr);// Set { 1, 10, 3, 11 }

// - 查找
console.log(setArr.has(10), setArr.has(14)); // true false

// - 删除set中的元素
setArr.delete(1);
console.log(setArr); // Set { 10, 3, 11 }

// - 长度
console.log(`长度是 ${setArr.size}`); //长度是 3

// 循环 --- 1
for(let item of setArr){
    console.log(item);
}

// 循环 --- 2
setArr.forEach((value)=>{
    console.log(value);
})

// - 清除 set
setArr.clear();
console.log(setArr); // Set {}

// WeakSet  这个 Set 的初始化方法中可以放对象
let weakSet1 = new WeakSet();
//weakSet.add({a : 'a'});

let obj1 = {b : 'b', c : 'c'};
weakSet1.add(obj1);
console.log(weakSet1);

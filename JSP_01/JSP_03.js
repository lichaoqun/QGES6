/**
 * Created by lichaoqun on 2017/11/10.
 */
//===============函数扩展===================
// - 传统的函数
function add(a, b= 2){
    if(a == 0){
        throw  new Error('A is Error');
    }
    return a + b;
}

console.log(add(1));// 3

// - 使用默认值 指定某个函数的参数必须传递
function  haveToo(){
    throw  new Error(' b 这个参数是必须传递的参数');
}

function  testFunc(a, b = haveToo()){
    console.log(a + b);
}
//testFunc(3); // Error:  b 这个参数是必须传递的参数
testFunc(3, 7);// 10


// - ES6 的函数 (箭头函数)
var add = (a, b = 1)=>{
    return a + b;
}

console.log(add(2)); // 3

//- 对象的函数解构 json
let json = {
    a   :   'jsPang',
    b   :   '技术胖'
}

function  func1({a, b = 'web'}){
    console.log(`a 的值是${a}, b 的值是${b}`);
}

func1(json);// a 的值是jsPang, b 的值是技术胖

// - 数组的函数解构
let arr1 = ['jsPang', '技术胖', '前端教程'];
function  func2(argus){
    console.log(...argus);
}
func2(arr1);// jsPang 技术胖 前端教程

function  func3(...argus){
    console.log(argus);
}
func3('jsPang', '技术胖', '前端教程');// [ 'jsPang', '技术胖', '前端教程' ]

// - in 的用法
let obj1 = {
    a   :   '技术胖',
    b   :   'jsPang'
}
console.log('a' in obj1);// true
console.log('c' in obj1);// false
console.log('jsPang' in obj1);// false

let arr4  = [,,,];
let arr5 = ['1',,];
console.log(`第一个测试${0 in arr4},第二个测试${0 in  arr5}`); // 第一个测试false,第二个测试true

// - 数组遍历 for of 方法
let arr6 = ['jishupang', '技术胖', '前段视频'];
for(let value  of  arr6){
    console.log(`value 是 ${value}`);

}
/*
 * value 是 jishupang
 * value 是 技术胖
 * value 是 前段视频
 * */

// - 数组遍历 for of 方法
for (let[index, value] of arr6.entries()){
    console.log(`value 是 ${value}, index 是 ${index}`);
}
/**
 * value 是 jishupang, index 是 0
 * value 是 技术胖, index 是 1
 * value 是 前段视频, index 是 2
 */


// - 数组遍历 forEach 方法
arr6.forEach((value, index)=>{
    console.log(`value 是 ${value}, index 是 ${index}`);
})
/**
 * value 是 jishupang, index 是 0
 * value 是 技术胖, index 是 1
 * value 是 前段视频, index 是 2
 */

// - 数组遍历 filter 方法
arr6.filter((value, index)=>{
    console.log(`value 是 ${value}, index 是 ${index}`);
})
/**
 * value 是 jishupang, index 是 0
 * value 是 技术胖, index 是 1
 * value 是 前段视频, index 是 2
 */

// - 数组遍历 some 方法
arr6.some((value, index)=>{
    console.log(`value 是 ${value}, index 是 ${index}`);
})
/**
 * value 是 jishupang, index 是 0
 * value 是 技术胖, index 是 1
 * value 是 前段视频, index 是 2
 */

// - 数组遍历 map
console.log(arr6.map((value => '改变后的字符串')));// [ '改变后的字符串', '改变后的字符串', '改变后的字符串' ]

// -数组转换成字符串
console.log(arr6.toString());// jishupang,技术胖,前段视频

// - 把数组转为字符串 并用一个字符串隔开
console.log(arr6.join('-|-'));// jishupang-|-技术胖-|-前段视频


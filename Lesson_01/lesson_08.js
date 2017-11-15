/**
 * Created by lichaoqun on 2017/11/14.
 */
//========================================= 类型化数组 ====================================

// - 创建类型化数组方 1
var buffer1 = new ArrayBuffer(16);
var tarr1 = new Int16Array(buffer1);// - 已 16 位 为一个单位读取数据

// - 创建类型化数组方 2
var tarr2 = new Int16Array(10);
console.log(tarr2.length, tarr2.byteLength);// 10 20

//  - 创建类型化数组方 3
var buffer3 = new ArrayBuffer(12);
var tarr3 = new Int16Array(buffer3, 2);
console.log(tarr3.length, tarr3.byteLength);// 5 10

//  - 创建类型化数组方 4
var buffer4 = new ArrayBuffer(12);
var tarr4 = new Int16Array(buffer4, 2, 5);
console.log(tarr4.length, tarr4.byteLength);// 5 10

//  - 创建类型化数组方 4
var tarr5 = new Int16Array([12, 3, 5]);
console.log(tarr5.length, tarr5.byteLength);// 3 6
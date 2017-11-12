/**
 * Created by QG on 2017/11/11.
 */
// ============================== module 文件============
// - 导出方式 1 (变量)
export  var a = 'jspang';
export  var b = '技术胖';
export  var c = 'web';

// 导出方法2(变量)
var a1 = 'jspang';
var b1 = '技术胖';
var c1 = 'w
export {
        name as a1,
        cname as b1,
        skill as c1
};

// - 导出方法3
export  function  add(a, b){
    return a + b;
};

// export 和 export default 的区别
export default var a2 = '使用 default 导出的变量';
/**
 * Created by QG on 2017/11/11.
 */
// ========================================模块化======================================
// export 导出
// import 导入

// 使用 export 导出的  在导入的时候 必须用  import {a,b,c,a,b1,c1,add} 这种形式. {}里边的必须都是导出的变量或者函数的名称
import {a,b,c,a,b1,c1,add} from './MyModule';


// 使用 export default 导出的  在导入的时候 可以用  import xxx 这种形式. 这里不再有花括号,而且 xxx 可以是任意命名 不再必须是导出的变量或者函数的名称
import someName from './MyModule';

console.log(a);
/**
 * Created by lichaoqun on 2017/11/15.
 */
//========================== import 和 export ============================
import {name} from './lesson_11_module';
console.log(name); // QG

import {name as myName, User1 as myUser, default as changeName2_1} from './lesson_11_module';
console.log(myName);// QG

import  * as me from './lesson_11_module';
console.log(me);

import  {myGame} from './lesson_11_module';
console.log(myGame);

import  {myGame as myGame2} from './lesson_11_module';
console.log(myGame2);

import * as obj from './lesson_11_module';
console.log(obj.age);
console.log(obj.changeAge());
console.log(obj.User3);

// - 这里的 me 是 default export 导出的变量, 后边的是 export 导出的变量
import me, {name, changeAge}from './lesson_11_module';
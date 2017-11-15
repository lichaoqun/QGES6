/**
 * Created by QG on 2017/11/9.
 */
//===============扩展运算符和 rest 运算符===============
function QG(first, ...argus){
    argus.forEach((value)=>{
        console.log(value);
    })

    for(let value of argus){
        console.log(value);
    }
    /*
    * 第二个
    * 第三个
    * 第四个
    * 第五个
    * */


    for (let arr of argus.entries()){
        console.log(arr);
    }
    /*
    * [ 0, '第二个' ]
    * [ 1, '第三个' ]
    * [ 2, '第四个' ]
    * [ 3, '第五个' ]
    * */


    for (let[index, value] of argus.entries()){
        console.log(`下标是${index}, 值是${value}`);
    }
    /*
    * 由argus.entries() 的打印 我们用 解构 赋值 用这个方法 拿到下标和值
    * 下标是0, 值是第二个
    * 下标是1, 值是第三个
    * 下标是2, 值是第四个
    * 下标是3, 值是第五个
    *
    * */
}

QG('第一个', '第二个', '第三个', '第四个','第五个');// 2 3 4 5


let arr1 = ['www', 'baidu', 'com'];
let arr_1 = arr1;
arr_1.push('cn');
console.log(arr1); // [ 'www', 'baidu', 'com', 'cn' ]

let arr2 = [...arr1];
arr2.push('cs');
console.log(arr1, arr_1, arr2);// [ 'www', 'baidu', 'com', 'cn' ] [ 'www', 'baidu', 'com', 'cn' ] [ 'www', 'baidu', 'com', 'cn', 'cs' ]


//===============字符串模板===============
let name = 'QG';
let teacherSay = `老师说 ${name} 是一个很不错的人`;
console.log(teacherSay);

// 字符串查找
console.log(teacherSay.indexOf(name)); // 4
console.log(teacherSay.includes(name));// true

//===============数组===============

// - 把一定格式的数据生成数组
console.log(Array.of(3, 4, 5, 6, 'QG', {name : 'QG'}));// [ 3, 4, 5, 6, 'QG', { name: 'QG' } ]

// - json 数组转数组
let json = {
    '0' : 'josn',
    '1' : 'jishupang',
    '2' :   'heheh',
    length : 3// 注意在json 数组中 length 是必须的 如果没有 就变成了 json 字符串了
};
let arr_111 = Array.from(json);
console.log(arr_111); // [ 'josn', 'jishupang', 'heheh' ]

// - 数组值的存取
 var arr = [1,2,3];
 arr["bbb"]="nor 1";
 arr[-2]="nor 2";
arr[1]="nor 1";
 console.log(arr);//[1, 2, 3, bbb: "nor 1", -2: "nor 2"]
 console.log(arr.bbb) //"nor 1"

// - 数组的查找 查到满足第一个满足下面条件的数组的元素
let datas = [1, 3, 5, 6, 7, 8, 9, 10];
console.log('查找到的元素是 : ' + datas.find((value, idx, arr)=>{
    return value > 3 && idx > 2;// value > 3 就是条件
}));

let myArr = Array.from(json);

// entries() 使用 这个方法的返回是个迭代器
console.log(myArr.entries());//{}
console.log(myArr.entries().next());// { value: [ 0, 'josn' ], done: false } value:元素和下标组成的数组, done 是否循环完成
console.log(myArr.entries().next().value); // [ 0, 'josn' ]

//  list.value 打印的是 value 值
let list = myArr.entries();
console.log(list);//{}
console.log(list.next());// { value: [ 0, 'josn' ], done: false }
console.log(list.next());// { value: [ 1, 'jishupang' ], done: false }
console.log(list.next());//{ value: [ 2, 'heheh' ], done: false }
console.log(list.next());//{ value: undefined, done: true }

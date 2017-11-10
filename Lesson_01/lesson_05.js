/**
 * Created by lichaoqun on 2017/11/8.
 */
class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    send(){
        let name = this.name;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if (name === 'leo'){
                    resolve('success');
                }else {
                    reject('error');
                }
            }, 800);
        });
    }

    validateName(){
        let name = this.name;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if (name === 'leo'){
                    resolve('name --- success');
                }else {
                    reject('name --- error');
                }
            }, 800);
        });
    }

    validatePassword(){
        let pwd = this.password;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if (pwd === '123'){
                    resolve('pwd --- success');
                }else {
                    reject('pwd --- error');
                }
            }, 800);
        });
    }
}

//var user = new User('leo');
//user.send().then(function(result){
//    console.log('success' + '|' + result);
//}, function(result){
//    console.log('error' + '|'  + result);
//});
//
//// ========================  写法一 ========================
////下边的写法有问题 因为即使验证名字错误了 还是会验证一次密码 可以有下边的操作
//var u = new User('leo', '123');
//u.validateName().then(function(result){
//    console.log('success' + '|' + result);
//}, function(result){
//    console.log('error' + '|'  + result);
//})
//
//u.validatePassword().then(function(result){
//    console.log('success' + '|' + result);
//}, function(result){
//    console.log('error' + '|'  + result);
//})
//
//// ========================  写法二 ========================
//var QG = new User('leo', '123');
//QG.validateName().then(function(result){
//    console.log('success' + '|' + result);
//    QG.validatePassword().then(function(result){
//        console.log('登录成功');
//    }, function(result){
//        console.log('登录失败,用户密码错误');
//    })
//}, function(result){
//    console.log('登录失败,用户昵称不存在');
//})


// ========================  写法三 ========================
var XC = new User('leo1', '12311');
XC.validateName().then((result) =>{
    return XC.validatePassword();
}, (result) =>{
    console.log('登录失败,用户昵称不存在');
})
    .then((result) =>{
    console.log('登录成功');
}, (result) =>{
    console.log('登录失败,用户密码错误');
});


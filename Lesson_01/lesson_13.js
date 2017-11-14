/**
 * Created by QG on 2017/11/15.
 */
// ========================= Proxy =======================
// - Proxy拦截对象
var obj = {name : 'QG', game : 'LOL', funcTest:(value)=>{
    console.log(value);
}};
var proxy = new Proxy(obj, {
    get : (target, key)=>{
        // - 可以在此处做拦截的操作
        return Reflect.get(target, key);
    },
    set: (target, key, value)=>{
        // - 可以在此处做拦截的操作
        Reflect.set(target, key, value);
    },
    deleteProperty:(target, key)=>{// delete (proxy.game);会调用
        console.log(`要删除属性${ key}`);
        if (key != 'name'){
            Reflect.deleteProperty(target, key)
        }
    },
    has:(target, key)=>{// proxy.has()会调用
        return Reflect.has(target, key);
    },
    enumerate:(target)=>{// for...in 时候会调用
        return Object.keys(target)[Symbol.iterator]();
    },
    funcTest:(target, key) =>{
        Reflect.funcTest(target,key);
    }
});

console.log(proxy.name);// QG
console.log(obj.name);//QG


proxy.name = 'XC';
console.log(proxy.name);// no
console.log(obj.name);// XC

console.log(obj.name);// XC
delete (proxy.name); // 要删除属性name
console.log(obj.name);// XC

console.log(obj.game);// LOL
delete (proxy.game); // 要删除属性game
console.log(obj.game);// undefined

proxy.funcTest('测试方法');//测试方法

// - Proxy拦截函数
var func1 = ()=>{
    console.log('hello word');
};

var proxy1 = new Proxy(func1, {
    apply : (target, ctx, args)=>{
        console.log('this is proxy\'s apply handle! ');
        return Reflect.apply(target, ctx, args);
    }
});

proxy1();// this is proxy's apply handle!        hello word
proxy1.call(null);// this is proxy's apply handle!        hello word
proxy1.apply(null);// this is proxy's apply handle!        hello word

// - Proxy拦截类对象的创建
class User{
    constructor(){
        console.log('this is class');
    }
};

var ProxyClass = new Proxy(User, {
    construct:(target, ctx, args)=>{
        console.log('this is proxy');
        return Reflect.construct(target, ctx, args);
    }
});

new ProxyClass();// this is proxy   this is class
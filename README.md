# 前端知识点整理归类（查漏补缺）
> 先列出点知识点，后期补充 详解

## 前端
>
### 浏览器
>
* 跨域
    > 同源
    - jsonp
    - web socket
    - postMessage
    - cors
    - proxy
* Event Loop
    > 同步/异步
    - frame 先进后出
    - micro queue
    - macro queue
    - setTimeout  "任务队列"的尾部 ，等到同步任务和"任务队列"现有的事件都处理完
    - libuv  /nodejs处理event loop  事件循环 - 观察者- 请求对象 - 执行回调
    - process.nextTick  "执行栈"的尾部
    - setImmediate   "任务队列"的尾部
* 网络
    > 三次握手/4次挥手/ tcp /tls/ssl证书
    - http
    - http2  二进制/HPACK头部压缩/server Push /多路由复用/优先级/Frame
    - https
    - 状态码
    - CSRF和XSS
    - RESTful / RPC
    - 缓存
        - 服务端缓存
        - 客户端缓存
* sessionStorage/localStorage/cooks
* HTML5 兼容/内核差异化
* 标签语义化
* History对象
* Navigator对象
* userAgent
* Screen对象
* window对象
* canvas
* 进制

### css
>
- Flex布局
- 单位 rem/px/vw/vh/vmin/vmax
- less
- sass
- 动画
- 媒体查询
- 小程序的WXSS
- 边框 1px 问题
- 多设备设计
    - 最小固定宽度布局
    - 百分比布局
    - 栅格布局、弹性布局
    - js + rem 方案（rpx）
    - 媒体查询
    - 响应式设计（多套代码，多种设备）
    - 自适应设计（一套代码，多种设备）
### js
>
- 数据类型
    - 基础类型 number string boolean null undefined symbol
    - 对象类型 function array  data  regExp
    - 假值 undefined、null、false、+0、-0、NaN、“”
-  === / ==  ToPrimitive() 转原始值 => 转数字
    -   null == undefined  // true
    -   NaN == NaN  //false
    -  [5] == [5]   {} == {}  //false
    -  +0 === -0  false
- json/xml
- 运算符
    - 算数运算符
    - ++  --
    - 关系运算符
    - 对象运算符
    - 逻辑运算符
    - 位运算法
    - typeof/void/?:
- ES6
    -
- 原生DOM操作
- cmd/amd/ export-import   /依赖 amd中需要执行完毕（依赖前置的），cmd中只需要文件加载完毕（延迟执行）
- 遍历
    - some/every
    - map
    - forEach
    - Object.keys
    - filter
    - for  let/var的区别
    - for - in
    - object.getOwnPropertyNames
    - object.getOwnPropertySymbols
    - while(do ~ while)
    - switch () {  case  default }
    - break / continue
    - throw / try / catch
    - object.entries()  [a,b,c] => [[0,a],[1,b],[2,c]]
    - reduce()/ reduceRight()  l累加器
    - object.values() 可枚举的对象
- 判断
    - typeof
    - instanceof
    - object.is(v1,v2)   ===
    - Array.is()
    - "name" in object //true  构造对象/原型对象
- Array/多维数组
    - indexOf()
    - lastIndexOf()
    - sort()
    - reverse()
    - pop()
    - shift()
    - unshift()
    - find()
    - findIndex()
    - includes()  数组/字符串
    - slice(begin, end)
    - splice(0,1)
    - concat() 合并
    - replace("","")
    - call/apply
- object
    - object.create()
    - object.assign() 去重复浅合并
    - object.defineProperties() / object.defineProperty()
    - valueOf()
    - toString("", 2) 转换进制
    - Object.getPrototypeOf() /  Object.setPrototypeOf() / object.hasOwnProperty() 原型链属性 / Object.prototype.isPrototypeOf()
    - toString() / Object.prototype.toLocaleString() 调用toString（）

    - Object.freeze()
    - Object.isFrozen()
    - Object.isExtensible()
    - Object.preventExtensions()
    - Object.isSealed()
    - Object.seal()
    - Object.getOwnPropertyDescriptor()   //get/set/value/writable/configurable/enumerable
    - Object.prototype.propertyIsEnumerable()
    - *.prototype.toSource()
    - Object.prototype.unwatch()
    - Object.prototype.watch()
- number
    - parselnt()
    - match.**
    - toFixed(2) 解决浮点运算不精确问题
    - parseFloat()
    - toString()
    - valueof()

    - Number.isNaN()
    - Number.ifFinite()
    - Number.isInteger()
    - Number.isSafeInteger()
    - Number.prototype.toExponential()
    - Number.prototype.toLocaleString()
    - Number.prototype.toPrecision(number)

- string
    - repeat(2)
    - getAttribute()/ setAttribute（）/ hasAttribute() / removeAttribute()
    - insertBefore()
    - insertAfter() //zhanting
    - String(str)  内部tostring()
    - String.prototype.charAt(index)
    - String.prototype.concat()
    - String.prototype.includes()  true/false
    - String.prototype.endsWith()/ String.prototype.startsWith()   true/false
    - String.prototype.match() / search() / repeat(number)
    - String.prototype.replace()
    - String.prototype.slice()
    - String.prototype.split()
    - String.prototype.substr(startIndex, length)
    - String.prototype.substring(startIndex, endIndex)
    - String.prototype.toLocaleLowerCase()/ String.prototype.toLowerCase()  小写
    - String.prototype.toLocaleUpperCase()/ String.prototype.toUpperCase()  大写
    - String.prototype.toString()
    - String.prototype.valueOf()
    - String.prototype.trim()

    - String.raw()
    - String.prototype.charCodeAt()
    - String.prototype.localeCompare()  正数/负数/0
    - String.prototype.anchor('josh') 创建a 标签 name= josh
    - String.prototype.link(http) 创建A标签 href = http
    - String.prototype.bold()
- Function
    - apply/call/toString/bind(柯里化)/isGenerator/toSource
<pre><code>
//bind() 方法 原理   柯里化
Function.prototype.testBind = function (scope) {
    var fn = this;     //保存原函数  构造属性    //* this 指向的是调用testBind方法的 bar函数
    return function () {  //// 返回一个新函数
        return fn.apply(scope, arguments);
    }
};
var foo = {x: "Foo "};
var bar = function (str) {
    console.log(this.x+(arguments.length===0?'':str));
};
bar();                                   // undefined
var testBindBar = bar.testBind(foo);     // 绑定 foo
testBindBar("Bar!");

//bind() 方法 权威指南
var g = f.bind(this,1,2)  //柯里化 return 一个新的函数
g(3)  ===  f.call(this, 1,2,3) 等价于
</code></pre>
- 闭包 (垃圾回收机制)
    - 公有/私有
    - 作用域
    - 内存蟹肉 // 最常使用的方法叫做"引用计数"（reference counting）：语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。
        - 意外的全局变量
        - 没有清理的DOM元素引用（dom元素被清除）
        - 闭包
- 函数声明（变量声明提升机制）/函数表达式/立即执行函数表达式
- arguments  [].slice.apply(arguments)
- this指向/new
- __proto__ 原型链 null 终极大BOSS  object
    - L instanceof R  =》  L.__proto__.__proto__ ..... === R.prototype ？
- apply/call 区别
- Promise原理  async/await 更像同步写异步
- web worker   postMessage/onmessage  子线程
- 排序方法 (性能对比)
    - 冒泡排序
    - 选择排序
    - 插入排序
    - 希尔排序
    - 快速排序
    - 归并排序
    - 计数排序
    - 桶排序
- 去重方法
    - hash  [hash] = true
    - keyValue  hash[key] 覆盖相同的值
    - indexOf 根据 indexOf 获取 i 比较
    - sort 先排序，左右对比
    - each 获取没重复的最右一值放入新数组
- 作用域
- 柯里化和反柯里化
    - 函数可以作为参数传递
    - 函数能够作为函数的返回值
    - 依赖闭包
    - 延迟执行
<pre><code>
//** 用闭包的机制 实现延迟执行，链式调用
var adder = function () {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
};
var sum = adder();
console.log(sum);     // Function
sum(100,200)(300);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
sum(400);
console.log(sum());   // 1000 （加总计算）

//---------------
ar addEvent = (function(){
    if (window.addEventListener) {
        return function(el, sType, fn, capture) {
            el.addEventListener(sType, function(e) {
                fn.call(el, e);
            }, (capture));
        };
    } else if (window.attachEvent) {
        return function(el, sType, fn, capture) {
            el.attachEvent("on" + sType, function(e) {
                fn.call(el, e);
            });
        };
    }
})(); //第一次 if...else... 判断之后，完成了部分计算，动态创建新的函数来处理后面传入的参数，这是一个典型的柯里化。

</code></pre>
<pre><code>
//反柯里化  创建个方法- 调用原生的方法 - 实现与原生的方法相同的功能
var uncurrying= function (fn) {
    return function () {
        //var args=[].slice.call(arguments,1);
        //return fn.apply(arguments[0],args);
        let [that, ...args] = [].slice.call(arguments);
        return fn.apply(that, args)
}
var test="a,b,c";
console.log(test.split(","));
var split=uncurrying(String.prototype.split);
console.log(split(test,','));                   //[ 'a', 'b', 'c' ]

// ---
Function.prototype.uncurrying = function() {
    var that = this;
    return function() {
        return Function.prototype.call.apply(that, arguments);
    }
};
function sayHi () {
    return "Hello " + this.value +" "+[].slice.call(arguments);
}
var sayHiuncurrying=sayHi.uncurrying();
console.log(sayHiuncurrying({value:'world'},"hahaha"));

</code></pre>
- javascript面向对象-创建
    - class  类声明(不会声明提升)/类表达式
    - 工厂模式  / return Object   缺点是无法识别对象类型
    - 构造函数模式  /new
    - 原型模式  /原型属性（共享）
    - 构造函数和原型模式结合  /构造属性(独立)、原型属性（共享）
- javascript面向对象-继承
    - extends（先创造父类的实例对象this，子类修改this，this指向子类实列）  static(不能被实列调用)  super（构造函数中super() => Parent.prototype.constructor.call(this) ）  Species  Object.setPrototypeOf（设置原型链）
        - sub.prototype = obeject.create(Parent.prototype)
        - 默认构造属性  sub.prototype.constructor ==> Parent.prototype.constructor.call(this)
        - super(a,b) = 》 Parent.prototype.constructor.call(this,arguments)
    - 原型链继承  / 是将父类的实例作为子类的原型  \可以继承父类 构造属性和原型属性
    - 构造继承  / Parent.call/apply(this)  只能继承父类的实例属性和方法，不能继承原型属性/方法, 子类之间不共享
    - 实列继承 / 工厂模式创建子类    \可以继承父类 构造属性和原型属性
    - 组合继承   /构造继承 + 原型继承  调用了两次父类构造函数
- 加密
    - 对称加密
    - 非对称加密
    - 哈希算法
    - 数字签名
- 声明式编程/命令式编程
- 解耦
### 正则
![](http://images.cnitblog.com/blog/608782/201409/031430427829068.gif)

## 服务端
### nodejs
### mongoDB
### pm2
### shell
### nginx
### scp
### docker

## 优化
### webpack
### rollup


## 常用工具
### git
### 单元测试
### Three.js
### JSX / JavaScript templating

## vue全家桶
- vue 构造函数 - observe - dep - watch
- vue-router 原理
<pre><code>
1.hash与History interface两种方式实现前端路


router.init() 根组件创建是调用
-->
Vue.mixin()  beforeCreate  安装 vue-router是 通过 Vue.mixin() 注册全局的 beforeCreate 生命钩子 保函事件监听
-->
hashchange  事件监听
-->
match route  触发路由更新 =》 地址匹配  对应当前地址的 route    设置到对应的 vm._route
-->
set vm._route  触发视图更新   对 vm._route 的赋值会被 Vue 拦截到，并且触发 Vue 组件的更新渲染流程
-->
<router-view> render()   视图编译
-->
render matched component

</code></pre>
- vuex 原理  Flux、Redux、MobX、Vuex 和 Rx.js（反正名字里都有一个 x）
- 性能优化
- 服务端渲染
- view = render(state)

## 实战
- 小程序
- weex
- html5电商(vue全家桶) + node +  mongoDB
- 微信公众号 api

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
    - http2
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
    - apply/call/toString/bind/isGenerator/toSource
- 闭包 (垃圾回收机制)
    - 公有/私有
    - 作用域
    - 内存蟹肉 // 最常使用的方法叫做"引用计数"（reference counting）：语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。
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
- javascript面向对象-创建
    - class  类声明(不会声明提升)/类表达式
    - 工厂模式  / return Object   缺点是无法识别对象类型
    - 构造函数模式  /new
    - 原型模式  /原型属性（共享）
    - 构造函数和原型模式结合  /构造属性(独立)、原型属性（共享）
- javascript面向对象-继承
    - extends（先创造父类的实例对象this，子类修改this，放回子类实列）  static(不能被实列调用)  super（构造函数中super() => Parent.prototype.constructor.call(this) ）  Species  Object.setPrototypeOf
    - 原型链继承  / 是将父类的实例作为子类的原型  \可以继承父类 构造属性和原型属性
    - 构造继承  / call/apply(this)  只能继承父类的实例属性和方法，不能继承原型属性/方法, 子类之间不共享
    - 实列继承 / 工厂模式创建子类
    - 组合继承   /构造继承 + 原型继承  调用了两次父类构造函数
- 加密
    - 对称加密
    - 非对称加密
    - 哈希算法
    - 数字签名

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

##vue + vue-router + vuex
- vue 构造函数 - observe - dep - watch
- vue-router 原理
- vuex 原理

## 实战
- 小程序
- weex
- html5电商(vue全家桶) + node +  mongoDB
- 微信公众号 api

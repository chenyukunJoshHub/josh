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
    - micro queue
    - macro queue
* 网络
    > 三次握手/4次挥手/ tcp /tls/ssl证书
    - http
    - http2
    - https
    - 状态码
    - CSRF和XSS
* sessionStorage/localStorage/cooks
* HTML5 兼容/内核差异化
* 标签语义化
* History对象
* Navigator对象
* userAgent
* Screen对象
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
- window对象
- Array/多维数组
    -
- object
- number
- string
- Function
- 闭包 (垃圾回收机制)
    - 公有/私有
    - 作用域
    - 内存蟹肉
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

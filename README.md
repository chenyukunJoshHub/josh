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
    -  +0 === -0
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
- Array
- object
- number
- string
- Function
- 闭包 (垃圾回收机制)
    -
- 函数声明（变量声明提升机制）/函数表达式/立即执行函数表达式
- arguments  [].slice.apply(arguments)
- this指向/new
- __proto__ 原型链 null 终极大BOSS  object
    - L instanceof R  =》  L.__proto__.__proto__ ..... === R.prototype ？
- apply/call 区别
- Promise原理  async/await 更像同步写异步
- web worker   postMessage/onmessage  子线程
- 排序方法
- 去重方法
- 作用域




### 正则
![](http://images.cnitblog.com/blog/608782/201409/031430427829068.gif)

## 服务端
>

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


## 实战
- 小程序
- weex
- html5电商
- 微信公众号 api

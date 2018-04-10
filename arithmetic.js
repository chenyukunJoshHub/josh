
// 闭包
// 函数声明
// 函数表达式 
// 立即执行函数
// (function () {})()


// node js调试 （大型项目）
// node --inspect app.js  / node --inspect-brk=9229 app.js  第一行就设置断点
// chrome://inspect  // about:inspect


// vscode 调试 (小js文件) -zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// 支持以调试模式启动程序或以调试模式附加到已运行的程序

// option
// type - 用于此启动配置的调试器类型。每安装调试扩展引入一个类型，例如，node对于内置的节点调试器，或php与go对PHP和去扩展。
// request - 此启动配置的请求类型。目前支持的是launch和attach。
// name - 出现在Debug启动配置下拉列表中的友好名称。
// 以下是适用于所有启动配置的一些可选属性：

// preLaunchTask- 要在调试会话开始前启动任务，请将此属性设置为tasks.json（位于工作区.vscode文件夹下）中指定的任务的名称。
// internalConsoleOptions - 在调试会话期间控制调试控制台面板的可见性
// debugServer- 仅限调试扩展作者：连接到指定的端口，而不是启动调试适配器
// 许多调试器支持以下一些属性：

// program - 启动调试器时运行的可执行文件或文件
// args - 传递给程序进行调试的参数
// env- 环境变量（该值null可用于“取消定义”变量）
// cwd - 用于查找依赖关系和其他文件的当前工作目录
// port - 连接到正在运行的进程时的端口
// stopOnEntry - 节目启动时立即中断
// console-要使用什么样的主机，例如internalConsole，integratedTerminal，externalTerminal

// 变量
// ${workspaceFolder}工作区文件夹的根路径 // ${workspaceRoot}变量已被弃用
// ${file}活动编辑器中打开的文件
// ${env:Name}环境变量“Name”的示例  //  "args": [ "${env:USERNAME}" ]
// $ {workspaceFolderBasename} - VS代码中打开的文件夹的名称，不带任何斜杠（/）
// $ {file} - 当前打开的文件
// $ {relativeFile} - 当前打开的文件相对于workspaceFolder
// $ {fileBasename} - 当前打开的文件的基本名称
// $ {fileBasenameNoExtension} - 当前打开的文件的基本名称，没有文件扩展名
// $ {fileDirname} - 当前打开的文件的dirname
// $ {fileExtname} - 当前打开的文件的扩展名
// $ {cwd} - 启动时任务运行者的当前工作目录
// $ {lineNumber} - 活动文件中当前选定的行号


/**
 * () 会把匹配到的 内容 额外的 添加到 数组
 * 分组的类型
   捕获型　　　-　()   有组合集
   非捕获型　　-　(?:) 没有 组合集
   正向前瞻型　-　(?=) 要求字符串与p匹配，但是 结果集 并不包含匹配p的字符
   反向前瞻型　-　(?!) 要求字符串不与p匹配, 但是 结果集 并不包含匹配p的字符
*/
/* 结果  url = 'http://www.domain.com/?user=anonymous&id=123&id=345&id=678&city=%E5%8C%97%E4%BA%AC&enabled';
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
// 正则  / split / concat(数组)
(function parseParam() {
    let url = 'http://www.domain.com/?user=anonymous&id=123&id=345&id=678&city=%E5%8C%97%E4%BA%AC&enabled';
    const reg = /\?(.+)/
    const parseStr = decodeURIComponent(reg.exec(url)[1])  //解码
    const parseJson = parseStr.split('&')
    const hashJson = {}
    parseJson.forEach((m, n) => {
        const [key, value] = m.split('=')
        const _value = value == Number(value) ? parseFloat(value) : value
        // const arr = []
        
        // hasOwnProperty => 构造函数的属性  
        if (hashJson.hasOwnProperty(key)) {
            /* 壹 */
            // if (typeof (hashJson[key]) != 'arrary') {
            //     arr[0] = hashJson[key]
            //     arr[1] = value
            // } else {
            //     arr.push(value)
            // }
            // hashJson[key] = arr

            // ... 字符串会解析成单个
            hashJson[key] = [].concat(hashJson[key], _value)
        } else {
            hashJson[key] = _value || true
        }
    })
    console.log(hashJson)
}); //  ();


//实现一个简单的模板引擎
/**
    $1、$2、...、$99	与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
    $&	与 regexp 相匹配的子串。
    $`	位于匹配子串左侧的文本。
    $'	位于匹配子串右侧的文本。
    $$	直接量符号。
    g   匹配全部
    i   适配大小写

    ? 懒惰模式(后面跟？，必须跟在*或者+后边用)
    .*具有贪婪的性质，首先匹配到不能匹配为止，根据后面的正则表达式，会进行回溯。
    .*？则相反，一个匹配以后，就往下进行，所以不会进行回溯，具有最小匹配的性质。

    match => [完整匹配， 匹配组， index， input]

    for in 会遍历自身以及原型链所有的属性。(可枚举属性)
*/
/** 结果
    let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
    let data = {
        name: 'Doe, John',
        age: 18
    }
    render(template, data); // 我是John, Doe，年龄18，性别undefined
*/
// 正则 replace =》 （）组合集  (.*?) 组合 懒惰模式 集
(function render() {
    let template = '我是{{ name }}，年龄{{age}}，性别{{sex}}，简介{{des}}'
    let data = {
        name: 'Doe, John',
        age: 18,
        des: "abc bcd def"
    }
    const renderFn = (template, data) => {
       return template.replace(/{{(.*?)}}/gi , (match, key) => {
           console.log(match, key) // match 匹配值  key 匹配组内容

           // 前后字符对话
           if (key.trim() == 'name'){
              console.log(data['name'].match(/(\w+),\s*(\w+)/)) 
              return data['name'].replace(/(\w+),\s*(\w+)/g, '$2, $1')
           }
           
           // 首字符大写
           if (key.trim() == 'des') {
               return data['des'].replace(/\b(\w+)\b/g, (m, k) => {
                  // return k.replace(k[0], k[0].toLocaleUpperCase())
                  return k.substring(0,1).toLocaleUpperCase() + k.substring(1)
               })
           }

           return data[key.trim()]
       })
    }
    console.log(renderFn(template, data))
}); // ();


//实现一个简单的虚拟 DOM 渲染

/**
    let domNode = {
        tagName: 'ul',
        props: { class: 'list' },
        children: [{
            tagName: 'li',
            children: ['item1']
        }, {
            tagName: 'li',
            children: ['item1']
        }]
    };

    // 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
    <ul class="list">
        <li>item1</li>
        <li>item2</li>
    </ul>
*/
// 递归
(function () {
    
    let domNode = {
        tagName: 'ul',
        props: { class: 'list' },
        children: [{
            tagName: 'li',
            children: ['item1']
        }, {
            tagName: 'li',
            children: ['item1']
        }]
    };

    // 递归
    const render = (domNode) => {
     
       let Element = document.createElement(domNode.tagName)
       if (domNode.hasOwnProperty('props')) {
            //  Element.className = domNode.props.class
           // 优化
           for (let key in domNode.props) {
                Element.setAttribute(key, domNode.props[key])
           }
       }
       if (domNode.hasOwnProperty('children') && domNode.children.length > 1) {
          domNode.children.forEach ((m, n) => {
             Element.appendChild(render(m))
          })
       } else {
           const text =  document.createTextNode(domNode.children[0])
           Element.appendChild(text)
       }
       return Element
    }

    console.log(render(domNode))
}); // ()



// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1)
/**
    a='34';b='1234567'; // 返回 2
    a='35';b='1234567'; // 返回 -1
    a='355';b='12354355'; // 返回 5
    isContain(a,b);
*/
/*
　  赋值运算符（=,+=,-=,*=,/=,%=,<<=,>>=,|=,&=）
   算术运算符(+,-,*,/,++,--,%)
   比较运算符(>,<,<=,>=,==,===,!=,!==)
   逻辑运算符(||,&&,!)
   条件运算(?:)
   位移运算符(|,&,<<,>>,~,^)
*/
/*
    类型转换,转换成数字类型
    ~~true == 1
    ~~false == 0
    ~~"" == 0
    ~~[] == 0
    ~~undefined ==0
    ~~!undefined == 1
    ~~null == 0
    ~~!null == 1
*/
// [0] 匹配第n位，余下的顺序对比是否相同
// search / indexOf
(function () {
    const a = '355'
    const b = '12354355'
    const isContain = (srtA, strB) =>  {
        const lenA = srtA.length
        const lenB = strB.length
        let index = 0
        for (let i = 0; i < lenB; i ++) {
            if (srtA[0] == strB[i]) {
               if (diff (srtA.substring(1), strB.substring(i + 1))) {
                   index =  i  // 记录初始化位置
                   break;
               }
            }
        }
        return index == 0 ? -1 : index
    }
    // 1:1 对比
    const diff = (diffA, diffB) => {
        for (let i = 0; i < diffA.length; i++) {
            if (diffA[i] != diffB[i]){
                return false
            }
        }
        return true
    }
    console.log(isContain(a, b))
    console.log(b.search(a))
    console.log(b.indexOf(a))
}); //();


// 将一个任意长的数字变成逗号分割的格式 (保留三位小数)
// 
/*
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
*/
/*
    parseFloat 1. 只转换第一个无效字符之前的字符串 2. 去掉多余的0
    /\d(?=(\d{3})+$)/g  (最后一组是3位数) =》 1 xxx xxx (ok)  => 2 xxx xx  => 3 xxx x  => 4 xxx (ok)
*/
// 1. join(,)  2. replace(xxx, '$&,') 替换  3. toLocaleString/
(function () {
    // join(,) 先转数组
    const parseToMoney = (number) => {
        const strNumber = number.toString()
        const [strz, strx] = strNumber.split('.')
        const l = strz.length
        const n = parseInt(l / 3)
        let firstn = l - n * 3 || 0

        let arr = []

        if (firstn > 0) {
            arr[0] = strz.substring(0, firstn)
        } 

        for (let i = 0; i < n; i ++) {
            arr.push(strz.substring(~~firstn , ~~firstn + 3))
            firstn += 3
        }
        return arr.join(',') + '.' + strx.substring(0, 3)
    }

    // 正则替换
    const parseToMoney2 = (number) => {
        const nb = parseFloat(number.toFixed(3)) // 小数点留3位，去掉多余的0
        let [integer, decimal] = nb.toString().split('.')
        // console.log(integer.match(/\d(?=(\d{3})+$)/g)) // [1, 4]
        integer.replace(/\d(?=(\d{3})+$)/g, (m, key) => {
            console.log(m, key)
        });
        integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
        return integer + '.' + (decimal ? decimal : '');
    }

    // 原生
    console.log(Number.prototype.toLocaleString.call(1234567.12345))
    // console.log(1234567.12345.toLocaleString()); 

    console.log(parseToMoney2(1234567.5))
    console.log(parseToMoney(1234567.567))
}); // ();


//数据绑定最基本的实现
/**
 * 结果
    // 实现一个方法，可以给 obj 所有的属性添加动态绑定事件，当属性值发生变化时会触发事件
    let obj = {
        key_1: 1,
        key_2: 2
    }
    function func(key) {
        console.log(key + ' 的值发生改变：' + this[key])
    }
    bindData(obj, func);
    obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
    obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"
*/

(function () {
    let obj = {
        key1: 1,
        key2: 2
    }

    // function func (key) {
    //     console.log(key + ' 的值发生改变：' + this[key])
    // }

    const func = (key) => {
        console.log(key + ' 的值发生改变：' + this[key])
    }

    const bindData = (OBject, func) => {
        Object.keys(OBject).forEach((key, n) => {
            Object.defineProperty(OBject, key, {
                get: () => {
                    //当获取值的时候触发的函数
                    // console.log('获取值的时候触发的函数')
                    return OBject[key]
                },
                set: (value) => {
                    // 当设置值的时候触发的函数,设置的新值通过参数value拿到
                    console.log('当设置值的时候触发的函数,设置的新值通过参数value拿到')
                    this[key] = value
                    func (key)
                }
            })
        })
    }
    bindData(obj, func);

    // 获取值 触发 get函数
    // obj['key1'] = 》 获取值的时候触发的函数

    // 置值的时候触发set函数
    obj.key1 = 1 // 
    obj.key1 = 1
}); // ();

//  数据结构处理
// 请实现一个函数，找出这个家族中所有有多个儿子的人的名字（name），输出一个数组。
/**
 let data = {
    name: 'jack',
    child: [
        { name: 'jack1' },
        {
        name: 'jack2',
        child: [{
            name: 'jack2-1',
            child: { name: 'jack2-1-1' }
        }, {
            name: 'jack2-2'
        }]
        },
        {
        name: 'jack3',
        child: { name: 'jack3-1' }
        }
    ]
    }
*/
/**
 * 递归
*/

(function() {
let data = {
    name: 'jack',
    child: [
        { name: 'jack1' },
        {
            name: 'jack2',
            child: [
                {
                    name: 'jack2-1',
                    child: { name: 'jack2-1-1' }
                }, {
                    name: 'jack2-2'
                }
            ]
        },
        {
            name: 'jack3',
            child: { name: 'jack3-1' }
        }
    ]
}


const childrens = []
const sons = (obData) => {
    const children  = obData.child
    if (!Object.hasOwnProperty('child') &&  !Array.isArray(children)) {
        return false
    }
    if (!children.length && children.length <= 1) {
        return false
    }
    for(let i =0; i< children.length; i++) {
        sons(children[i])
    }
    childrens.push(obData.name)
    return childrens
}

console.log(sons(data))

}); //();


// 加法叠加
// 1+ 2 + 3 + 4 + 5 + ...n
(function () {
    // 递归 + 法
    let _sum = 0
    const sums = nb => {
        if (nb > 9) { return false }
       sums(nb + 1)
       _sum += nb
      return _sum
    }
    console.log(sums(1))
    console.log(_sum)


    // 数组 reduce
    let arr = [1,2,3,4,5,6];
    
    //arr.reduce(callback, initialValue)
    let sumarr =  arr.reduce(function(preValue, curValue, index, array){
        // preValue: 上一次调用回调返回的值，或者是提供的初始值（initialValue）
        // curValue: 数组中当前被处理的数组项
        // index: 当前数组项在数组中的索引值
        // array: 调用 reduce()方法的数组
        return preValue + curValue
    }, 0)

    console.log(sumarr);

}); // ()


// 去掉一组整型数组重复的值   [1,13,24,11,11,14,1,2]
/**
*   Object.create(obj);
*   * obj 作为新创建对象的原型。
*
*   ** Object.create(null);   === var obj
*   ** Object.create(Object.prototype);   === var obj = {};
*   ** const A = {};   Object.getPrototypeOf( Object.create(A) ) === A  TRUE
*/
/**
 * 1. new set()
 * 2. sort() 前后对比
 * 3. indexof 
 * 4. hash
 * 5. hash + Object.values()
*/
(function () {
    // 方案一
    /**
     * map / filter 返回新数组
    */
    const sort1 = () => {
        let arr = [1,13,24,11,11,14,1,2]
        return [...new Set(arr)];
        // return Array.from(new Set(arr))
    }
    console.log(sort1(), 'sort1')

    const sort2 = () => {
        let arr = [1,13,24,24,11,11,14,1,2].sort()
        let sortArr = [];
       for (let index = 0; index < arr.length; index++) {
            // 方法一：前后对比
        //    if (arr[index] != arr[index + 1]) {
        //        sortArr.push(arr[index])
        //    }

            // 方法二： 与sortArr 最后一个数字对比
           if(arr[index] != sortArr[sortArr.length -1])  {
              sortArr.push(arr[index])
           }
          
       }
       return sortArr
    }
    console.log(sort2(), 'sort2')
   
    // indexOf
    const sort3 = () => {
        let arr = [1,13,24,24,11,11,14,1,2]
        let sortArr = [];
       for (let i = 0; i < arr.length; i++) {
           if (arr.indexOf(arr[i]) == i) {
                sortArr.push(arr[i])
           } else {
               continue
           }
       }
       return sortArr
    }
    console.log(sort3(), 'sort3')

    // hash
    const sort4 = () => {
        let arr = [1,13,24,24,11,11,14,1,2]
        let sortArr = [];
        let hash = {}
       for (let i = 0; i < arr.length; i++) {
          if (!hash[arr[i]]) {
            hash[arr[i]] = true
            sortArr.push(arr[i])
          }
       }
       return sortArr
    }
    console.log(sort4(),'sort4')

     // hash + 排序（hash排序） 推荐
     const sort5 = () => {
        let arr = [1,13,24,24,11,11,14,1,2]
        let hash = Object.create(null)
       
        for (let i = 0; i < arr.length; i++) {
            hash[arr[i]] = arr[i]
       }

        // return Object.getOwnPropertyNames(hash)
        // return Object.keys(hash)
        return Object.values(hash)
    }
    console.log(sort5(),'sort5') 

}); //();



//统计一个字符串出现最多的字母   afjghdfraaaasdenas
/**
 * reduce() 统计 (类似于 push)
*/
(function(){
    const strM = (str) => {
        let srtArr = [...str]

        let hash = {}
        let _key = "a"

        srtArr.forEach((m) => {
            hash[m] = ~~hash[m] + 1
        })

        for (let key in hash) {
            if (hash[key] > hash[_key]) {
                _key = key
            }
        }

        return _key
    }

    console.log(strM('afjghbbbbbbbbbdfraaaasdenas'))

    const strM2 = () => {
        const str = "afjghbbbbbbbbbdfraaaasdenas"
       return Array.prototype.reduce.call(str, function(pre, current){
            console.log(pre, current, pre[current])
            if(pre[current]){
                pre[current] ++;
            }else{
                pre[current ] = 1;
            }
            return pre;
        }, {}) //初始值 {}
    }
    console.log(strM2())
}); // ();


//不借助临时变量，进行两个整数的交换   输入 a = 2, b = 4 输出 a = 4, b =2
/**
    a^=b等价于a = a^b，其中^是位异或运算，即将a与b的对应位进行异或运算，同为0或者同为1时，对应位结果为0；  否则为1。
    比如，假设，a的值为二进制的1010，b的值为二进制的1100，那么a^b = 0110
    parseInt(number, 2 / 8 / 16)  其他进制转 10进制
    number.toString(2) =》1011   10进制 转 其他进制转（2 / 8 / 16）

    * + - * / 也可以，只能纯整数
*/
(function () {
    
    const transform = () => {
        let a = 2;
        let b = 4;
        a = Array.prototype.concat.call([], a, b)
        b = a.splice(0, 1)
        console.log(+a, +b)
    }

    const transform2 = () => {
        let a = 2; 
        let b = 4;
        [a, b] = [b, a]
        console.log(a, b)
    }
    
    let a = 2;  // 2进制 => 10
    let b = 4;  // 2进制 => 100
    a ^= b  // a 2进制 => 110 = > 6 (10进制)
    b ^= a  // b 2进制 => 010 => 2 (10进制)
    a ^= b // a 2进制 =>  100 = > 4(10进制)
    console.log(a, b)
}); // ()


// 找出正数组的最大差值  [10, 5, 11, 7, 1, 8]
/**
 * 先排序，last - first
*/
/**
 * 1. shor()
 * 2. Math.min()  / Math.max()
*/
(function () {
    let arr = [10, 5,11,7,1,8]
    arr.sort(function(a, b) {
        return a > b
    })
    console.log(arr[arr.length-1] - arr[0])
}); //();



// 随机生成指定长度的字符串  比如给定 长度 8 输出 4ldkfg9j
/**
 * Math.random().toString(32) 随机数转 32进制
 * chartStr(index)
 * join()
 */
(function () {

    const mathstr = () => {
        let chartStr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
        let outStr = '';
        for (let i = 0; i < 51; i ++){
            const random = Math.ceil((Math.random() * chartStr.length))
            outStr += chartStr.charAt(random)
        }
        return outStr;
    }
    console.log(mathstr())
    
    const mathStr2 = () => {
        let chartStr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'.split('') // [...chartStr]
        let outStr =[]
        for(let i =0; i< 51; i++) {
            const random = Math.ceil((Math.random() * chartStr.length))
            outStr.push(chartStr[random])
        }
        return outStr.join('')
    }
    console.log(mathStr2())
}); // ();



// 实现类似getElementsByClassName 的功能
/**
 * 1. .className 刷选
 * 2. 正则 匹配是佛正确
*/
(function(){
    const queryClassName = (name) => {
        const elements = document.getElementsByTagName('div') //所有dom节点
        const elementL = elements.length
        const reg2 = /(^\s*)|(\s*$)/g  ////匹配字符串中的首尾空格
        let outEle = []
        for(let i = 0; i < elementL; i++) {
            let reg = new RegExp('(^|\s+)' + name + '(\s*|$)') // 匹配 前后空格
            if (reg.test(elements[i].className)) {
                outEle.push(elements[i])
            }
        }
        return outEle
    }
    console.log(queryClassName('josh'), 'xxx')
}); //()


// js运行机制
/**
 * nodejs => 1 2 3 promise 4
 * js(浏览器) => 1 2 promise 3 4
 * 
 * 任务放进执行栈中执行（一个事件循环）
 * 微任务（micro-task）（任务中的vip, 插队）(任务队列最前面) 
 *  * process.nextTick （执行宅尾部）
 *  * Promises （任务队列最前面/ 或执行拽 尾部（ process.nextTick之后））
 * 宏任务（macro-task）
 */
(function(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
        setTimeout(function(){
            console.log(5)
        })
        Promise.resolve(1).then(function(){
            console.log('promise')
        })
        console.log('4')
    })
    setTimeout(function(){
        console.log(3);
    })
}); //()





//高阶函数 -xxxxxxxxxxxxxxxxxx
/**
 * 1. 以一个函数作为参数    map / reduce / filter  典型的
 * 2. 返回一个函数作为结果  return function(){}
*/

// 找出数组/对象中最大的值 
(function() {
    const max = (data, fn) => {
        if (Array.isArray(data) && (typeof data[0] != 'object')){
            return Math.max.call(null, ...data)
        }
        const arr = Array.prototype.reduce.call(data, function (m, n) {
             m.push(fn(n))
             return  m
        }, []);
        const index = Array.prototype.indexOf.call(arr, Math.max.call(null, ...arr))
        return data[index]
    }
    console.log(max([1,2,3,4]))
    console.log(max([{a:10}, {a: 20}, {b: 100}, {a:112}], function fn (x) { return x.a || x.b }))
}); // ();


// (function() {

// })()
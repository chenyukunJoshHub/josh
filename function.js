/**
 * 收集一些比较好的 思想和写法
 * 集成一些比较好的写法，和方法的定义
 */

 (function(){
     // 非 null undefined
    const existy = (x) => x != null;

    console.log(existy(null))
    console.log(existy(undefined))
    console.log(existy({}.xxx))
    console.log(existy((function(){})()))

    // 不是 布尔值false + 不是 null
    const truthy = (x) => (x !== false) &&  existy(x);
    const vacancy = (x) => (x != false) &&  existy(x);
    
    console.log(truthy(0)) // true
    console.log(truthy('')) //true

    console.log(vacancy(0), 'vacancy')
    console.log(vacancy(''), 'vacancy')
    console.log(vacancy(true), 'vacancy')

    // // const isEmpty, isElement, isArray, isObject, isFunction, isString, isNumber, isBoolean, isData, isRegExp, isNaN, isNull, isUndefined, isArguments(是否有字段)
    
    // const isEmpty = () => {}

    // const isElement = () => {}

    // const isArray = () => {}

    // const isObject = () => {}

    // const isFunction = () => {}

    // const isString = () => {}

    // const isNumber = () => {}

    // const isBoolean = () => {}

    // const isData = () => {}

    // const isRegExp = () => {}

    // const isNaN = () => {}

    // const isNull = () => {}

    // const isUndefined = () => {}

    // const isArguments = () => {}

 }); // ()

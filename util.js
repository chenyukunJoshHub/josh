/**
 * 存储 localStorage
 */
export const setStore = (name, content) => {
  if (!name) {
    return;
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取 localStorage
 */
export const getStore = name => {
  if (!name) return;
  return JSON.parse(window.localStorage.getItem(name));
};

/**
 * 删除 localStorage
 */
export const removeStore = name => {
  if (!name) return;
  return window.localStorage.removeItem(name);
};

/**
 * 时间格式化
 */

export const formatTime = function (date, mode) {
  if (!date) {
    return '';
  }
  let d0 = new Date(0);
  let d1 = new Date('1970/01/01 08:00:00');
  date = parseInt(date) + ((d1.getTime() - d0.getTime()) / 1000);
  let d = new Date(parseInt(date) * 1000);
  let format = mode;
  let o = {
    'M+': d.getMonth() + 1, // month
    'd+': d.getDate(), // day
    'h+': d.getHours(), // hour
    's+': d.getSeconds(), // second
    'm+': d.getMinutes(), // minute
    'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
    'S': d.getMilliseconds() // millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
};
// UUID 生成 type 区分那个第三方 'ding' 'weixin'
export const uuid = function (type) {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";
  
  let uuid = s.join("");
  return type + uuid;
};
// /**
//  * Created by josh on 16/11/8.
//  */
//
// /*
//  *  克隆
//  *   Object.create(obj);
//  *   * obj 作为新创建对象的原型。
//  *
//  *   ** Object.create(null);   === var obj
//  *   ** Object.create(Object.prototype);   === var obj = {};
//  *   ** const A = {};   Object.getPrototypeOf( Object.create(A) ) === A  TRUE
//  * */
//
// /*
//  * cloneObj 数组深度克隆
//  * */
// export function deepCloneObj(obj) {
//     let str,
//         newobj = obj.constructor === Array ? [] : {};
//     // var arr = new Array() obj 是Array构造函数实例
//     if (typeof obj !== 'object') {
//         return;
//     } else if (window.JSON) {
//         str = JSON.stringify(obj);
//         newobj = JSON.parse(str);
//     } else {
//         for (var i in obj) {
//             newobj[i] = typeof obj[i] === 'object' ? deepCloneObj(obj[i]) : obj[i];
//         }
//     }
//     return newobj;
// }
//
/*
 * 单数组去重复 [a, b,c,d]
 * 空间换时间
 * */
export function hashUnique(arr) {
  let result = [];
  let hash = {};
  for (var i = 0, elem;
       (elem = arr[i]) != null; i++) {
    if (!hash[elem]) {
      result.push(elem);
      hash[elem] = true;
    }
  }
  return result;
}

//
// /*
//  * 单数组去重复 [a, b,c,d]
//  * 关键字 indexOf
//  * */
// export function indexUnique(array) {
//     let result = [array[0]]; //结果数组
//     //从第二项开始遍历
//     for (let i = 1; i < array.length; i++) {
//         //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
//         //那么表示第i项是重复的，忽略掉。否则存入结果数组
//         if (array.indexOf(array[i]) == i) {
//             result.push(array[i])
//         };
//     }
//     return result;
// }
//
// /*
//  * 单数组去重复 [a, b,c,d]
//  * 将相同的值相邻，然后遍历去除重复值
//  * */
// export function sortUnique(array) {
//     array.sort();
//     let result = [array[0]];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] !== result[result.length - 1]) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
//
// /*
//  * 单数组去重复 [a, b, a, d,a]
//  * 思路：获取没重复的最右一值放入新数组
//  * */
// eachUnique([1, 2, 3, 1, 11, 2, 3, 4, 5, 6, 3, 2, 3, 3, 1, 2, 3, 5, 3])
// export function eachUnique(array) {
//     let result = [];
//     for (var i = 0, l = array.length; i < l; i++) {
//         for (var j = i + 1; j < l; j++) {
//             if (array[i] === array[j]) {
//                 j = ++i;
//             }
//         }
//         result.push(array[i]);
//     }
//     return result;
// }
//
// /*
//  * Object 深度合并
//  * jquery.extend
//  * */
// export function extend(obj, copyArray) {
//     let src,
//         copyIsArray,
//         isArray,
//         copy,
//         name,
//         clone,
//         target = typeof obj == "object" ? obj : {}
//
//     if (copyArray != null) {
//
//         for (name in copyArray) {
//
//             src = target[name]; //** 数组一
//             copy = copyArray[name]; //** 数组二
//
//             //** 防止无限循环
//             if (target === copy) {
//                 continue;
//             }
//
//             const isObject = copyIsArray = Array.isArray(copy) //**数组
//
//             if (copy && ((typeof copy == "object" && !isObject) || copyIsArray)) {
//                 if (copyIsArray) {
//                     copyIsArray = false;
//                     isArray = Array.isArray(src)
//                     clone = src && isArray ? src : [];
//                 } else {
//                     clone = src && typeof src == "object" ? src : {};
//                 }
//
//                 target[name] = extend(clone, copy, booble, callback);
//
//             } else if (copy !== undefined) {
//                 target[name] = copy;
//             }
//
//         }
//
//     }
//
//     return target;
// }
//
// /**
//  * Check whether the object has the property.
//  * 方法会返回一个布尔值，其用来判断某个对象是否含有指定的属性
//  */
// const hasOwnProperty = Object.prototype.hasOwnProperty;
// export function hasOwn(obj, key) {
//     return hasOwnProperty.call(obj, key)
// }
//
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *  console.log(Object.prototype.toString.call(123)) //[object Number]
 console.log(Object.prototype.toString.call('123')) //[object String]
 console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
 console.log(Object.prototype.toString.call(true)) //[object Boolean]
 console.log(Object.prototype.toString.call({})) //[object Object]
 console.log(Object.prototype.toString.call([])) //[object Array]
 console.log(Object.prototype.toString.call(function(){})) //[object Function]
 */
const toString = Object.prototype.toString;
const OBJECT_OBJECT = '[object Object]';
const OBJECT_NUMBER = '[object Number]';
const OBJECT_STRING = '[object String]';
const OBJECT_BOOLEAN = '[object Boolean]';
const OBJECT_ARRAY = '[object Array]';
const OBJECT_FUNCTION = '[object Function]';

export function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_OBJECT;
}

export function isPlainNumber(obj) {
  return toString.call(obj) === OBJECT_NUMBER;
}

export function isPlainString(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

export function isPlainBoolean(obj) {
  return toString.call(obj) === OBJECT_BOOLEAN;
}

export function isPlainArray(obj) {
  return toString.call(obj) === OBJECT_ARRAY;
}

export function isPlainFunction(obj) {
  return toString.call(obj) === OBJECT_FUNCTION;
}

/**
 *obj = object
 * false //不为空
 * true //为空
 */
export function isEmptyObject(obj) {
  for (let name in obj) {
    return false;
  }
  return true;
}

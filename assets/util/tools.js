/*
 * @Author: your name
 * @Date: 2020-01-09 17:15:10
 * @LastEditTime : 2020-01-09 17:47:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\tools.ts
 */

/**
 * @description: 防抖
 * @param {type} 
 * @return: 
 */
export function debounce(fn, wait) {
    let timeout = null;
    return function () {
        if (timeout !== null) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait);
    }
}

export function throttle(func, delay) {
    var prev = Date.now();
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}     
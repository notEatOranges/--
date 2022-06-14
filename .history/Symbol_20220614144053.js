/*
 * @Author: hly
 * @Description: 
 * @Date: 2022-06-14 14:40:02
 * @LastEditTime: 2022-06-14 14:40:53
 * @FilePath: /学习/Symbol.js
 */

let a = Symbol('a');
let b = Symbol('b');
const obj = {
    [a]: 'hello',
    [b]: 'world'
}
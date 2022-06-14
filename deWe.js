/*
 * @Author: hly
 * @Description: 
 * @Date: 2022-05-18 18:20:44
 * @LastEditTime: 2022-05-18 18:22:43
 * @FilePath: /jsty-stgl/Users/d_xiaohei/Desktop/deWe.js
 */
var arr2 = [
  {name: 'a',id: 1}, 
  {name: 'a',id: 2}, 
  {name: 'b',id: 3}, 
  {name: 'c',id: 4},
  {name: 'c',id: 6}, 
  {name: 'b',id: 6}, 
  {name: 'd',id: 7}
];
var temp = [];
function deWeightTwo() {
  arr2.forEach(function(a) {
      var check = temp.every(function(b) {
      return a.name !== b.name;
    })
    check ? temp.push(a) : ''
  })
  return temp;
}
var newArr2 = deWeightTwo();
console.log('%c%s', 'color:red;', '⽅法⼆：es5,newArr2', newArr2)
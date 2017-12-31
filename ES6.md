**ES6**
- 模板字符串
- 箭头函数
- for-of
- Promise
- let const class 块级作用域
- import export
- 解构赋值  
```
let uid = Symbol('uid')
let set = new Set([1,2,2,3])//[1,2,3]
let map = new Map()
map.set({a:'jkl'}, 5)//key可为任意数据类型
```
```
Object.is(+0, -0) //false 
Object.is(NaN, NaN) //true
+0 === -0 //true
NaN === NaN //false
```
```
async function asyncPrint(value, ms){
	await timeout(ms)
	console.log(value)
}
```

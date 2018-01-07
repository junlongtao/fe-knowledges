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

```
let const块级作用域，不可同名，变量不提升，变量不提升，变量不提升，暂时性死区
//对象冻结
Object.preventExtensions(), Object.seal(), Object.freeze()

//模板字符串
let foo = `学生${name}正在学习es6`

//解构赋值
var [a,b,...c] = [1,2,3,4,5,6]
var {a,b,...c} = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5
} 

//class extends super
class Animal{
	constructor(){
		this.type = 'animal';
	}
	says(say){
		console.log(this.type+' says '+say)
	}
}
class Cat extends Animal{
	constructor(){
		super()
		this.type = 'cat'
	}
}

//
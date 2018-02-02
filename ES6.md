**ES6**  
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
//箭头函数, 并不绑定this,arguments,super,new.target,只是局部变量，链式查找
function foo() {
   setTimeout( () => {
      console.log("id:", this.id);
   },100);
}
foo.call( { id: 42 } )//id: 42

function foo() {
   setTimeout( () => {
      console.log("args:", arguments);
   },100);
}
foo( 2, 4, 6, 8 )//args: Arguments(4)[2, 4, 6, 8, callee:f, Symbol(Symbol.iterator): f]

//let const
块级作用域，不可同名，变量不提升，变量不提升，变量不提升，暂时性死区
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

//Promise
Promise.prototype.catch = Promise.prototype.then(null, rejection)
promise.catch后面还可以接着调用then

//promise状态只能改变一次
const promise = new Promise((resolve, reject)=>{
	resolve('success')
	reject('error')
	resolve('success2')
})
promise.then(res=>{
	console.log('then:', res)
}).catch(res=>{
	console.log('catch:', res)
})//then:success

//new Promise中的function会立即执行，then中的function异步执行
var promise=new Promise(function(resolve, reject){
    console.log(1)
    resolve()
    console.log(2)
}) 
promise.then(function(){
    console.log(3)
}).then(function(){
    console.log(4)
}).then(function(){
    console.log(5)
}) 
console.log(6)// 1 2 6 3 4 5

//then/catch不可返回promise本身，否则死循环
const promise = Promise.resolve()
.then(() => {
	return promise
})
promise.catch(console.error)//TypeError: Chaining cycle detected for promise

//then/catch返回非promise会被包裹成promise对象，return new Error('error')等价于return Promise.resolve(new Error('error'))

//map(值-值的映射) set(不可重复)
const s1 = new Set([NaN, NaN])
s1.size//1
const s2 = new Set([{}, {}])
s2.size//2
s1.add(1).add(2).add(3)
s1.size//4




### JavaScript

**debounce & throttle**
```
// debounce
// 最后一次事件delay后执行
function debounce(fn, time) {
  var timeout = null;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(fn, time);
  }
}
function doSomething() {
  console.log(Math.random());
}
window.addEventListener('scroll', debounce(doSomething, 1000);

// throttle
// 立即执行，间隔delay就执行
function throttle(fn, delay) {
  var timeout = null;
  var startTime = Date.now();
  return function() {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    if (remaining <=0) {
      fn.apply(context, args);
      startTime = Date.now();
    } else {
      timeout = setTimeout(fn, remaining);
    }
  }
}
function doSomething() {
  console.log(Math.random());
}
window.addEventListener('scroll', throttle(doSomething, 1000));
```

**function referrence**
```
var a=0,b=0
function A(a){
  A = function(b){
    console.log(a+b++)
  }
  console.log(a++)
}
A(1)//1
A(2)//4

```



**变量提升失效**
```
function f1(a) {
    console.log(a);// 10
    var a=1;//变量声明提升var a=undefined 遇到函数传参，被忽略 => var a,so a=10
    console.log(a);// 1 
    console.log(arguments[0])// 1
}
f1(10)
```



**instanceof**
```
function instance_of(L, R) {
  var O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null)
      return false;
    if (O === L)
      return true;
    L = L.__proto__;
  }
}
```


**microtask macrotask task**
- macrotasks: setTimeout ，setInterval， setImmediate，requestAnimationFrame,I/O ，UI渲染
- microtasks: Promise， process.nextTick， Object.observe， MutationObserver


**parseInt第二个参数**
```
parseInt('1000', 2)//8
parseInt('a', 16)//10
```

**实现add(1)(2)(3)(4)==10**
```
function add(a){
  function s(b){
    a = a+b
    return s
  }
  s.toString = function(){
    return a
  }
  return s
}
add(1)(2)(3)(4) === 10//false
add(1)(2)(3)(4) == 10//true
typeof add(1)(2)(3)(4)//'function'
```


**判断变量类型**
```
Object.prototype.toString.call('jkl') === '[object String]'
Object.prototype.toString.call(88888) === '[object Number]'
Object.prototype.toString.call(false) === '[object Boolean]'
Object.prototype.toString.call(undefined) === '[object Undefined]'
Object.prototype.toString.call(null) === '[object Null]'
Object.prototype.toString.call({a:88888}) === '[object Object]'
Object.prototype.toString.call([1,2,3,4,5]) === '[object Array]'
Object.prototype.toString.call(function a(){}) === '[object Function]'
Object.prototype.toString.call(Symbol('user_id')) === '[object Symbol]'
Object.prototype.toString.call(new Date()) === '[object Date]'
Object.prototype.toString.call(/\d+/) === '[object RegExp]'
```


**实现indexOf**
```
(function(){
  Array.prototype.indexOf = function(ele){
      if(this === null || ele === null){
          return -1;
      }
      var index = -1;
      var len = this.length;
      for(let i=0; i<len; i++){
          if(this[i] === ele){
              return i;
          }
      }
      return -1;
  }
  let a = [3,6,99,2,10]
  console.log(a.indexOf(99))
})()
```



**实现call, apply, bind**
``` 
Function.prototype.call = function(context){
  var context = context||window
  context.fn = this

  var args = []
  for(var i=1, len=arguments.length; i<len; i++){
    args.push('arguments['+i+']')
  }

  var res = eval('context.fn('+args+')')
  delete context.fn

  return res
}
var value = 2
var obj = {value: 1}
function bar(name, age){
  return {
    value: this.value, 
    name: name, 
    age: age
  }
}
bar.call(null)//{value: 2, name: undefined, age: undefined}
bar.call(obj, 'kevin', 18)//{value: 1, name: 'kevin', age: 18}


Function.prototype.apply = function(context, arr){
    var context = context||window 
    context.fn = this

    var res
    if(!arr){
        res = context.fn()
    }else{
        var args = []
        for(var i=0, len=arr.length; i<len; i++){
          args.push('arr['+i+']')
        }
        res = eval('context.fn('+args+')')
    }
    
    delete context.fn
    return res
}


Function.prototype.apply = function(context, args){
  var res = Function.prototype.call.call(context, [...args])
  return res
}

```



**this**
- 直接调用, this=>window
- 方法调用，this=>调用者
- IIFE,this=>window
- new, this=>实例
- apply, call, this=>传入obj
```
var a = [1,2]
a.b = function(){
  console.log(this)
}
a.b()//a
setTimeout(a.b, 1000)//window
```



**JavaScript的组成**
- js=es+dom+bom
      


**基本数据类型 引用数据类型**
- 基本：string,number,boolean,undefined,null,symbol -- stack
- 引用：object、array、function -- heap




**检测浏览器版本版本有哪些方式？**
- navigator.userAgent.toLowerCase().indexOf('chrome') 




**介绍JS有哪些内置对象？**
- 数据封装类：Object、Array、Boolean、Number、String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error
- ES6新增：Symbol、Map、Set、Promise、Proxy、Reflect



**JavaScript基本规范**
- 四空格缩进
- 使用{}包裹
- 分号;结束
- 使用前进行声明
- 构造函数大写字母开头，常量全大写
- JSON补全双引号
- 用{}和[]声明



**高性能JavaScript**
* "use strict";
* js置底
* js打包
* 非阻塞js
* 使用局部变量
* 减少闭包
* window属性省略window
* 减少对象成员嵌套
* 缓存DOM节点
* 避免eval(),Function()
* setTimeout(),setInterval()传递函数
* 直接量创建对象和数组
* 最小化repaint和reflow



**描述浏览器的渲染过程，DOM树和渲染树的区别？**
- 解析HTML构建DOM树，并行请求css/image/js构建CSS树，生成Render Tree，布局(Layout)，显示(Painting)  
- dom tree包括head和隐藏元素,render tree不包括head和隐藏元素



**重绘repaint vs 回流reflow**
- 重绘：外观（如：颜色）改变
- 回流：布局（如：尺寸、位置、隐藏/状态状态）改变,offsetLeft、scrollTop、getComputedStyle等
- 回流必重绘，重绘不回流



**最小化repaint reflow**
- display:none操作完再显示
- DocumentFragment创建后一次性加入
- 缓存elem.offsetLeft
- 避免table布局
- 避免css expression
- css简写如border代替border-width, border-style, border-color
- className 和 style.cssText 代替 style.xxx



**script位置是否影响首屏时间**
- 不影响开始影响完成



**变量声明提升** 
- 函数与变量提升到当前作用域顶部。赋值不提，名称提
- 函数声明会覆盖变量声明



**类和实例**
```javascript
//prototype, 编写复杂
function Mobile(name, price){
   this.name = name;
   this.price = price;
}
Mobile.prototype.sell = function(){
    alert(this.name + "，售价 $" + this.price);
}
var iPhone7 = new Mobile("iPhone7", 1000);
iPhone7.sell();
```

```javascript
//Object.create, 不支持私有属性/方法
var Person = {
   firstname: "Mark",
   lastname: "Yun",
   age: 25,
   introduce: function(){
       alert('I am ' + Person.firstname + ' ' + Person.lastname);
   }
};

var person = Object.create(Person);
person.introduce();

// Object.create 要求 IE9+，低版本浏览器可以自行部署：
if (!Object.create) {
　   Object.create = function (o) {
　　　 function F() {}
　　　 F.prototype = o;
　　　 return new F();
　　};
　}
```

```javascript
//对象+createNew()
var Cat = {
 age: 3, // 共享数据 -- 定义在类对象内，createNew() 外
 createNew: function () {
   var cat = {};
   // var cat = Animal.createNew(); // 继承 Animal 类
   cat.name = "小咪";
   var sound = "喵喵喵"; // 私有属性--定义在 createNew() 内，输出对象外
   cat.makeSound = function () {
     alert(sound);  // 暴露私有属性
   };
   cat.changeAge = function(num){
     Cat.age = num; // 修改共享数据
   };
   return cat; // 输出对象
 }
};

var cat = Cat.createNew();
cat.makeSound();
```
  
```javascript
//语法糖class new
class Point {
  constructor(x, y) {
   this.x = x;
   this.y = y;
  }
  toString() {
   return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);
```



**Javascript如何实现继承？**
```javascript 
//call/apply  　
function Cat(name,color){
 　Animal.apply(this, arguments);
 　this.name = name;
 　this.color = color;
}

//prototype
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; 

//拷贝       　　
function extend(Child, Parent) {
　　　var p = Parent.prototype;
　　　var c = Child.prototype;
　　　for (var i in p) {
　　　   c[i] = p[i];
　　　}
　　　c.uber = p;
} 

//extends
class ColorPoint extends Point {
   constructor(x, y, color) {
      super(x, y); // 调用父类的constructor(x, y)
      this.color = color;
   }
   toString() {
      return this.color + ' ' + super.toString(); // 调用父类的toString()
   }
}
```



**Window对象 Document对象**
- Window是顶级对象。所有对象、函数、变量都是 Window成员。
- Document是Window一部分，window.document



**介绍 DOM 的发展**
- DOM：文档对象模型（Document Object Model），定义了访问HTML和XML文档的标准，与编程语言及平台无关
- DOM0：提供了查询和操作Web文档的内容API。未形成标准，实现混乱。如：document.forms['login']
- DOM1：W3C提出标准化的DOM，简化了对文档中任意部分的访问和操作。如：JavaScript中的Document对象
- DOM2：原来DOM基础上扩充了鼠标事件等细分模块，增加了对CSS的支持。如：getComputedStyle(elem, pseudo)
- DOM3：增加了XPath模块和加载与保存（Load and Save）模块。如：XPathEvaluator



**介绍DOM0，DOM2，DOM3事件处理方式区别**

- DOM0级事件处理方式：
    - `btn.onclick = func;`
    - `btn.onclick = null;`
- DOM2级事件处理方式：
    - `btn.addEventListener('click', func, false);`
    - `btn.removeEventListener('click', func, false);`
    - `btn.attachEvent("onclick", func);`
    - `btn.detachEvent("onclick", func);`
- DOM3级事件处理方式：
    - `eventUtil.addListener(input, "textInput", func);`
    -  `eventUtil` 是自定义对象，`textInput` 是DOM3级事件



**事件三阶段**
- 捕获目标冒泡



**介绍事件“捕获”和“冒泡”执行顺序和事件的执行次数？**
- 按照W3C标准的事件：捕获，目标，冒泡
- 事件执行次数（DOM2-addEventListener）：元素上绑定事件的个数
  - 注意1：前提是事件被确实触发
  - 注意2：事件绑定几次就算几个事件，即使类型和功能完全一样也不会“覆盖”
- 事件执行顺序：判断的关键是否目标元素
  - 非目标元素：根据W3C的标准执行：捕获->目标元素->冒泡（不依据事件绑定顺序）
  - 目标元素：依据事件绑定顺序：先绑定的事件先执行（不依据捕获冒泡标准）
  - 最终顺序：父元素捕获->目标元素事件1->目标元素事件2->子元素捕获->子元素冒泡->父元素冒泡
  - 注意：子元素事件执行前提    事件确实“落”到子元素布局区域上，而不是简单的具有嵌套关系



**在一个DOM上同时绑定两个点击事件：一个用捕获，一个用冒泡。事件会执行几次，先执行冒泡还是捕获？**
* 该DOM上的事件如果被触发，会执行两次（执行次数等于绑定次数）
* 如果该DOM是目标元素，则按事件绑定顺序执行，不区分冒泡/捕获
* 如果该DOM是处于事件流中的非目标元素，则先执行捕获，后执行冒泡




**事件代理/委托**
* 事件绑定父元素，冒泡触发，减少注册，节省内存
```
ulEl.addEventListener('click', function(e){
    var target = event.target || event.srcElement;
    if(!!target && target.nodeName.toUpperCase() === "LI"){
        console.log(target.innerHTML);
    }
}, false);
```



**事件机制: IE vs 火狐**
- IE冒泡；火狐捕获冒泡



**事件处理: IE vs W3C**

* 绑定事件
  - W3C: addEventListener('click', handler, false);
  - IE: attachEvent('onclick', handler);

* 删除事件
  - W3C: removeEventListener('click', handler, false);
  - IE: detachEvent(event, handler);

* 事件对象
  - W3C: var e = arguments.callee.caller.arguments[0]
  - IE: var e = window.event

* 事件目标
  - W3C: e.target
  - IE: window.event.srcElement

* 阻止事件默认行为
  - W3C: window.event.cancelBubble = true
  - IE: window.event.returnValue = false

* 阻止事件传播
  - W3C: e.stopPropagation()
  - IE: window.event




**W3C事件的 target 与 currentTarget 的区别？**
* target 只会出现在事件流的目标阶段
* currentTarget 可能出现在事件流的任何阶段
* 当事件流处在目标阶段时，二者的指向相同
* 当事件流处于捕获或冒泡阶段时：currentTarget 指向当前事件活动的对象(一般为父级)



**事件广播**
* W3C: 使用 dispatchEvent 方法
* IE: 使用 fireEvent 方法
```javascript
var fireEvent = function(element, event){
    if (document.createEventObject){
        var mockEvent = document.createEventObject();
        return element.fireEvent('on' + event, mockEvent)
    }else{
        var mockEvent = document.createEvent('HTMLEvents');
        mockEvent.initEvent(event, true, true);
        return !element.dispatchEvent(mockEvent);
    }
}
```



**函数节流**
```javascript
//常用于onresize onscoll
function throttle(method, context) {
     clearTimeout(methor.tId);
     method.tId = setTimeout(function(){
         method.call(context);
     }， 100); // 两次调用至少间隔 100ms
}
// 调用
window.onresize = function(){
    throttle(myFunc, window);
}
```



**客户区坐标 页面坐标 屏幕坐标**
* 客户区坐标：鼠标指针在可视区中的水平坐标(clientX)和垂直坐标(clientY)
* 页面坐标：鼠标指针在页面布局中的水平坐标(pageX)和垂直坐标(pageY)
* 屏幕坐标：设备物理屏幕的水平坐标(screenX)和垂直坐标(screenY)



**如何获得一个DOM元素的绝对位置？**

* elem.offsetLeft：返回元素相对于其定位父级左侧的距离
* elem.offsetTop：返回元素相对于其定位父级顶部的距离
* elem.getBoundingClientRect()：返回一个DOMRect对象，包含一组描述边框的只读属性，单位像素

** ['1', '2', '3'].map(parseInt)？**

- [1, NaN, NaN]
* parseInt(string, radix) 第2个参数 radix 表示进制。radix =0||undefined，十进制解析

**new 操作符具体干了什么？**

- 创建实例对象，this 变量引用该对象，同时还继承了构造函数的原型
- 属性和方法被加入到 this 引用的对象中
- 新创建的对象由 this 所引用，并且最后隐式的返回 this
        
**用原生JavaScript的实现过什么功能吗？**

- 封装选择器、调用第三方API、设置和获取样式

**解释一下这段代码的意思吗？**

```javascript
  [].forEach.call($$("*"), function(el){
      el.style.outline = "1px solid #" + (~~(Math.random()*(1<<24))).toString(16);
  })
 ```
- 解释：获取页面所有的元素，遍历这些元素，为它们添加1像素随机颜色的轮廓(outline)
- 1. `$$(sel)` // $$函数被许多现代浏览器命令行支持，等价于 document.querySelectorAll(sel)
- 2. `[].forEach.call(NodeLists)` // 使用 call 函数将数组遍历函数 forEach 应到节点元素列表
- 3. `el.style.outline = "1px solid #333"` // 样式 outline 位于盒模型之外，不影响元素布局位置
- 4. `(1<<24)` // parseInt("ffffff", 16) == 16777215 == 2^24 - 1 // 1<<24 == 2^24 == 16777216
- 5. `Math.random()*(1<<24)` // 表示一个位于 0 到 16777216 之间的随机浮点数
- 6. `~~Math.random()*(1<<24)` // `~~` 作用相当于 parseInt 取整
- 7. `(~~(Math.random()*(1<<24))).toString(16)` // 转换为一个十六进制- 


** JavaScript实现异步编程的方法？**

* 回调函数
* 事件监听
* 发布/订阅
* Promises对象
* Async函数[ES7]

**web开发中会话跟踪的方法有哪些**

- cookie
- session
- url重写
- 隐藏input
- ip地址

**介绍js的基本数据类型**

- Undefined、Null、Boolean、Number、String

**介绍js有哪些内置对象？**

- Object 是 JavaScript 中所有对象的父对象
- 数据封装类对象：Object、Array、Boolean、Number 和 String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error





**说几条写JavaScript的基本规范？**

- 不要在同一行声明多个变量
- 请使用 ===/!==来比较true/false或者数值
- 使用对象字面量替代new Array这种形式
- 不要使用全局函数
- Switch语句必须带有default分支
- 函数不应该有时候有返回值，有时候没有返回值
- If语句必须使用大括号
- for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污

**JavaScript原型，原型链 ? 有什么特点？**

- 每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时
- 如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，于是就这样一直找下去，也就是我们平时所说的原型链的概念
- 关系：`instance.constructor.prototype = instance.__proto__`
- 特点：
  - JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
  
-  当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的
-  就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象

**JavaScript有几种类型的值？，你能画一下他们的内存图吗？**

- 栈：原始数据类型（Undefined，Null，Boolean，Number、String） 
- 堆：引用数据类型（对象、数组和函数）

- 两种类型的区别是：存储位置不同；
- 原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其
- 在栈中的地址，取得地址后从堆中获得实体

![](https://camo.githubusercontent.com/d1947e624a0444d1032a85800013df487adc5550/687474703a2f2f7777772e77337363686f6f6c2e636f6d2e636e2f692f63745f6a735f76616c75652e676966)

**Javascript如何实现继承？**

- 构造继承
- 原型继承
- 实例继承
- 拷贝继承

- 原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式

```
 function Parent(){
        this.name = 'wang';
    }

    function Child(){
        this.age = 28;
    }
    Child.prototype = new Parent();//继承了Parent，通过原型

    var demo = new Child();
    alert(demo.age);
    alert(demo.name);//得到被继承的属性
  }
```

**javascript创建对象的几种方式？**

> javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用

- 对象字面量的方式

```
person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};
```

- 用function来模拟无参的构造函数

```
 function Person(){}
    var person=new Person();//定义一个function，如果使用new"实例化",该function可以看作是一个Class
        person.name="Mark";
        person.age="25";
        person.work=function(){
        alert(person.name+" hello...");
    }
person.work();
```

- 用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）

```
function Pet(name,age,hobby){
       this.name=name;//this作用域：当前对象
       this.age=age;
       this.hobby=hobby;
       this.eat=function(){
          alert("我叫"+this.name+",我喜欢"+this.hobby+",是个程序员");
       }
    }
    var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
    maidou.eat();//调用eat方法
```

- 用工厂方式来创建（内置对象）

```
var wcDog =new Object();
     wcDog.name="旺财";
     wcDog.age=3;
     wcDog.work=function(){
       alert("我是"+wcDog.name+",汪汪汪......");
     }
     wcDog.work();
```

- 用原型方式来创建

```
function Dog(){

     }
     Dog.prototype.name="旺财";
     Dog.prototype.eat=function(){
     alert(this.name+"是个吃货");
     }
     var wangcai =new Dog();
     wangcai.eat();

```

- 用混合方式来创建

```
 function Car(name,price){
      this.name=name;
      this.price=price; 
    }
     Car.prototype.sell=function(){
       alert("我是"+this.name+"，我现在卖"+this.price+"万元");
      }
    var camry =new Car("凯美瑞",27);
    camry.sell(); 
```

**Javascript作用链域?**

- 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节
- 当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找
- 直至全局函数，这种组织形式就是作用域链

**谈谈This对象的理解**

- this总是指向函数的直接调用者（而非间接调用者）
- 如果有new关键字，this指向new出来的那个对象
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window


**eval是做什么的？**

- 它的功能是把对应的字符串解析成JS代码并运行
- 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）
- 由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')')

**null，undefined 的区别？**

- undefined   表示不存在这个值。
- undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined
- 例如变量被声明了，但没有赋值时，就等于undefined

- null 表示一个对象被定义了，值为“空值”
- null : 是一个对象(空对象, 没有任何属性和方法)
- 例如作为函数的参数，表示该函数的参数不是对象；

-  在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined

**写一个通用的事件侦听器函数**

```
 // event(事件)工具集，来源：github.com/markyun
    markyun.Event = {
        // 页面加载完成后
        readyEvent : function(fn) {
            if (fn==null) {
                fn=document;
            }
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = fn;
            } else {
                window.onload = function() {
                    oldonload();
                    fn();
                };
            }
        },
        // 视能力分别使用dom0||dom2||IE方式 来绑定事件
        // 参数： 操作的元素,事件名称 ,事件处理程序
        addEvent : function(element, type, handler) {
            if (element.addEventListener) {
                //事件类型、需要执行的函数、是否捕捉
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, function() {
                    handler.call(element);
                });
            } else {
                element['on' + type] = handler;
            }
        },
        // 移除事件
        removeEvent : function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.datachEvent) {
                element.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        },
        // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
        stopPropagation : function(ev) {
            if (ev.stopPropagation) {
                ev.stopPropagation();
            } else {
                ev.cancelBubble = true;
            }
        },
        // 取消事件的默认行为
        preventDefault : function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        // 获取事件目标
        getTarget : function(event) {
            return event.target || event.srcElement;
        },
        // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
        getEvent : function(e) {
            var ev = e || window.event;
            if (!ev) {
                var c = this.getEvent.caller;
                while (c) {
                    ev = c.arguments[0];
                    if (ev && Event == ev.constructor) {
                        break;
                    }
                    c = c.caller;
                }
            }
            return ev;
        }
    };
```

**["1", "2", "3"].map(parseInt) 答案是多少？**

-  [1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，其中 radix 表示解析时用的基数。
-  map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

**事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？**

- 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为
- 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件
- ev.stopPropagation();（旧ie的方法 ev.cancelBubble = true;）

**什么是闭包（closure），为什么要用它？**

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

- 闭包的特性：
  - 函数内再嵌套函数
  - 内部函数可以引用外层的参数和变量
  - 参数和变量不会被垃圾回收机制回收
  
**javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？**

- use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为

**如何判断一个对象是否属于某个类？**

```
// 使用instanceof （待完善）
   if(a instanceof Person){
       alert('yes');
   }
```

**new操作符具体干了什么呢?**

- 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型
- 属性和方法被加入到 this 引用的对象中
- 新创建的对象由 this 所引用，并且最后隐式的返回 this

```
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```



**js延迟加载的方式有哪些？**

- defer和async、动态创建DOM方式（用得最多）、按需异步载入js

**Ajax 是什么? 如何创建一个Ajax？**

> ajax的全称：Asynchronous Javascript And XML

- 异步传输+js+xml
- 所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验

- 创建XMLHttpRequest对象,也就是创建一个异步调用对象
- 建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
- 设置响应HTTP请求状态变化的函数
- 发送HTTP请求
- 获取异步调用返回的数据
- 用JavaScript和DOM实现局部刷新

**同步和异步的区别?**

- 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作
- 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容



**异步加载JS的方式有哪些？**

- defer，只支持IE
- async：
- 创建script，插入到DOM中，加载完毕后callBack


**documen.write和 innerHTML的区别**

- document.write只能重绘整个页面
- innerHTML可以重绘页面的一部分


**DOM操作——怎样添加、移除、移动、复制、创建和查找节点?**

- （1）创建新节点
  - createDocumentFragment() //创建一个DOM片段
  - createElement()   //创建一个具体的元素
  - createTextNode()   //创建一个文本节点
- （2）添加、移除、替换、插入
  - appendChild()
  - removeChild()
  - replaceChild()
  - insertBefore() //在已有的子节点前插入一个新的子节点
- （3）查找
  - getElementsByTagName()    //通过标签名称
  - getElementsByName()    // 通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
  - getElementById()    //通过元素Id，唯一性

**那些操作会造成内存泄漏？**

- 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
- 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收
- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
- 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）


  

**渐进增强和优雅降级**

- 渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

- 优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容




**Javascript垃圾回收方法**

- 标记清除（mark and sweep）

> - 这是JavaScript最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”
> - 垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了

**引用计数(reference counting)**

> 在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间

**js继承方式及其优缺点**

- 原型链继承的缺点
  - 一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。
  
- 借用构造函数（类式继承）
  - 借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承
  
- 组合式继承
  - 组合式继承是比较常用的一种继承方法，其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

**defer和async**

- defer并行加载js文件，会按照页面上script标签的顺序执行async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行

**用过哪些设计模式？**

- 工厂模式：
  - 主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复
  - 工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，因为根本无法 搞清楚他们到底是哪个对象的实例
  -
```
function createObject(name,age,profession){//集中实例化的函数var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.profession = profession;
    obj.move = function () {
        return this.name + ' at ' + this.age + ' engaged in ' + this.profession;
    };
    return obj;
}
var test1 = createObject('trigkit4',22,'programmer');//第一个实例var test2 = createObject('mike',25,'engineer');//第二个实例

```

- 构造函数模式
  - 使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题，该模式与工厂模式的不同之处在于
  
- 构造函数方法没有显示的创建对象 (new Object());

- 直接将属性和方法赋值给 this 对象;

- 没有 renturn 语句

**说说你对闭包的理解**

- 使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念

- 闭包有三个特性：
  - 1.函数嵌套函数

  - 2.函数内部可以引用外部的参数和变量

  - 3.参数和变量不会被垃圾回收机制回收
  


**请解释一下 JavaScript 的同源策略**

- 概念:同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议
- 指一段脚本只能读取来自同一来源的窗口和文档的属性

**为什么要有同源限制？**

- 我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。
- 缺点
  - 现在网站的JS都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节
  
**函数clone进行值复制**
```
Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}
    
```


**严格模式**
  - 变量声明后使用
  - 函数参数不能同名
  - no with 
  - 只读属性赋值报错 
  - 前缀0表示八进制报错
  - 删除不可删除的属性报错
  - delete prop报错
  - eval不会在它的外层作用域引入变量
  - eval和arguments不能被重新赋值
  - arguments不会自动反映函数参数的变化
  - 不能使用arguments.callee
  - 不能使用arguments.caller
  - 禁止this指向全局对象
  - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
  - 增加保留字（protected static interface）
  

**删除cookie**
```
  document.cookie = 'user='+ encodeURIComponent('name')  + ';expires = ' + new Date(0)
```


**求字符串字节长度**
 
```
function getBytes(str){ 
    var bytes = str.length;
    for(var i=0; i<str.length; i++){
        if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
}
getBytes("你好,as")

```


**事件代理**
- DOM元素事件冒泡。提高性能


**attribute和property区别**
- attribute是dom元素属性
- property是dom元素js属性


**页面编码和资源编码不一致如何处理？**
 * 后端响应头设置 charset 
 * 前端页面`<meta>`设置 charset

 

**延迟加载JS**
* `<script defer="defer">`
* document.createElement('script')
* XmlHttpRequest 脚本注入
* 延迟加载工具 LazyLoad


**异步加载JS**
* `<script async="async">`
* document.createElement('script')
* XmlHttpRequest 脚本注入
* 异步加载库 LABjs
* 模块加载器 Sea.js


**调用函数方式**
* Foo.foo(arg1, arg2)
* foo(arg1, arg2)
* (new Foo())(arg1, arg2)
* Foo.foo.call(that, arg1, arg2)
* Foo.foo.bind(that)(arg1, arg2)()


**Function.bind**

```javascript
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(that) {
      var func = this, args = arguments;
      return function() {
        return func.apply(that, Array.prototype.slice.call(args, 1));
      }
    }
  }
  // 只支持 bind 阶段的默认参数：
  func.bind(that, arg1, arg2)();

  // 不支持以下调用阶段传入的参数：
  func.bind(that)(arg1, arg2);
```

**数组和对象原生方法**

* 数组：
    - arr.concat(arr1, arr2, arrn);
    - arr.join(",");
    - arr.sort(func);
    - arr.pop();
    - arr.push(e1, e2, en);
    - arr.shift();
    - arr.unshift(e1, e2, en);
    - arr.reverse();
    - arr.slice(start, end);            
    - arr.splice(index, count, e1, e2, en);  
    - arr.indexOf(el);
    - arr.includes(el);   // ES6

* 对象：
    -  object.hasOwnProperty(prop);     
    -  object.propertyIsEnumerable(prop);
    -  object.valueOf();                 
    -  object.toString();                
    -  object.toLocaleString();          
    -  Class.prototype.isPropertyOf(object);  
  

**Array.splice Array.slice**
- arr.slice(start, end) 
- arr.splice(index, count, [insert Elements]) 
   

**JavaScript 对象生命周期**
* 分配适当内存
* 垃圾回收器定期扫描计算引用数
* 引用0或惟一引用是循环即回收


**内存泄漏**
- 非var全局变量
- 闭包函数
- 循环引用
- console.log
- 移除带事件DOM


**setTimeout模拟setInterval,实现mySetInterval**

```
function mySetInterval(method, ms){
  method.id = setTimeout(function(){
    method() 
    mySetInterval(method, ms)
  }, ms)
} 
function method(){
  console.log('aaa')
}
mySetInterval(method, 1000)
setTimeout('clearTimeout(method.id)', 10000)

```



**模块化开发**
```
var module1 = (function(){
    var _count = 0;
    var m1 = function(){
        //...
    };
    return {
        m1 : m1
    };
})();
```


**AMD（Asynchronous Modules Definition）vs CMD（Common Module Definition）**
- CMD，同步加载模块，加载完才执行后面，SeaJS
- AMD, 异步加载模块，不影响后面执行，回调函数中使用依赖，RequireJS
- AMD返回对象，CMD返回module.exports/exports


**AMD VS CMD**
```
// CMD
define(function(require, exports, module) {
    var a = require('./a')
    a.doSomething()
})

// AMD
define(['./a', './b'], function(a, b) {
    a.doSomething()
})
```

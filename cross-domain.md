### 如何解决跨域问题
---


**JSONP：**

- 原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入
- 由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求
- 优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求

- JSONP：json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里

```
<script>
    function createJs(sUrl){

        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = sUrl;
        document.getElementsByTagName('head')[0].appendChild(oScript);
    }

    createJs('jsonp.js');

    box({
       'name': 'test'
    });

    function box(json){
        alert(json.name);
    }
</script>
```

**CORS**

- 服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问


**通过修改document.domain来跨子域**

- 将子域和主域的document.domain设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用document.domain进行跨域。主域相同的使用document.domain

**使用window.name来进行跨域**

- window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的

**使用HTML5中新引进的window.postMessage方法来跨域传送数据**

- 还有flash、在服务器上设置代理页面等跨域方式。个人认为window.name的方法既不复杂，也能兼容到几乎所有浏览器，这真是极好的一种跨域方法


**如何解决跨域问题?**

- jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

- 如何解决跨域问题?

  * document.domain + iframe：要求主域名相同 //只能跨子域
  * JSONP(JSON with Padding)：response: callback(data) //只支持 GET 请求
  * 跨域资源共享CORS(XHR2)：Access-Control-Allow //兼容性 IE10+
  * 跨文档消息传输(HTML5)：postMessage + onmessage  //兼容性 IE8+
  * WebSocket(HTML5)：new WebSocket(url) + onmessage //兼容性 IE10+
  * 服务器端设置代理请求：服务器端不受同源策略限制
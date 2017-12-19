
### HTML
---

**语义化**

- 语义标签,有意义的class 
  - 去掉样式后页面呈现清晰的结构
  - 盲人使用读屏器更好地阅读
  - 搜索引擎更好地理解页面，有利于收录
  - 便团队项目的可持续运作及维护

**简述一下你对HTML语义化的理解？**
- 用正确的标签做正确的事情。
- html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

**Doctype作用？标准模式与兼容模式各有什么区别?**

- `<!DOCTYPE>`声明位于位`于HTML`文档中的第一行，处于 `<html>` 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。`DOCTYPE`不存在或格式不正确会导致文档以兼容模式呈现
- 标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作

**HTML5 为什么只需要写 <!DOCTYPE HTML>？**

- HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）
-  而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型

**行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？**

- 行内：`a b span img input select strong`
- 块级：`div ul(无序) ol(有序) li dl dt dd h1 h2 h3 h4…p`
- 空:` <br> <hr> <img> <input> <link> <meta>`

**导入样式,link和@import区别？**

- `link`能加载`CSS`，定义`RSS`,`rel`连接；`@import`只能加载`CSS`
- 页面加载link`同时加载，`@import`等页面加载完再加载
- `import`有兼容问题

**介绍一下你对浏览器内核的理解？**

- 渲染引擎(`layout engineer`或`Rendering Engine`)和`JS`引擎

**浏览器内核**

- Gecko：Firefox
- Trident：IE,360,搜狗
- Presto,Blink：Opera
- Webkit：Safari,Chrome

**html5新特性
  - canvas
  - video audio 
  - localStorage
  - sessionStorage
  - article、footer、header、nav、section
  - calendar、date、time、email、url、search
  - webworker, websocket, geolocation
  
-  移除：
  - basefont，big，center，font, s，strike，tt，u
  - frame，frameset，noframes
  
- 支持HTML5新标签：
  - document.createElement,添加标签默认样式
  - html5.js

```
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com
/svn/trunk/html5.js"</script><![endif]-->
```


**HTML5的离线储存**

- 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件

- 原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，
通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。
之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

- 如何使用：
  - 页面头部像下面一样加入一个manifest的属性；
  - 在cache.manifest文件的编写离线存储的资源
  - 在离线状态时，操作window.applicationCache进行需求实现
```
CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
```

**浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？**

- 在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

- 离线的情况下，浏览器就直接使用离线存储的资源。

**cookies sessionStorage localStorage 的区别**

- cookie同源的http请求中携带
- `sessionStorage`和`localStorage`不发给服务器 
- `cookie`<=4k，`sessionStorage`和`localStorage`<=5M
- `localStorage` 浏览器关闭后不丢
- `sessionStorage`  浏览器关闭后自动删除
- `cookie`  过期时间后删除
  
**iframe缺点**

- 阻塞主页面onload
- 不利于SEO
- 影响页面并行加载
- js动态添加`src`属性可绕开以上问题

**Label作用**

- 选择该标签浏览器自动聚焦标签相关的表单控件

**HTML5关闭自动完成**

- autocomplete=off

**标签页之间通信(阿里)**

- WebSocket SharedWorker localstorge cookies
 
**webSocket兼容低浏览器(阿里)**

- Adobe Flash Socket 
- ActiveX HTMLFile (IE) 
- multipart XHR 
- 长轮询XHR

**页面可见性（Page Visibility API） 可以有哪些用途？**

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放

**如何在页面上实现一个圆形的可点击区域？**

- map+area或者svg
- border-radius
- 纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

**no border 1px line**

```
<div style="height:1px;overflow:hidden;background:red"></div>
```

**网页验证码是干嘛的，是为了解决什么安全问题**

- 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
- 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试

**title与h1的区别、b与strong的区别、i与em的区别？**

- `title`属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响
- `strong`是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容
- i内容展示为斜体，em表示强调的文本



 

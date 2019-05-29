
### HTML
---


**document.ready > window.onload**
```
window.onload = () => console.log('window onload');
document.addEventListener('DOMContentLoaded',
    () => console.log('dom content load'));
document.ready === undefined
```



**viewport**
```
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1,
    maximum-scale=1, user-scalable=no" />
```


**meta**
```
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0
    user-scalable=no">
<meta name="description" content="main page contents......">
<meta name="apple-mobile-web-app-title" content="简书">
<meta name="apple-itunes-app" content="app-id=888237539, app-argument=jianshu://notes/7465335">
<meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="0AqWuDgTpyNDTUextqfWGp+r5z3SUz4v2Q896eYX0DpzLepgfgltLkwjHftTTqUaHgyE2ZXl44I7u64xlAK0fQ==">


```



**语义化**
- 语义化标签和class 
  - 无样式后结构清晰
  - 读屏器好读
  - 可维护
  - seo 


**Doctype**
```
<!DOCTYPE html>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

**H5只写` <!DOCTYPE HTML>`**
- 不基于 SGML，不引用DTD


**行内块级空元素**
- 行内：`a b span img input select strong`
- 块级：`div ul(无序) ol(有序) li dl dt dd h1 h2 h3 h4…p`
- 空:` <br> <hr> <img> <input> <link> <meta>`


**link和@import区别**
- `link`能加载`CSS`，定义`RSS`,`rel`连接；`@import`只能加载`CSS`
- `link`同时加载，`@import`最后加载
- `import`有兼容问题


**浏览器内核**
- `Layout Engine`+`Rendering Engine`+`JS Engine` 
- Gecko：Firefox
- Trident：IE,360,搜狗
- Presto,Blink：Opera
- Webkit：Safari,Chrome


**h5新特性**
- canvas
- video audio 
- localStorage sessionStorage
- article、footer、header、nav、section
- calendar、date、time、email、url、search
- webworker, websocket, geolocation
  

**h5移除**
- basefont，big，center，font, s，strike，tt，u
- frame，frameset，noframes
  

**支持H5新标签**
- document.createElement,添加标签默认样式
- html5.js
```
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```


**H5离线储存** 
```
//cache.manifest
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


**cookies sessionStorage localStorage 区别**
- cookie随同源http传递，`sessionStorage`和`localStorage`不传递 
- `cookie`<=4k，`sessionStorage`和`localStorage`<=5M
- `localStorage` 浏览器关闭后不丢，`sessionStorage`  浏览器关闭后自动删除，`cookie`  过期时间后删除
  

**iframe缺点**
- 阻塞主页面onload
- 不利于SEO
- 影响页面并行加载
- js动态添加`src`属性可绕开以上问题


**Label作用**
- 自动聚焦表单控件


**H5关闭自动完成**
- autocomplete=off


**标签页通信(阿里)**
- WebSocket SharedWorker localstorge cookies
 

**webSocket兼容低浏览器(阿里)**
- Adobe Flash Socket 
- ActiveX HTMLFile (IE) 
- multipart XHR 
- 长轮询XHR


**Page Visibility API**
- visibilityState可检测页面可见，打开时间, 暂停音乐


**圆形可点击区域**
- svg
- border-radius


**no border 1px line**
```
<div style="height:1px;overflow:hidden;background:red"></div>
```


**网页验证码**
- 防暴力破解、刷票、灌水


**title与h1、b与strong、i与em**
- `title`无明确意义，h1有明确层次
- `strong`标重点会重读，`b`只强调
- i斜体，em强调



 

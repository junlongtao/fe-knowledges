**JSONP：**
- 兼容，简单易用，双向通信。只支持GET



**CORS**
```
//IE10+
add_header Access-Control-Allow-Origin http://wx.zp.zhichou.com;
add_header Access-Control-Allow-Headers X-Requested-With;
add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
add_header Access-Control-Allow-Credentials true;
```


**document.domain跨子域**
- 子主域document.domain设同一主域



**window.name**
- 每个页面对window.name都有读写权限



**H5 window.postMessage**
- IE8+


**H5 websocket**
- IE10+


**flash、服务器代理**
- 并发低

 
**http状态码**

```  
  100  Continue   
  200  OK         正常返回信息
  201  Created    请求成功并且服务器创建了新的资源
  202  Accepted   服务器已接受请求，但尚未处理

  301  Moved Permanently  请求的网页已永久移动到新位置。
  302  Found       临时性重定向。
  303  See Other   临时性重定向，且总是使用 GET 请求新的 URI。
  304  Not Modified 自从上次请求后，请求的网页未修改过。

  400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
  401 Unauthorized 请求未授权。
  403 Forbidden   禁止访问。
  404 Not Found   找不到如何与 URI 相匹配的资源。

  500 Internal Server Error  最常见的服务器端错误。
  503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。 
```


**页面加载流程**
  - 开线程判断是否http
  - 调用WebView loadUrl
  - DNS解析IP，设置UA
  - 发送请求报头
  - 进入Server
  - 进入PHP
  - 回馈报头，对比修改时间返回304
  - 下载html，使用缓存
  - 文档树建立，请求css、js,设置cookie
  - 渲染DOM，JS操作DOM,绑定事件，显示完成


**TCP三次握手**
- 发送SYN数据包。回传SYN/ACK数据包。回传ACK数据包


**TCP四次挥手**
- 主动方发送FIN
- 被动方回传ACK
- 被动方发送FIN
- 主动方回传ACK


**TCP UDP区别**
- TCP基于连接,可靠,要三次对话才建立
- UDP面向非连接,适用可靠性要求不高的一次少量数据



**HTTP HTTPS**
- HTTP基于TCP，https=http+ssl
- HTTP80，HTTPS443


**HTTPS安全**
- HTTPS用ssl/tls传输。包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障传输过程安全


**Http 2.0**
- server push到客户端缓存
- 更多的加密支持
- 使用多路技术，允许多消息同时交差
- header compression，占用带宽小


**GET和POST的区别，何时使用POST？**
- GET：URL传参，<=2000字符,POST：没有限制
   

**网络七层模型** 

  - 物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）
  - 数据链路层：将比特组装成帧和点到点的传递（帧Frame）

  - 网络层IP：负责数据包从源到宿的传递和网际互连（包PackeT）

  - 传输层TCP UDP：提供端到端的可靠报文传递和错误恢复（段Segment）

  - 会话层：建立、管理和终止会话（会话协议数据单元SPDU）
  - 表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）
  - 应用层DNS FTP Email Telnet HTTP：允许访问OSI环境的手段（应用协议数据单元APDU）
  

**304缓存原理**
- 请求页面A =》返回页面A+ETag并缓存 =》再请求页面A，并传递ETag =》检查ETag，返回304


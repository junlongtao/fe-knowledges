**web安全**

```
//sql注入
fetch("http://api.xxx.com/user/detail?id=123'or''='")

//xss = cross site scripting








<input type="text" value="" onfocus="alert(document.cookie)"/>
<input type="text" value=""/><script>alert(document.cookie)</script><!--"/>


//csrf = cross site request forgery





```
  
- 总的来说有以下几点
  - 永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等
  - 永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取
  - 永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接
  - 不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息
  



**XSS防范方法**

- 首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击

**XSS与CSRF有什么区别吗？**

- XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。要完成一次CSRF攻击，受害者必须依次完成两个步骤

- 登录受信任网站A，并在本地生成Cookie
- 在不登出A的情况下，访问危险网站B

**CSRF的防御**

- 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数
- 通过验证码的方法

**是否了解 Web 注入攻击（最常见 XSS 和 CSRF）？**

* SQL注入
  - 把SQL命令插入到表单或输入URL查询字符串提交，欺骗服务器达到执行恶意的SQL目的

* XSS(Cross Site Script)，跨站脚本攻击
  - 攻击者在页面里插入恶意代码，当用户浏览该页之时，执行嵌入的恶意代码达到攻击目的

* CSRF(Cross Site Request Forgery)，跨站点伪造请求
  - 伪造合法请求，让用户在不知情的情况下以登录的身份访问，利用用户信任达到攻击目的
  
**防范攻击**
- 检查过滤输入
- CORS，Access-Control-Allow-Origin
- Cookie为HttpOnly
- X-Frame-Options 防内嵌
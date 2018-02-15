**web攻击**
```
//sql注入
fetch("http://api.xxx.com/user/detail?id=123'or''='")

//xss = cross site scripting
<input type="text" value="" onfocus="alert(document.cookie)"/>
<input type="text" value=""/><script>alert(document.cookie)</script><!--"/>

//csrf = cross site request forgery
```


**安全意识**
  - 限长，单引号和双"-"进行转换
  - 参数化SQL
  - 使用单独权限有限的数据库连接
  - 不把机密信息明文存放
  


**防XSS**
- encode，避免html tag



**防CSRF**
- 客户端伪随机数
- 验证码


  
**防范攻击**
- 检查过滤输入
- Access-Control-Allow-Origin
- Cookie HttpOnly
- X-Frame-Options 防内嵌
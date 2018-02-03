**XML和JSON的区别？**
- JSON小，带宽少，速度快，解析方便，描述性差
- XML描述性好

- JSON字符串 <-> JSON对象
```
var obj =eval('('+ str +')');
var obj = str.parseJSON();
var obj = JSON.parse(str);

var str = obj.toJSONString();
var str = JSON.stringify(obj);
```
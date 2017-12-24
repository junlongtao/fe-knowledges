
**ajax**
```

function ajax(url, type, data, fn){
	var xhr = new XMLHttpRequest();
	xhr.open(type, url, true);
	xhr.withCredentials = true;
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function(){ 
		if(xhr.readyState==4 && (xhr.status==200||xhr.status==304)){
			fn.call(this, xhr.responseText)
		}
	}
	xhr.send(data)
}

ajax('https://apitest.zhichou.com/user/login?mobile=15001374270&password=000000', 'GET', null, function(res){
	console.log(res)
})

ajax('https://apitest.zhichou.com/user/update', 'POST', 'name=jkjkjkjjk', function(res){
	console.log(res)
})

ajax('https://apitest.zhichou.com/user/info', 'get', null, function(res){
	console.log(res)
})


```
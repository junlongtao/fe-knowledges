**生命周期函数**
//mounting
- conctructor(props, context) 
- void componentWillMount()
- render()
- void componentDidMount()
//updaing
- void componentWillReceiveProps(nextProps)
- bool shouldComponentUpdate(nextProps, nextState)
- void componentWillUpdate(nextProps, nextState)
- render()
- void componentDidUpdate(prevProps, prevState)
//unmounting
- void componentWillUnmount()
//error handling
- componentDidCatch(error, info)



**PureComponent**
- 用shallowEqual实现了shouldComponentUpdate的React.Component



**context**
```
//experimental api, do not use
import PropTypes from 'prop-types'
class Button extends React.Component{
	render () {
		return <button style={{background: this.context.color}}>
			{this.props.children}
		</button>
	}
}

Button.contextTypes = {
	color: PropTypes.string
}

//Message class ...

class MessageList extends React.Component{
	getChildContext () {
		return {color: 'purple'}
	}

	render () {
		return <div>
			{this.props.children.map((message)=>
				<Message text={message.text}/>
			)}
		</div>
	}
}
MessageList.childContextTypes = {
	color: PropTypes.string
}
```


**可以setState的时候**
- componentWillMount, componentDidMount, componentWillReceiveProps可以
- componentWillUpdate, componentDidUpdate, render不可以，不然循环调用



**组合 vs 继承**
- 不推荐继承



**setState**
```
this.setState({a: 1})//异步
this.setState((prevState, props)=>{
	counter: prevState.counter + props.increment
})
```

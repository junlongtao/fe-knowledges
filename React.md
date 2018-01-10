**React16新特性**
```
//可返回string number boolean null portal fragments
render() { 
	return [ 
    	<li key="A"/>First item</li>,
    	<li key="B"/>Second item</li>,
    	<li key="C"/>Third item</li>,
  	];
}

//error boundary
import React from 'react'
export default class ErrorBoundary extends React.Component{
	componentDidCatch = (err, info) => {
		this.setState({hasError: true})
	}

	render = () => {
		return this.state.hasError?<div>
			Something went wrong!
		</div>:this.props.children
	}
}
//error boundary使用方式
render = () => {
	return <ErrorBoundary>
		<Profile user={this.state.user}/>
	</ErrorBoundary>
}

//fiber 
基于window.requestIdleCallback
stack reconciler => fiber reconciler
线程时间分片，按优先级调用，优先响应输入和动画等
lifecycle hook顺序无法保证

//React.createClass/PropTypes/React.createFactory/React.DOM.* 单独分离成包

//createPortal
import React from 'react'
import {createPortal} from 'react-dom'
export default class Dialog extends React.Component{

	constructor = props => {
		super(props)
		this.el = document.createElement('div')
		document.body.appendChild(this.el)
	} 

	componentWillUnmount = () => {
		document.body.removeChild(this.el)
	}

	render = () => {
		return createPortal(
			<div class="dialog">
				{this.props.children}
			</div>,
			this.el
		)
	}
}  
```


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
- 推荐组合，不推荐继承



**setState**
```
this.setState({a: 1})//异步
this.setState((prevState, props)=>{
	counter: prevState.counter + props.increment
})
```

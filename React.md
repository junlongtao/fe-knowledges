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
- 

**context**

**组合 vs 继承**
- 不推荐继承


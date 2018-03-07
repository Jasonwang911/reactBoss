// react-redux 的简单实现


// // 正常的使用方法

// class APP extends React.Component{
// 	render() {
// 		return (
// 			<div></div>
// 		)
// 	}
// }

// App = connect(
// 	state => ({num: state}),
// 	{addGun, removeGun}
// )

// export default App;

import React from 'react'
import PropTypes from 'prop-types'
import {
	bindActionCreators
} from './woniu-redux'

// connect--一个函数（纯函数）--react中的高阶组件, 
// connect 负责链接组件，给到redux里的数据放到组件的属性里
// 1.接受一个组件，把state里的一些数据放进去，返回一个组件
// 2.数据变化的时候，组件内部进行一些订阅，能够通知组件

// connect的使用，connect有四个参数，第一个参数是一个映射,从state到组件props的映射mapstatetoprops 第二个是dispatch到props的一个映射
// state => state  等价于
// function (state) {
// 	return state;
// }
// 双层箭头函数： 写高阶组件的一个技巧
export const connect = (mapStateToProps, = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
	return class ConnectComponent extends React.Component {
		static contextTypes = {
			store: PropTypes.object
		}
		constructor(props, context) {
			super(props, context)
			this.state = {
				props: {}
			}
		}
		componentDidMount() {
			// 每次操作都更新方法和数据
			const {
				store
			} = this.context;
			store.subscribe(() => this.update());
			this.update();
		}

		update() {
			// 获取mapStateToProps和mapDispatchToProps的值放入this.props里
			const {
				store
			} = this.context;
			const stateProps = mapStateToProps(store.getState());
			// 方法不能直接给，需要dispatch
			// 直接执行 xxx()不可以，需要 xxx() = () =>store.dispath(xxx()) ,其实就是用dispatch把actionCreators包了一层
			const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
			this.setState({
				props: {
					...this.state.props,
					...stateProps,
					...dispatchProps
				}
			})
		}

		render() {
			return <WrapComponent {...this.state.props}></WrapComponent>
		}
	}
}
// export function connect(mapStateToProps,mapDispatchToProps) {
// 	return function (WrapComponent) {
// 		return class ConnectComponent extends React.Component {

// 		}
// 	}
// }

// Provider,把store放到context里，所有的子元素可以直接取到store
export class Provider extends React.Component {
	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext() {
		return {
			store: this.store
		}
	}

	constructor(props, context) {
		super(props, context);
		this.store = props.store
	}

	render() {
		// 只渲染子元素
		return this.props.children
	}
}
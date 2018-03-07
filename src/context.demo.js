import React from 'react'
import PropTypes from 'prop-types'

// props传递属性的缺点：每次传递都浪费性能，每个组件都要写一个专门的属性来传递参数

// context是全局的，组件里声明，所有子元素都可以直接获取

class Sidebar extends React.Component {
	render() {
		return (
			<div>
				<p>我是Sidebar</p>
				<Navbar></Navbar>
			</div>
		)
	}
}

class Navbar extends React.Component {
	static contextTypes = {
		user: PropTypes.string
	}
	render() {
		return (
			<div>
				<p>{this.context.user}导航栏</p>
			</div>
		)
	}
}

class Page extends React.Component {
	static childContextTypes = {
		user: PropTypes.string
	}
	constructor(props) {
		super(props);
		this.state = {
			user: 'jason'
		}
	}

	getChildContext() {
		return this.state;
	}
	render() {
		return (
			<div>
				<p>我是{this.state.user}</p>
				<Sidebar></Sidebar>

			</div>
		)
	}
}

export default Page;
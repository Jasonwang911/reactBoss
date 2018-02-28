import React from 'react';
import {
	connect
} from 'react-redux'
import {
	login
} from './Auth.redux.js'
import {
	Redirect
} from 'react-router-dom'
import {
	Button
} from 'antd-mobile';

// 包含多个reducers， 每个reducer都有一个state
@connect(
	state => state.auth, {
		login
	}
)

class Auth extends React.Component {
	render() {
		return (
			<div>
				{this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
				<h2>您没有权限，需要登陆才能继续</h2>
				<Button type='primary' onClick={this.props.login}>登陆</Button>
			</div>
		)
	}
}

export default Auth;
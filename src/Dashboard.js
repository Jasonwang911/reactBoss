import React from 'react';
import {
	Link,
	Route,
	Redirect
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import {
	logout
} from './Auth.redux.js'
import App from './App.js'
import {
	Button
} from 'antd-mobile';

function Erying() {
	return <h2>二营</h2>;
}

function Qibinglian() {
	return <h2>骑兵连</h2>;
}

// class Test extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		console.log(this.props)
// 		return <h3>404页面 {this.props.match.params.location}</h3>
// 	}
// }

@connect(
	state => state.auth, {
		logout
	}
)

class Dashboard extends React.Component {
	render() {
		const match = this.props.match;
		const redirectToLogin = <Redirect to='/login'></Redirect>;
		const app = (
			<div>
					<h1>独立团</h1>
					<h3>欢迎：{this.props.user}</h3>
					{this.props.isAuth ? <Button type='primary' onClick={this.props.logout}>注销</Button> : null}
					<ul>
						<li>
							<Link to={`${match.url}`}>一营</Link>
						</li>
						<li>
							<Link to={`${match.url}/erying`}>二营</Link>
						</li>
						<li>
							<Link to={`${match.url}/qibinglian`}>骑兵连</Link>
						</li>
					</ul>
					<Route path={`${match.url}`} exact component={App}></Route>
					<Route path={`${match.url}/erying`} component={Erying}></Route>
					<Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard;
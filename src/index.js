import React from 'react';
import ReactDom from 'react-dom';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import {
	Provider
} from 'react-redux';
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
// import {
// 	counter
// } from './index.redux';
// 多个reducers时需要合并reducer
import reducers from './reducer.js'
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
import './config.js'

import Page from './context.demo.js'


ReactDom.render(<Page></Page>, document.getElementById('root'));

// const store = createStore(reducers, compose(applyMiddleware(thunk),
// 	window.devToolsExtension ? window.devToolsExtension() : f => f
// ));

// ReactDom.render(
// 	(
// 		<Provider store={store}>
// 			<BrowserRouter>
// 				<Switch>
// 					{/* 只渲染命中的第一个Route */}
// 					<Route path='/login' exact component={Auth}></Route>
// 					<Route path='/dashboard' component={Dashboard}></Route>
// 					<Redirect to='/dashboard'></Redirect>
// 				</Switch>
// 			</BrowserRouter>
// 		</Provider>
// 	), document.getElementById('root')
// )
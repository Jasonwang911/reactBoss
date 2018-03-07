// redux 的实现，此函数并没有进行容错处理，是一个简版的redux

// 对外暴漏的唯一接口
export function createStore(reducer) {
	// 存储的当前状态
	let currentState = {};
	// 当前的监听器
	let currentListeners = [];
	// 获取当前应用的状态
	function getState() {
		return currentState;
	}
	// 监听器
	function subscribe() {
		// 将当前的状态推入监听器
		currentListeners.push(listener);
	}
	// dispatch会提交一个action，action会被传递到reducer里面, 返回值是当前的action
	function dispatch(action) {
		// 相当于 function xxx(state = 0, action)，返回值是新的state
		currentState = reducer(currentState, action);
		// 执行每个监听器
		currentListeners.forEact(v => v());
		return action;
	}

	// 初始化初始状态 --- 返回初始状态
	dispatch({
		type: '@@redux/INIT'
	})

	return {
		getState,
		subscribe,
		dispatch
	};
}

// 专门绑定dispatch的函数
function bindActionCreator(creator, dispatch) {
	// 使用透传的方法  把  {xxx(参数)} 变成 dispatch(xxx(参数))
	return (...args) => dispatch(creator(...args));
}
// 第一个参数是生成器
export function bindActionCreators(creators, dispath) {
	let bound = {};
	Object.keys(creator).forEach(v => {
		let creator = creators[v];
		bound[v] = bindActionCreator(creator, dispatch)
	})
	return bound;
}
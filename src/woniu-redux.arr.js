// middleWare(midApi)(store.dispatch)(action)
const arrayThunk = ({
	dispatch,
	getState
}) => next => action => {
	if (Array.isArray(action)) {
		action.forEach(v => dispatch(v))
	}
	// 如果不符合要求,直接调用下一个中间件，使用next
	// 如果符合要求，需要重新dispatch,调用dispatch即可

	// 对象和函数都有dispatch功能的
	// return {type: REMOVE_GUN}
	// return dispatch = {
	// 	setTimeout(() => {
	// 		dispatch(addGun())
	// 	}, 2000);
	// }
	// 如果是函数
	if (typeof action === 'function') {
		return action(dispatch, getState)
	}
	// 默认情况 参数是对象 相当于dispath
	return next(action)
}


export default arrayThunk;
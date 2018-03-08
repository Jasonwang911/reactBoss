// middleWare(midApi)(store.dispatch)(action)
const thunk = ({
	dispatch,
	getState
}) => next => action => {
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
	// 默认情况 参数是对象
	return next(action)
}


export default thunk;
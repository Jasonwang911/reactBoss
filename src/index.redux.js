const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

// reducer
// 根据老的 state 和action 生成新的state
export function counter(state = 0, action) {
	switch (action.type) {
		case ADD_GUN:
			console.log(state);
			return state + 1;
		case REMOVE_GUN:
			console.log(state);
			return state - 1;
		default:
			return 10;
	}
}
export function addGun() {
	return {
		type: ADD_GUN
	}
}

export function removeGun() {
	return {
		type: REMOVE_GUN
	}
}

export function addGunAsync() {
	return (dispath) => {
		setTimeout(() => {
			dispath(addGun())
		}, 2000);
	}
}
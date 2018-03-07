// 多次返回函数 
const add = x => y => x + y + 3;
console.log(add(2)(3));

function add2(x) {
	return function(y) {
		return x + y + 3;
	}
}
console.log(add2(2)(3))

// 获取对象的key和value
const obj = {
	name: 'jason',
	type: 'react'
};
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 透传
function sayHello(...args) {
	console.log(args);
}
sayHello('hello', 'jason', 'xiaoming')
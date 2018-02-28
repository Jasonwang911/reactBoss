// // 箭头函数 当函数中只有一条return语句的时候，大括号可以省略

// // 箭头函数和默认值
// // const hello = (name = 'imooc') => {
// // 	console.log(`hello ${name}`);
// // }
// // 展开符

// // es5中
// function hello(name1, name2) {
// 	console.log(name1, name2);
// }

// let arr = ['hello', 'jason'];

// // hello.apply(null, arr);

// // es6 
// hello(...arr);

// // Object的扩展
// // const obj = {
// // 	name: 'jason',
// // 	course: 'hebei'
// // };
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// console.log(`-----------------------------------------`)

// // es5
// const name = 'jason';
// let obj = {
// 	'name': 'hello'
// };
// obj[name] = 'hello jason';
// console.log(obj);

// // es6 对象中的计算属性

// const name1 = 'jason';
// let obj1 = {
// 	[name]: 'hello',
// 	name,
// 	hello: function() {

// 	},
// 	hello1() {

// 	}
// };
// console.log(obj1)

// // 对象展开符
// const json1 = {
// 	name: 'jason',
// 	source: ''
// }


// // 结构赋值


// // 类的语法糖   class
// class MyApp {
// 	constructor() {
// 		this.name = 'jason';
// 	}
// 	sayHello() {
// 		console.log(`hello ${this,name}`)
// 	}
// }

// const app = new MyApp();
// app.sayHello();

// // Set 集合元素不可重复
// // Map
// // Symbol

// // ES6 的模块化



// // 遍历一个数组  .forEach()
// // 
// const arrMath = [1, 2, 3];
// // console.log(arrMath.map(function(v) {
// // 	return v * 2;
// // }))

// console.log(arrMath.map(v => v * 2));

// // 所有元素是否通过测试
// console.log([1, 2, 3, 4, 5].every(v => v > 3))
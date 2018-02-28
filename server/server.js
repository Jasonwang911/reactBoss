const express = require('express');
const mongoose = require('mongoose');

// 连接
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
	console.log('mongo connect success!');
});

const app = express();

// express 自动执行工具 nodemon  全局安装 npm install -g nodemon
// 然后启动node 程序命令变成 nodemon xxx.js

// app.use 使用模块

// mongodb 的安装和使用
// 安装mongodb，链接数据库： mongod --dbpath 数据文件; 启动数据库客户端 mongo
// 下载mongoose： npm install mongoose --save
// const mongoose = require('mongoose');

// // 连接
// const DB_URL = 'mongodb://localhost:27017';
// mongoose.connect(DB_URL);
// mongoose.connection.on('connected', function() {
// 	console.log('mongo connect success!');
// });

// mongoose 的增删改查   定义文档模型： Schema 和 model 新建模型
// Schema 模型 type 表示类型， require表示是否必须
const User = mongoose.model('user', new mongoose.Schema({
	user: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		quire: true
	}
}));
// create, remove, update 分别用来增，删，改的操作
// 增
// User.create({
// 	user: 'langming',
// 	age: 18
// }, (err, doc) => {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// });

// 删
// User.remove({
// 	user: 'jason'
// }, (err, doc) => {

// });
// 改
// User.update({
// 	user: 'langming'
// }, {
// 	$set: {
// 		age: 99
// 	}
// }, (err, doc) => {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// });

// find 、 findOne 来进行 查 的操作
// User.find({}, (err, doc) => {
// 	res.json(doc);
// });
// findOne 查找出来的结果是个 对象 并不是数组
// User.findOne({
// 	user: 'langming'
// }, (err, doc) => {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// });

app.get('', (req, res) => {
	// 查
	User.find({}, (err, doc) => {
		res.json(doc);
	});
	// res.send(`<h1>hello boss！</h1>`);
});

app.get('/data', (req, res) => {
	res.json({
		user: 'jason wang',
		type: 'IT',
		age: 18
	});
});

app.get('/delete', (req, res) => {
	User.remove({
		user: 'jason'
	}, (err, doc) => {

	});
})

app.listen(9093, () => {
	console.log(`Node app start at prot 9093`);
});
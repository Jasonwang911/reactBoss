import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  addGun,
  removeGun,
  addGunAsync
} from './index.redux.js';
import {
  Button
} from 'antd-mobile';

// const mapStatetoProps = (state) => {
//   return {
//     num: state
//   }
// }

// const actionCreators = {
//   addGun,
//   removeGun,
//   addGunAsync
// };

// App = connect(mapStatetoProps, actionCreators)(App)
// redux的connect装饰器
@connect(
  // 需要把state中的那些属性放到props中
  state => ({
    num: state.counter
  }),
  // 需要把那些方法放到props中，自动进行dispatch
  {
    addGun,
    removeGun,
    addGunAsync
  }
)

class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机枪:{this.props.num}把</h1>
        <Button type="primary" onClick={this.props.addGun}>申请机枪</Button>
        <br />
        <Button type="primary" onClick={this.props.removeGun}>上缴机枪</Button>
        <br />
        <Button type="primary" onClick={this.props.addGunAsync}>过两天上缴机枪</Button>
      </div>
    )
  }
}


// class App extends Component {
//   render() {
//     const boss = '李云龙';
//     return (
//       <div>
//         <h1>独立团,团长： {boss}</h1>
//         <一营 老大="张大喵"></一营>
//         <骑兵连 老大="孙德福"></骑兵连>
//       </div>
//     )
//   }
// }

// function 骑兵连(props) {
//   return <h2>骑兵连连长{props.老大},冲啊</h2>
// }

// class 一营 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       solders: ['小明', '小魁', 'jason']
//     }
//     // this.addSolder = this.addSolder.bind(this);
//   }

//   componentWillMount() {
//     console.log('组件准备开始加载');
//   }

//   componentDidMount() {
//     console.log('组件已经加载完毕');
//   }

//   addSolder() {
//     console.log('hello add solder');
//     this.setState({
//       solders: [...this.state.solders, '新兵蛋子' + Math.random()]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>一营营长： {this.props.老大}</h2>
//         <Button type="primary" onClick={this.addSolder.bind(this)}>新兵入伍</Button>
//         <List renderHeader={() => '士兵列表'}>
//           {
//             this.state.solders.map( v => {
//               return <List.Item key={v}>{v}</List.Item>
//             })
//           }
//         </List>
//       </div>

//     )
//   }
// }

// import React, {
//   Component
// } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
import React, { Component } from 'react';
import PureList from './purelist'
import NewTodo from './newtodo'
import { Route, Link, BrowserRouter } from "react-router-dom"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/pure">旧项目</Link>
                    </li>

                </ul>

                <Route path='/' exact component={NewTodo}></Route>
                <Route path='/pure' component={PureList}></Route>
            </BrowserRouter>
        )
    }
}

export default App;

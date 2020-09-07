import React, { Component, Fragment } from 'react';
import TodoList from './todolist'
import Css from './css'
import './style.css'
class App extends Component {
  render(){
  return (
    <Fragment>
    <TodoList></TodoList>
    <Css></Css>
    </Fragment>
  );
}
}

export default App;

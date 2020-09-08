import React, { Component, Fragment } from 'react';
import TodoList from './todolist'
import Css from './css'
import CSSGroup from './cssgroup'
import './style.css'
class App extends Component {
  render(){
  return (
    <Fragment>
    <TodoList></TodoList>
    <Css></Css>
    <CSSGroup></CSSGroup>
    </Fragment>
  );
}
}

export default App;

import React, { Component } from 'react';
//import { message } from 'antd'
import store from './store'
import TodoListUI from './todolistUI'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import axios from 'axios'
export default class NewTodo extends Component{
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
    handleChangeValue = (e) => {
      const value = e.target.value
      e.persist()
      const action = getInputChangeAction(value)
      store.dispatch(action)
    }
    handleStoreChange = () => {
      this.setState(store.getState())
    }
    handleButtonChange = () => {
      const action = getAddItemAction()
      store.dispatch(action)
    }
    handleItemClick = (index) => {
      const action = getDeleteItemAction(index)
      store.dispatch(action)
      //message.success(index)
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    render() {
        return (
            <TodoListUI 
              inputValue={this.state.inputValue}
              handleChangeValue={this.handleChangeValue}
              handleButtonChange={this.handleButtonChange}
              handleItemClick={this.handleItemClick}
              list={this.state.list}
            />
        )
    }
}
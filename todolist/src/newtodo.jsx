import React, { Component } from 'react';
//import { message } from 'antd'
import store from './store'
import TodoListUI from './todolistUI'
import { getTodoList,getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'

export default class NewTodo extends Component{
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
    handleChangeValue = (e) => {
      const value = e.target.value
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
    handleItemClick = (id) => {
      const action = getDeleteItemAction(id)
      store.dispatch(action)
      
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    componentDidMount = () => {
      // axios.get('/api/users').then((res)=>{
      //   const username = res.data.data.users.map(users => users.username)
      //   const action = initListAction(username)
      //   console.log(action)
      //   store.dispatch(action)
      // })
      const action = getTodoList();
      store.dispatch(action)
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
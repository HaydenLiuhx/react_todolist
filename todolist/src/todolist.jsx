import React, { Component, Fragment } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import TodoItem from './todo-item'
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange = (e) => { 
        //this.setState({inputValue: e.target.value})
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleBtnClick = () => {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        // this.setState(() => ({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // }))
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleListDelete = (index) => {
        // const list = [...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list: list
        // })
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index,1)
            return {list: list}
        })
    }
    getTodoItem = () => {
        return(
            this.state.list.map((item, index) => 
                <TodoItem key ={'item'+index} content={{item,index}} deleteMethod={this.handleListDelete}/>
            )
        )
    }
    render() {
        const {inputValue} = this.state
        return (
            <Fragment>
                <label forhtml='insertArea'>请输入内容</label>
                <Input 
                    value={inputValue}
                    placeholder={inputValue}
                    onChange={this.handleInputChange}
                />
                <Button 
                    style={{background:'grey'}}
                    onClick={this.handleBtnClick}
                >提交</Button>
                <List title="todo-list">
                    {this.getTodoItem()}
                </List>
            </Fragment>
        )
    }
}
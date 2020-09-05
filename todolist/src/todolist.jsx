import React, { Component, Fragment } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'haha',
            list: []
        }
    }
    handleInputChange = (e) => { 
        this.setState({inputValue: e.target.value})
        console.log(this.state.inputValue)
     } 
     
    render() {
        const {inputValue} = this.state
        return (
            <Fragment>
                <Input 
                    value={inputValue}
                    placeholder={inputValue}
                    onChange={this.handleInputChange}
                />
                <Button style={{background:'grey'}}>提交</Button>
                <List title="todo-list">
                    <ListItem>画画</ListItem>
                    <ListItem>打游戏</ListItem>
                </List>
            </Fragment>
        )
    }
}
import React, { Component, Fragment } from 'react';
import { Input, Button,List,Card } from 'antd'
import store from './store'
export default class NewTodo extends Component{
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleChangeValue)
  }
    state = store.getState()
    handleChangeValue = (e) => {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      store.dispatch(action)
    }
    render() {
        return (
            <Fragment>
                <div style={{marginTop:50}}>
                    <Input onChange={this.handleChangeValue} placeholder='todo' style={{width:300, margin:10}}></Input>
                    <Button type="primary">Primary Button</Button>
                </div>
                <List
                    style={{margin:30}}
                    grid={{ gutter: 5 }}
                    dataSource={this.state.list}
                    renderItem={item => (
                    <List.Item>
                        <Card >{item}</Card>
                    </List.Item>
                    )}
                />,
            </Fragment>
        )
    }
}
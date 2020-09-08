import React, { Component, Fragment } from 'react';
import { Input, Button,List,Card } from 'antd'

const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
export default class NewTodo extends Component{
    
    render() {
        return (
            <Fragment>
                <div style={{marginTop:50}}>
                    <Input placeholder='todo' style={{width:300, margin:10}}></Input>
                    <Button type="primary">Primary Button</Button>
                </div>
                <List
                    style={{margin:30}}
                    grid={{ gutter: 5 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card >{item.title}</Card>
                    </List.Item>
                    )}
                />,
            </Fragment>
        )
    }
}
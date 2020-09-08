import React, { Fragment } from 'react'
import { Input, Button, List, Card } from 'antd'
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{marginTop:50}}>
                <Input 
                  onChange={props.handleChangeValue} 
                  placeholder='todo' 
                  value={props.inputValue}
                  style={{width:300, margin:10}}>
                </Input>
                <Button
                  onClick={()=>props.handleButtonChange()} 
                  type="primary">Primary Button
                </Button>
            </div>
            <div>
            <List
                style={{margin:30}}
                grid={{ gutter: 5 }}
                dataSource={props.list}
                renderItem={(item) => (
                <List.Item onClick={()=>{ props.handleItemClick(item)} }>
                    <Card>{item}</Card>
                </List.Item>
                )}
            />
            </div>
        </Fragment>
    )
}
export default TodoListUI
// export default class TodoListUI extends Component {
//     render() {
//         return (
            // <Fragment>
            //     <div style={{marginTop:50}}>
            //         <Input 
            //           onChange={this.props.handleChangeValue} 
            //           placeholder='todo' 
            //           value={this.props.inputValue}
            //           style={{width:300, margin:10}}>
            //         </Input>
            //         <Button
            //           onClick={()=>this.props.handleButtonChange()} 
            //           type="primary">Primary Button
            //         </Button>
            //     </div>
            //     <List
            //         style={{margin:30}}
            //         grid={{ gutter: 5 }}
            //         dataSource={this.props.list}
            //         renderItem={(item,index) => (
            //         <List.Item onClick={(index)=>this.props.handleItemClick(index)}>
            //             <Card >{item}</Card>
            //         </List.Item>
            //         )}
            //     />,
            // </Fragment>
//         )
//     }
// }
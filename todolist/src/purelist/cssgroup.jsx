import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default class Css extends Component {
    state = {
        list: [],
    }
    handleAddItem = () => {
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                onExit={(el)=>{el.style.color='blue'}}
                                appear={true}
                                key={index}
                            >
                                <div >{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            <Button variant="outlined" color="secondary" onClick={this.handleAddItem}>Secondary</Button>
          </Fragment>
        )
    }
}
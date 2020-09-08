import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import { CSSTransition } from 'react-transition-group'
export default class Css extends Component {
    state = {
        show: true,
    }
    handleToggle = () => {
        this.setState({
            show: this.state.show ? false:true
        })
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onExit={(el)=>{el.style.color='blue'}}
                    appear={true}
                >
                {/* <h2 className={this.state.show ? 'show':'hide'}>Hello</h2> */}
                <div>Hello</div>
                </CSSTransition>
            <Button variant="outlined" color="secondary" onClick={this.handleToggle}>Secondary</Button>
          </Fragment>
        )
    }
}
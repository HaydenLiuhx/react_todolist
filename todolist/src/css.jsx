import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';

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
                <h2 className={this.state.show ? 'show':'hide'}>Hello</h2>
            <Button variant="outlined" color="secondary" onClick={this.handleToggle}>Secondary</Button>
          </Fragment>
        )
    }
}
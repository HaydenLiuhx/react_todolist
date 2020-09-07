import React, { Component, Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deleteMethod: PropTypes.func,
        index: PropTypes.number,
        test: PropTypes.string.isRequired
    }
    static defaultProps = {
        test: '*'
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true
        } else {
            return false
        }
    }
    render() {
        console.log('child render')
        const {item,index,test} = this.props
        return (
            <Fragment>
                <ListItem  button onClick={() => this.props.deleteMethod(index)}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText fontSize={40} primary={test+item}/>
                </ListItem>
            </Fragment>
        )
    }
}

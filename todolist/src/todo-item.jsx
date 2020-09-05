import React, { Component, Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
export default class TodoItem extends Component {
    render() {
        const {index, item} = this.props.content
        return (
            <Fragment>
                <ListItem  button onClick={() => this.props.deleteMethod(index)}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText fontSize={40} primary={item}/>
                </ListItem>
            </Fragment>
        )
    }
}
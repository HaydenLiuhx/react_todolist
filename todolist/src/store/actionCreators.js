import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './action-types'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (id) => ({
    type: DELETE_TODO_ITEM,
    id
})

export const initListAction = (username) => ({
    type: INIT_LIST_ACTION,
    username
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/users').then((res)=>{
            const username = res.data.data.users.map(users => users.username)
            const action = initListAction(username)
            dispatch(action)
          })
    }
}
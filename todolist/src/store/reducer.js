import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './action-types'
const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.username
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        console.log(newState)
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item, index) => {
            if (item === action.id) {
                newState.list.splice(index,1)
            }
        })
        // newState.list.splice(action.index,1);
         console.log(newState)
        return newState
    }
    
    return state
}
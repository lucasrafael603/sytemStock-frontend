import {actions} from './stock.actions'

type Action = {
type: keyof typeof actions
payload?: any
}


export default function mathReducer (state: number = 0, action: Action){

switch(action.type){

  case actions.INCREMENT:
    console.log(action)
    return state + 1

  case actions.DECREMENT:
    console.log(action)
    return state - 1

  default:
    return state
}


}
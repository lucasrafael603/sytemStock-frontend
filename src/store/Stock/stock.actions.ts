export const actions = {

  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'

}


export function increment(){

  return { type: actions.INCREMENT, payload: 1 }

}


export function decrement(){

  return { type: actions.DECREMENT }

}
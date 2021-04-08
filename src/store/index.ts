import {createStore, combineReducers} from 'redux'
import stockReducer from '../store/Stock/stock.reducer'

const rootReducer = combineReducers({

  stock: stockReducer

})


const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export default store
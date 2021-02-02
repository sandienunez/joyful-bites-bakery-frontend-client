import { combineReducers } from 'redux'
import listReducer from './listReducer'

const rootReducer = combineReducers({
    listReducer: listReducer  
})

export default rootReducer 

//set up root reducer 
//combineReducers = comes from redux 

import { combineReducers } from 'redux'
import showDetails from './showDetails'
import addToCart from './addToCart'

const rootReducer = combineReducers({
    showDetails,
    addToCart
})

export default rootReducer
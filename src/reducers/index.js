import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer'

export default combineReducers({
    user: userReducer
})
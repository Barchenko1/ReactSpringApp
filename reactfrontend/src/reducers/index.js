import {combineReducers} from 'redux';
import UserReducer from "./UserReducer";
import ErrorsReducer from "./ErrorsReducer";

export default combineReducers({
    user: UserReducer,
    errors: ErrorsReducer
})
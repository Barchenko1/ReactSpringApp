import {ADD_USER, DELETE_USER, GET_ALL_USERS, GET_USER, UPDATE_USER, REGISTRATION_USER} from "../actions/types";

const initialStyle = {
    users: [],
    user: {}
};

export default function (state = initialStyle, action) {
    switch (action.type) {
        case GET_ALL_USERS:return {
            ...state,
            users: action.payload
        };
        case DELETE_USER: return{
            ...state,
            users:state.users.filter(user =>
            user.id !== action.payload)
        };
        case GET_USER: return{
            ...state,
            user: action.payload
        };
        case UPDATE_USER: return{
            ...state,
            user: action.payload
        };
        case ADD_USER: return{
            ...state,
            user: action.payload
        };
        case REGISTRATION_USER: return{
            ...state,
            user: action.payload
        };

        default: return state;
    }
}
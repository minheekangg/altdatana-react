import { RESET } from "../types";

const initialState = {
    username: "",
    userId: 0,
};


export default function userReducer(state = initialState, action) {
    console.log('%c userReducer', 'color: blue', state, action);
    switch (action.type) {
        case RESET:
            return initialState
        default:
            return state;
    }
}
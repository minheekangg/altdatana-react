import { ActionTypes } from "../../utils/constants";

const initialState = {
    transactions: [],
};

export default function dashboardReducer(state = initialState, action) {
    console.log('%c userReducer', 'color: yellow', state, action);
    switch (action.type) {
        case ActionTypes.FETCH_TRANSACTIONS: {
            debugger
            return {
                ...state,
                transactions: action.payload,
            }
        }
        case ActionTypes.RESET:
            return initialState
        default:
            return state;
    }
}
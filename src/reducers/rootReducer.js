import { SESSION_UPDATE, BREAK_UPDATE, PAUSED, TIMELEFT, STATUS } from '../actions/actionConst';

let initialState = {
    session: 25,
    breakVal: 5,
    paused: false,
    timeLeft: 1500,
    status: 'Session'
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SESSION_UPDATE:
            return {
                ...state,
                session: action.payload
            };
        case BREAK_UPDATE:
            return {
                ...state,
                breakVal: action.payload
            };
        case PAUSED:
            return {
                ...state,
                paused: !state.paused
            };
        case TIMELEFT:
            return {
                ...state,
                timeLeft: action.payload
            };
        case STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    };
};
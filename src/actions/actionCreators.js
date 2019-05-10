import { SESSION_UPDATE, BREAK_UPDATE, PAUSED, TIMELEFT, STATUS } from './actionConst';

export function updateSession(session) {
    return {
        type: SESSION_UPDATE,
        payload: session
    };
};

export function updateBreak(breakVal) {
    return {
        type: BREAK_UPDATE,
        payload: breakVal
    };
};

export function togglePause() {
    return {
        type: PAUSED
    };
};

export function updateTimeLeft(timeLeft) {
    return {
        type: TIMELEFT,
        payload: timeLeft
    };
};

export function updateStatus(status) {
    return {
        type: STATUS,
        payload: status
    };
};
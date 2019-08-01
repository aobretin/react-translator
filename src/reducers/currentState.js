import {
    APP_STATES,
    CHANGE_ACTIVE_STATE
} from '../constants';

export default (state = APP_STATES.NEUTRAL, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_STATE:
            return action.payload;
        default:
            return state;
    }
}
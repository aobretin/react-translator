import {
    SET_CURRENT_LANG
} from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_LANG:
            return action.payload;
        default:
            return state;
    }
}
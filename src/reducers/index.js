import { combineReducers } from "redux";
import translations from './translations';
import currentState from './currentState';
import currentLang from './currentLang';
import translated from './translated';

export default combineReducers({
    translations,
    currentState,
    currentLang,
    translated
});
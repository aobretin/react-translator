import {
    CHANGE_ACTIVE_STATE,
    ADD_NEW_LANGUAGE,
    ADD_NEW_WORD,
    SET_CURRENT_LANG,
    SET_NEW_TRANSLATIONS,
    GET_TRANSLATION,
    GET_ALL_TRANSLATION,
    RESET_TRANSLATION,
    RESET_TRANSLATIONS_COLLECTIONS
} from '../constants/action-types';

const changeActiveState = state => ({
    type: CHANGE_ACTIVE_STATE,
    payload: state
});

const addNewLanguage = lang => ({
    type: ADD_NEW_LANGUAGE,
    payload: lang
});

const addNewWord = wordCode => ({
    type: ADD_NEW_WORD,
    payload: wordCode
});

const setCurrentLang = lang => ({
    type: SET_CURRENT_LANG,
    payload: lang
});

const setNewTranslations = (langCode, newTranslations) => ({
    type: SET_NEW_TRANSLATIONS,
    payload: {
        langCode,
        newTranslations
    }
});

const getTranslation = settings => ({
    type: GET_TRANSLATION,
    payload: settings
});

const getAllTranslations = settings => ({
    type: GET_ALL_TRANSLATION,
    payload: settings
});

const resetTranslation = () => ({
    type: RESET_TRANSLATION
});

const resetTranslationsCollection = () => ({
    type: RESET_TRANSLATIONS_COLLECTIONS
});

export {
    changeActiveState,
    addNewLanguage,
    addNewWord,
    setCurrentLang,
    setNewTranslations,
    getTranslation,
    getAllTranslations,
    resetTranslation,
    resetTranslationsCollection
}
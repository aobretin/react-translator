import {
    ADD_NEW_LANGUAGE,
    ADD_NEW_WORD,
    SET_NEW_TRANSLATIONS,
    RESET_TRANSLATIONS_COLLECTIONS,
    GLOBALS
} from '../constants';

const checkIfLanguagesSetLocally = () => {
    let state = [];

    if (localStorage.getItem(GLOBALS.LOCAL_ITEMS_NAME)) {
        state = JSON.parse(localStorage.getItem(GLOBALS.LOCAL_ITEMS_NAME));
    }

    return state;
}

const setLocalTranslations = translations => localStorage.setItem(GLOBALS.LOCAL_ITEMS_NAME, JSON.stringify(translations));

export default (state = checkIfLanguagesSetLocally(), action) => {
    let translationsToStore = [];

    switch (action.type) {
        case ADD_NEW_LANGUAGE:
            const {
                langName,
                langCode
            } = action.payload;

            const translations = !state.length 
                                 ? {} 
                                 : Object.keys(state[0].translations).reduce((c, v) => ({...c, [v]: ''}), {});

            translationsToStore = [
                ...state,
                {
                    langName,
                    langCode,
                    translations
                }
            ];

            setLocalTranslations(translationsToStore);
            return translationsToStore;
        case ADD_NEW_WORD:
            translationsToStore = state.reduce((newTranslations, currentTranslation) => {
                return [
                    ...newTranslations,
                    {
                        ...currentTranslation,
                        translations: {
                            ...currentTranslation.translations,
                            [action.payload]: ''
                        }
                    }
                ]
            }, []);

            setLocalTranslations(translationsToStore);
            return translationsToStore;
        case SET_NEW_TRANSLATIONS:
            const {
                langCode: currentLangCode,
                newTranslations
            } = action.payload;
            const clonedState = [...state];
            const langToChangeIndex = clonedState.findIndex(lang => lang.langCode === currentLangCode);
            
            clonedState[langToChangeIndex].translations = {
                ...clonedState[langToChangeIndex].translations,
                ...newTranslations
            }

            translationsToStore = [...clonedState];

            setLocalTranslations(translationsToStore);
            return translationsToStore;
        case RESET_TRANSLATIONS_COLLECTIONS:
            return [];
        default:
            return state;
    }
}
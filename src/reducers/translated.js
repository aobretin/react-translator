import {
    GET_TRANSLATION,
    GET_ALL_TRANSLATION,
    RESET_TRANSLATION
} from '../constants';

export default (state = '', action) => {
    switch (action.type) {
        case GET_TRANSLATION:
            const {
                fromLang,
                toLang,
                wordToTranslate
            } = action.payload;

            const [wordKey] = Object.entries(fromLang.translations).find(([_, v]) => v === wordToTranslate);
            return toLang.translations[wordKey];
        case GET_ALL_TRANSLATION:
            const { 
                word,
                translations
            } = action.payload;

            return translations.reduce((c, l) => {
                c.push({
                    code: l.langCode,
                    name: l.langName,
                    translation: l.translations[word]
                });

                return c;
            }, [])
        case RESET_TRANSLATION:
            return '';
        default:
            return state;
    }
}
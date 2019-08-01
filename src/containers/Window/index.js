import React from 'react';
import { 
    WindowHeader, 
    WindowContent,
    Fieldset
} from 'react95';

import store from '../../store';
import {
    changeActiveState,
    addNewLanguage,
    addNewWord,
    setCurrentLang,
    setNewTranslations,
    getTranslation,
    getAllTranslations,
    resetTranslation,
    resetTranslationsCollection
} from '../../actions';

import WindowMenu from '../../components/Window-Menu';
import NeutralState from '../../components/Neutral-state';
import AddNewLang from '../../components/Add-new-lang';
import AddNewWord from '../../components/Add-new-word';
import EditLang from '../../components/Edit-lang';
import GetTranslation from '../../components/Get-translation';
import GetAllTranslations from '../../components/Get-all-translations';

import {
    APP_STATES
} from '../../constants';

import { 
    ParentWindowStyles, 
    WindowStyles 
} from './styles';

export default () => {
    const {
        translations,
        currentState,
        currentLang,
        translated
    } = store.getState();

    function setCurrentLangHandler(lang) {
        store.dispatch(setCurrentLang(lang));
    }

    function addNewWordHandler(wordCode) {
        store.dispatch(addNewWord(wordCode))
    }

    function addNewLanguageHandler(lang) {
        store.dispatch(addNewLanguage(lang));
    }

    function changeActiveStateHandler(state) {
        store.dispatch(resetTranslation());
        store.dispatch(changeActiveState(state));
    }

    function setNewTranslationsHandler(langCode, newTranslations) {
        store.dispatch(setNewTranslations(langCode, newTranslations));
    }

    function getTranslationHandler(settings) {
        store.dispatch(getTranslation(settings));
    }

    function getAllTranslationsHandler(word) {
        store.dispatch(getAllTranslations(word));
    }

    function resetTranslationsCollectionHandler() {
        store.dispatch(resetTranslationsCollection());
    }

    function chooseBody() {
        let content = null;

        switch (currentState) {
            case APP_STATES.ADD_LANGUAGE:
                content = <AddNewLang 
                            translations={translations} 
                            addNewLanguageHandler={addNewLanguageHandler} 
                          />;
                break;
            case APP_STATES.ADD_WORD:
                content = <AddNewWord 
                            translations={translations}
                            addNewWordHandler={addNewWordHandler} 
                          />;
                break;
            case APP_STATES.EDIT_LANG:
                content = <EditLang 
                            setNewTranslationsHandler={setNewTranslationsHandler} 
                            currentLang={currentLang} 
                          />;
                break;
            case APP_STATES.GET_TRANSLATION:
                content = <GetTranslation 
                            translated={translated}
                            translations={translations} 
                            getTranslationHandler={getTranslationHandler}
                          />;
                break;
            case APP_STATES.GET_TRANSLATION_ALL:
                content = <GetAllTranslations 
                            translated={translated}
                            getAllTranslationsHandler={getAllTranslationsHandler}
                            translations={translations} 
                          />;
                break;
            default:
                content = <NeutralState translations={translations} />;
                break;
        }

        return content;
    }

    function chooseLabel() {
        let label = '';

        switch (currentState) {
            case APP_STATES.EDIT_LANG:
                label = currentLang.langName;
                break;
            case APP_STATES.ADD_LANGUAGE:
                label = 'Add new language';
                break;
            case APP_STATES.ADD_WORD:
                label = 'Add new word code';
                break;
            case APP_STATES.GET_TRANSLATION:
                label = 'Translate';
                break;
            case APP_STATES.GET_TRANSLATION_ALL:
                label = 'Translate for all';
                break;
            default:
                label = '';
                break;
        }

        return label;
    }

    return (
        <ParentWindowStyles>
            <WindowStyles>
                <WindowHeader>
                    NTT Data Translator
                </WindowHeader>
                <WindowMenu 
                    setCurrentLangHandler={setCurrentLangHandler}
                    changeActiveStateHandler={changeActiveStateHandler}
                    resetTranslationsCollectionHandler={resetTranslationsCollectionHandler}
                    translations={translations} 
                />
                <WindowContent>
                    <Fieldset label={chooseLabel()}>
                        {chooseBody()}
                    </Fieldset>
                </WindowContent>
            </WindowStyles>
        </ParentWindowStyles>
    )
}
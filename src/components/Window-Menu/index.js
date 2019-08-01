import React, {useState} from 'react';
import { 
    Toolbar,
    Button, 
    ListItem,
    Divider
} from 'react95';

import { APP_STATES, GLOBALS } from '../../constants';
import { 
    ListWithZIndexFix, 
    MenuWrapper 
} from './styles';

export default ({
    translations,
    changeActiveStateHandler,
    setCurrentLangHandler,
    resetTranslationsCollectionHandler
}) => {
    const [openActions, setOpenAction] = useState(false);
    const [openLangs, setOpenLangs] = useState(false);

    function handleOpenAction() {
        setOpenLangs(false);
        setOpenAction(!openActions);
    }

    function handleOpenLangs() {
        setOpenAction(false);
        setOpenLangs(!openLangs);
    }

    function handleActiveEditLang(lang) {
        changeActiveStateHandler(APP_STATES.EDIT_LANG);
        setCurrentLangHandler(lang);
    }

    function deleteAllTranslation() {
        localStorage.removeItem(GLOBALS.LOCAL_ITEMS_NAME);
        changeActiveStateHandler(APP_STATES.NEUTRAL);
        resetTranslationsCollectionHandler();
    }

    return (
        <Toolbar>
            <MenuWrapper>
                <Button
                    flat
                    size="sm"
                    onClick={handleOpenAction}
                >
                    Actions
                </Button>
                {openActions && (
                    <ListWithZIndexFix
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={openActions}
                        onClick={handleOpenAction}
                    >
                        <ListItem 
                            onClick={() => changeActiveStateHandler(APP_STATES.ADD_LANGUAGE)}
                        >
                            <span role="img" aria-label="add new language">👅</span> Add new language
                        </ListItem>
                        
                        <ListItem 
                            onClick={() => changeActiveStateHandler(APP_STATES.ADD_WORD)}
                            disabled={!translations.length}
                        >
                            <span role="img" aria-label="add new word">💭</span> Add new word code
                        </ListItem>
                        
                        <ListItem 
                            onClick={() => changeActiveStateHandler(APP_STATES.GET_TRANSLATION)}
                            disabled={translations.length < 2 || (!translations[0] || Object.keys(translations[0].translations).length === 0)}
                        >
                            <span role="img" aria-label="get translation">🔮</span> Get Translation by word
                        </ListItem>
                        <ListItem 
                            onClick={() => changeActiveStateHandler(APP_STATES.GET_TRANSLATION_ALL)}
                            disabled={!translations.length || (!translations[0] || Object.keys(translations[0].translations).length === 0)}
                        >
                            <span role="img" aria-label="show all translations">⚛️</span> Show translations for all
                        </ListItem>
                        <Divider/>
                        <ListItem 
                            onClick={deleteAllTranslation}
                        >
                            <span role="img" aria-label="delete all translations">❌</span> Delete all translations
                        </ListItem>
                        <Divider/>
                        <ListItem 
                            onClick={() => changeActiveStateHandler(APP_STATES.NEUTRAL)}
                        >
                            Main window
                        </ListItem>
                    </ListWithZIndexFix>
                )}
            </MenuWrapper>
            <MenuWrapper>
                <Button
                    flat
                    size="sm"
                    onClick={handleOpenLangs}
                    disabled={!translations.length}
                >
                    Languages
                </Button>
                {openLangs && (
                    <ListWithZIndexFix
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={openLangs}
                        onClick={handleOpenLangs}
                    >
                        {translations.map(({langCode, langName, translations}) => {
                            return (
                                <ListItem 
                                    onClick={() => handleActiveEditLang({
                                        langCode,
                                        langName,
                                        langTranslations: translations
                                    })}
                                    key={langCode}
                                    disabled={!Object.keys(translations).length}
                                >
                                    {langName}
                                </ListItem>
                            )
                        })}
                    </ListWithZIndexFix>
                )}
            </MenuWrapper>
        </Toolbar>
    )
}
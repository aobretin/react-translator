import React, {useState} from 'react';
import {
    TextField,
    Button
} from 'react95';
import { AddNewStyles } from './styles';

export default ({
    addNewLanguageHandler,
    translations
}) => {
    const [langName, setLangName] = useState('');
    const [langCode, setLangCode] = useState('');

    const submitLang = () => {
        addNewLanguageHandler({
            langName,
            langCode
        });

        setLangName('');
        setLangCode('');
    }

    const langExists = () => translations.some(trans => trans.langName === langName || trans.langCode === langCode);

    return (
        <AddNewStyles>
            <TextField 
                value={langName}
                name="lang-name"
                onChange={e => setLangName(e.target.value)}
                placeholder="Enter language name..."
            />

            <TextField 
                value={langCode}
                name="lang-code"
                onChange={e => setLangCode(e.target.value)}
                placeholder="Enter language code..."
            />

            <Button 
                onClick={submitLang}
                disabled={!langName || !langCode || langExists()}
            >
                ADD
            </Button>
        </AddNewStyles>
    )
}
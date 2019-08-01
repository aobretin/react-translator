import React, { useState } from 'react';
import {
    TextField,
    Button,
    Select
} from 'react95';

import {
    formatTransForSelect
} from '../../helpers';

import { 
    GetTranslationRow,
    SpecialDivider 
} from './styles';

export default ({
    translated,
    translations,
    getTranslationHandler
}) => {
    const formattedTrans = formatTransForSelect(translations);
    const [fromLang, setFromLang] = useState(formattedTrans[0].value);
    const [toLang, setToLang] = useState(formattedTrans[0].value);
    const [wordToTranslate, setWordToTranslate] = useState('');

    const getLang = code => translations.find(lang => lang.langCode === code);
    const wordExists = (word, fromLang) => Object.values(getLang(fromLang).translations).includes(word);
    const getSelectedSelectIndex = v => formattedTrans.findIndex(trans => trans.value === v);
    const switchLangs = () => {
        setFromLang(toLang);
        setToLang(fromLang);
    }

    return (
        <div>
            <GetTranslationRow>
                <Select 
                    key={`${fromLang}-from-lang`}
                    name="from-lang"
                    selectedIndex={getSelectedSelectIndex(fromLang)}
                    items={formattedTrans}
                    onChange={v => setFromLang(v)}
                />
                <span>
                    <Button onClick={switchLangs}>
                        <span role="img" aria-label="switch langs">🔀</span>
                    </Button>
                </span>
                <Select 
                    key={`${toLang}-to-lang`}
                    name="to-lang"
                    selectedIndex={getSelectedSelectIndex(toLang)}
                    items={formattedTrans}
                    onChange={v => setToLang(v)}
                />
            </GetTranslationRow>
            <SpecialDivider/>
            <GetTranslationRow>
                <TextField
                    name="word-to-translate"
                    value={wordToTranslate}
                    onChange={e => setWordToTranslate(e.target.value)}
                    placeholder="Type word to translate..."
                />
                <span></span>
                <TextField
                    name="word-to-translate"
                    value={translated}
                    readonly
                    disabled
                />
            </GetTranslationRow>
            <SpecialDivider/>
            <Button 
                onClick={() => getTranslationHandler({
                    wordToTranslate,
                    fromLang: getLang(fromLang),
                    toLang: getLang(toLang)
                })}
                disabled={!wordExists(wordToTranslate, fromLang) || !wordToTranslate.length}
                fullWidth
            >
                {wordExists(wordToTranslate, fromLang) ? 'Translate' : 'Word does not exist... so add / check'}
            </Button>
        </div>
    )
}
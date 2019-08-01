import React, {useState} from 'react';
import {
    TextField,
    Button
} from 'react95';
import { AddNewStyles } from './styles';

export default ({
    addNewWordHandler,
    translations
}) => {
    const [wordCode, setWordCode] = useState('');

    const wordExits = word => typeof translations[0].translations[word] !== 'undefined';
    const submitLang = () => {
        addNewWordHandler(wordCode);
        setWordCode('');
    }

    return (
        <AddNewStyles>
            <TextField 
                value={wordCode}
                name="lang-name"
                onChange={e => setWordCode(e.target.value)}
                placeholder="Enter word code..."
            />

            <Button 
                onClick={submitLang}
                disabled={!wordCode || wordExits(wordCode)}
            >
                ADD WORD CODE
            </Button>
        </AddNewStyles>
    )
}
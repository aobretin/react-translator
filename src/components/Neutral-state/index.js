import React from 'react';
import {InfoWindowStyles} from './styles';

export default ({translations}) => {
    return (
        <InfoWindowStyles>
            {
                !translations.length
                ?
                <div>No languages added yet, click Actions / Add new language</div>
                :
                <div>You have {translations.length} language/s, to add a new word click Actions / Add new word</div>
            }
        </InfoWindowStyles>
    )
}
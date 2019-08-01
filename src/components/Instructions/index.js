import React from 'react';
import {
    WindowStyles, 
    ParentWindowStyles
} from './styles';

import { 
    WindowContent,
    Fieldset
} from 'react95';

export default () => {
    return (
        <ParentWindowStyles>
            <WindowStyles>
                <WindowContent>
                    <Fieldset label="Instructions">
                        <ul>
                            <li>Press start to lunch app</li>
                            <li>Press actions and add as many languages as you want</li>
                            <li>Add word codes, that will be added to all languages (even later added ones)</li>
                            <li>Select any language from "Languages" menu and add translation</li>
                            <li>Click "Get translations by word" and choose any 2 languages</li>
                            <li>Type the translation (not code) in the textfield and get it's equivalent in the other one</li>
                            <li>Click "Get translations for all" and choose any word code and get all languages translations</li>
                            <li>Click "Delete all translations" to remove any stored translations</li>
                        </ul>
                    </Fieldset>
                </WindowContent>
            </WindowStyles>
        </ParentWindowStyles>
    )
}
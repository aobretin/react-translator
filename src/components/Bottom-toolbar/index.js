import React from 'react';
import { Toolbar, Button } from 'react95';
import {ToolbarStyles} from './styles';

export default ({
    setAppStarted,
    appStarted
}) => {
    return (
        <ToolbarStyles>
            <Toolbar>
                <Button onClick={() => setAppStarted(!appStarted)}>
                    {appStarted ? 'Instructions' : 'Translator'}
                </Button>
            </Toolbar>
        </ToolbarStyles>
    )
}
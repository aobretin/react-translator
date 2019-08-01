import React, { useState } from 'react';

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from 'react95';

import BottomToolbar from '../../components/Bottom-toolbar';
import Window from '../Window';
import Instructions from '../../components/Instructions';
import {AppStyles} from './styles';

const ResetStyles = createGlobalStyle`${reset} ${AppStyles}`;

export default () => {
  const [appStarted, setAppStarted] = useState(false);

  return (
    <div className="NTT-data-translator">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <AppStyles>
          {!appStarted && <Instructions/>}
          {appStarted && <Window/>}
          <BottomToolbar 
            appStarted={appStarted} 
            setAppStarted={setAppStarted} 
          />
        </AppStyles>
      </ThemeProvider>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {myTheme} from '../src/styles/Theme.styled'
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../src/styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles />
</ThemeProvider>
);

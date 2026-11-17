import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { myTheme } from './styles/Theme.styled';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={myTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

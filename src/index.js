import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Store
import store, { browserHistory } from './app/stores';

// Multi Lang
import LanguageProvider from './app/containers/LanguageProvider';
import { translationMessages } from './i18n';

// Custom
import { muiDefault as muiTheme } from './material-ui-theme';

// Add SCSS
import './styles/index.scss';

import Routes from './app/routers';

library.add(fab, fas);
ReactDOM.render(
    <div className="App">
        <Provider store={store()}>
            <LanguageProvider messages={translationMessages}>
                <MuiThemeProvider theme={muiTheme}>
                    <Routes history={browserHistory} />
                </MuiThemeProvider>
            </LanguageProvider>
        </Provider>
    </div>,
    document.getElementById('root')
);

if (process.env.REACT_APP_ENV === 'dev') {
    registerServiceWorker();
}

if (process.env.NODE_ENV === 'development') {
    import('app/_utils/debug').then(debug => {
        debug.default(window);
    });
}

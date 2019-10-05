import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';

import * as serviceWorker from './serviceWorker';

const options = {
    name: 'devtools'
};

const store = createStore(
    rootReducer,
    devToolsEnhancer(options)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

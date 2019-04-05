import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './layout/containers/App';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

if(!process.env.REACT_APP_API_URL) {
    throw Error('API url is not set');
}
if(!process.env.REACT_APP_API_SESSION_ID) {
    throw Error('API session id is not set');
}
if(!process.env.REACT_APP_SSE_URL) {
    throw Error('SSE url is not set');
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

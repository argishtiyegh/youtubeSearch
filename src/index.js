import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { videoSearchReducer } from './reducers/videoReducer'
import { loadingState } from './reducers/loadingState'


const allReducers = {
    videoSearchReducer,
    loadingState
};

const middleWares = [thunk];

const reducers = combineReducers(allReducers);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleWares)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('youtubeApp')
);
registerServiceWorker();

import React from 'react';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/sagas";
import rootReducer from "./redux/root-reducer";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css'
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

serviceWorker.unregister();

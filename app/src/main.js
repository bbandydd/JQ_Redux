'use strict';

import Redux, { createStore, combineReducers, applyMiddleware } from 'redux';

import clickAction from './actions/clickAction';
import clickReducer from './reducers/clickReducer';
import delayMiddleware from './middlewares/delayMiddleware';

let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);

let reducers =  combineReducers({
    clickReducer
});

let store = createStoreWithMiddleware(reducers);

$(() => {
    let $button1 = $('#button1');
    let $button2 = $('#button2');
    let $button3 = $('#button3');
    let $count = $('#count');

    $button1.bind('click', () => {
        store.dispatch(clickAction());
    })

    $button2.bind('click', () => {
        store.dispatch(clickAction(10));
    })

    $button3.bind('click', () => {
        store.dispatch(clickAction(5, 2));
    })

    store.subscribe(() => {

        let state = store.getState();
        let clickCount = state.clickReducer.clickCount;

        $count.text(clickCount);
    })
});

'use strict';

import app from '../constants/appConstant';

let initState = {
    clickCount: 0
};

let clickReducer = (state = initState, action) => {
    switch(action.type) {
        case app.CLICK_EVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}

module.exports = clickReducer;

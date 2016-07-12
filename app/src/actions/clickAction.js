'use strict';

import app from '../constants/appConstant';

const clickAction = (count = 1, delay = 0) => {
    return {
        type: app.CLICK_EVENT,
        count,
        delay
    }
}

module.exports = clickAction;

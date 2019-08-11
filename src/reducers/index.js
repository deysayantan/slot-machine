import { combineReducers } from 'redux';

import resultReducer from './resultReducer';
import userInteractionReducer from './userInteractionReducer';

const rootReducer = combineReducers({
    result: resultReducer,
    userInteraction: userInteractionReducer,
});

export default rootReducer;

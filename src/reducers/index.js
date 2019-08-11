import { combineReducers } from 'redux';

import resultReducer from './resultReducer';
import userInteractionReducer from './userInteractionReducer';
import slotRunningReducer from './slotRunningReducer'


const rootReducer = combineReducers({
    result: resultReducer,
    userInteraction: userInteractionReducer,
    slotRunning: slotRunningReducer
});

export default rootReducer;

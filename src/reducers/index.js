import { combineReducers } from 'redux';

import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    result: resultReducer,
});

export default rootReducer;

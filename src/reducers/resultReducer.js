import { RESULT } from '../constants';

const resultReducer = (state = {}, action) => {
    if (action.type === RESULT.SAVE) {
        if(action && action.data && action.data.key){
            state[action.data.key] = action.data.value
        } 
    }
    return state;
};

export default resultReducer;
import { RESULT } from '../constants';

const resultReducer = (state = {}, action) => {
    if (action.type === RESULT.SAVE) {
        console.log("resultReducer")
        return{
            ...state,
            result:action.data.value,
        }
    }
    return state;
};

export default resultReducer;
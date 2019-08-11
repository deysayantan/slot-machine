import { USER_INTERACTION } from '../constants';

const resultReducer = (state = {}, action) => {
    if (action.type === USER_INTERACTION.UPDATE) {
        return{
            ...state,
            userActed:action.data.userActed,
        }
    }
    return state;
};

export default resultReducer;
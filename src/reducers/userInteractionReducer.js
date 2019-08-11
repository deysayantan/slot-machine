import { USER_INTERACTION } from '../constants';

const userInteractionReducer = (state = {}, action) => {
    if (action.type === USER_INTERACTION.UPDATE) {
        console.log("userInteractionReducer")
        return{
            ...state,
            userActed:action.data,
        }
    }
    return state;
};

export default userInteractionReducer;
import { SLOT_RUNNING_STATUS } from '../constants';

const slotRunningReducer = (state = {}, action) => {
    if (action.type === SLOT_RUNNING_STATUS.STATUS) {
        return{
            ...state,
            slotRunning:action.data,
        }
    }
    return state;
};

export default slotRunningReducer;
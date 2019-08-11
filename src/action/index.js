import { RESULT,USER_INTERACTION,SLOT_RUNNING_STATUS } from '../constants';

const saveResult = data => ({
    type: RESULT.SAVE,
    data
});

const setUserInteraction = data => ({
    type : USER_INTERACTION.UPDATE,
    data
});

const setSlotRunningStatus = data => ({
    type : SLOT_RUNNING_STATUS.STATUS,
    data
});

export {
    saveResult,
    setUserInteraction,
    setSlotRunningStatus
};
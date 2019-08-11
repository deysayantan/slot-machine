import { RESULT,USER_INTERACTION } from '../constants';

const saveResult = data => ({
    type: RESULT.SAVE,
    data
});

const setUserInteraction = data => ({
    type : USER_INTERACTION.UPDATE,
    data
});

export {
    saveResult,
    setUserInteraction
};
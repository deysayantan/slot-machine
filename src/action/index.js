import { RESULT } from '../constants';

const saveResult = data => ({
    type: RESULT.SAVE,
    data
});

const fetchResult = () => ({
    type: RESULT.FETCH
});

export {
    saveResult,
    fetchResult,
};
import { takeEvery } from 'redux-saga/effects';
import { SLOT_RUNNING_STATUS } from '../constants';

function updateSlotRunningStatusSaga(payload) {
     //Call an endpoint for saving data ( In this example I am returning the same payload)
    return payload;
}

export default function* updateSlotRunningStatusSagaDefault() {
    yield takeEvery(SLOT_RUNNING_STATUS.STATUS, updateSlotRunningStatusSaga);
}

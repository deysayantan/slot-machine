import { takeEvery } from 'redux-saga/effects';
import { SLOT_RUNNING_STATUS } from '../constants';

export function* updateSlotRunningStatusSaga(payload) {
    return payload;
}

export default function* updateSlotRunningStatusSagaDefault() {
    yield takeEvery(SLOT_RUNNING_STATUS.STATUS, updateSlotRunningStatusSaga);
}

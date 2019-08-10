import { put, call, takeEvery, select } from 'redux-saga/effects';
import { saveResult } from '../action/index';
import { RESULT } from '../constants';

export function* saveResultSaga(payload) {
    return payload
}

export default function* saveResultSagaDefault() {
    yield takeEvery(RESULT.SAVE, saveResultSaga);
}

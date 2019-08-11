import { takeEvery } from 'redux-saga/effects';
import { RESULT } from '../constants';

export function* saveResultSaga(payload) {
    return payload
}

export default function* saveResultSagaDefault() {
    yield takeEvery(RESULT.SAVE, saveResultSaga);
}

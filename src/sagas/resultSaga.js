import { takeEvery } from 'redux-saga/effects';
import { RESULT } from '../constants';

function saveResultSaga(payload) {
    //Call an endpoint for saving data ( In this example I am returning the same payload)
    return payload
}

export default function* saveResultSagaDefault() {
    yield takeEvery(RESULT.SAVE, saveResultSaga);
}

import { takeEvery,put } from 'redux-saga/effects';
import { setUserInteraction } from '../action/index';
import { USER_INTERACTION } from '../constants';

export function* updateUserInteractionSaga(payload) {
    //yield put(setUserInteraction(payload.value));
    return payload
}

export default function* updateUserInteractionSagaDefault() {
    yield takeEvery(USER_INTERACTION.UPDATE, updateUserInteractionSaga);
}

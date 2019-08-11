import { takeEvery } from 'redux-saga/effects';
import { USER_INTERACTION } from '../constants';

function updateUserInteractionSaga(payload) {
    return payload
}

export default function* updateUserInteractionSagaDefault() {
    yield takeEvery(USER_INTERACTION.UPDATE, updateUserInteractionSaga);
}

import { takeEvery } from 'redux-saga/effects';
import { USER_INTERACTION } from '../constants';

function updateUserInteractionSaga(payload) {
     //Call an endpoint for saving data ( In this example I am returning the same payload)
    return payload
}

export default function* updateUserInteractionSagaDefault() {
    yield takeEvery(USER_INTERACTION.UPDATE, updateUserInteractionSaga);
}

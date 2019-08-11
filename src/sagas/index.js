import { all } from 'redux-saga/effects';

import resultSaga from './resultSaga';
import userInteractionSaga from './userInteractionSaga'

export default function* rootSaga() {
    yield all([resultSaga(),userInteractionSaga()]);
}
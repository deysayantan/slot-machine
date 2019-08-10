import { all } from 'redux-saga/effects';

import resultSaga from './resultSaga';

export default function* rootSaga() {
    yield all([resultSaga()]);
}